import random
from typing import List

from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.response import Response

from common.accounts.models import User
from kelodraken.tags.models import Tag
from kelodraken.posts.models import Post
from kelodraken.posts.serialisers import (
    PostCreateSerialiser,
    PostListSerialiser,
    ReportPostSerialiser,
)


class PostListAPIView(ListAPIView):
    serializer_class = PostListSerialiser

    def get_queryset(self):
        return (
            Post.objects.exclude(
                title="Author was too 'cool' to follow markdown guidelines 🙄"
            )
            .exclude(
                title="Code of Conduct"
                # TODO: exclude by object_id instead of title
            )
            .order_by("-datetime_created")
        )


posts_list = PostListAPIView.as_view()


class RecommendedPostsListAPIView(ListAPIView):
    serializer_class = PostListSerialiser

    def get_queryset(self):
        return (
            Post.objects.order_by("?")
            .exclude(title="Author was too 'cool' to follow markdown guidelines 🙄")
            .exclude(title="Code of Conduct")[:3]
        )


recommended_posts_list = RecommendedPostsListAPIView.as_view()


class GetRecommendedAPIView(ListAPIView):
    serializer_class = PostListSerialiser

    def get_posts(self, post_id: str, random_tag_choice: str):
        recommended_posts: Post = Post.objects.exclude(object_id=post_id).filter(
            tags__icontains=random_tag_choice
        )[:3]
        return recommended_posts

    def get_queryset(self):
        post_id: str = self.kwargs["post_id"]
        post: Post = Post.objects.get(object_id=post_id)
        tags: List[str] = post.tags.split(",")

        random_tag_choice: str = random.choice(tags)
        recommended_posts: Post = self.get_posts(post_id, random_tag_choice)

        while not recommended_posts:
            random_tag_choice: str = random.choice(tags)
            recommended_posts: Post = self.get_posts(post_id, random_tag_choice)
        return recommended_posts


get_recommeded_posts = GetRecommendedAPIView.as_view()


class GetPostAPIView(ListAPIView):
    serializer_class = PostListSerialiser

    def get_queryset(self):
        post_id: str = self.kwargs["post_id"]
        return Post.objects.filter(object_id=post_id)


get_post = GetPostAPIView.as_view()


class CreatePostAPIView(CreateAPIView):
    serializer_class = PostCreateSerialiser
    permission_classes = [IsAuthenticated]

    def extract_hashtags(self, text: str):
        """
        Function to extract all the hashtags in a product description.
        It generates new `Tag` instance, if it does not exist, for each of
        of the tags
        """
        hashtag_list: List[str] = [tag for tag in text.split(",")]

        for hashtag in hashtag_list:
            obj: Tag
            obj, created = Tag.objects.get_or_create(
                name=hashtag.lower(),
            )
            if created:
                obj.creator = self.request.user
                obj.save()

            obj.posts += 1
            obj.save()

    def perform_create(self, serializer: PostCreateSerialiser):
        user: User = self.request.user
        user.posts += 1
        user.save()
        return serializer.save(author=user)

    def create(self, request: Request, *args, **kwargs):
        serialiser = self.get_serializer(data=request.data)
        serialiser.is_valid(raise_exception=True)
        instance = self.perform_create(serialiser)
        instance_serialiser = PostListSerialiser(instance)
        tags = instance_serialiser.data.get("tags")
        self.extract_hashtags(tags)
        return Response(instance_serialiser.data)


create_post = CreatePostAPIView.as_view()


class ReportPostAPIView(CreateAPIView):
    serializer_class = ReportPostSerialiser
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer: PostCreateSerialiser):
        post_id: str = self.kwargs["post_id"]
        post: Post = Post.objects.get(object_id=post_id)
        return serializer.save(user=self.request.user, post=post)


report_post = ReportPostAPIView.as_view()
