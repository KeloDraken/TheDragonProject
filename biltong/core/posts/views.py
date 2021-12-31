from rest_framework.request import Request
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.response import Response

from core.posts.models import Post, Tag
from core.posts.serialisers import (
    PostCreateSerialiser,
    PostListSerialiser,
    TagListSerialiser,
)


class PostListAPIView(ListAPIView):
    serializer_class = PostListSerialiser

    def get_queryset(self):
        return (
            Post.objects.exclude(
                title="Author was too 'cool' to follow markdown guidelines 🙄"
            )
            .exclude(title="Code of Conduct")
            .order_by("-datetime_created")
        )


posts_list = PostListAPIView.as_view()


class RecommendedPostsListAPIView(ListAPIView):
    serializer_class = PostListSerialiser

    def get_queryset(self):
        return Post.objects.exclude(
            title="Author was too 'cool' to follow markdown guidelines 🙄"
        ).exclude(title="Code of Conduct")[:3]


recommended_posts_list = RecommendedPostsListAPIView.as_view()


class GetPostAPIView(ListAPIView):
    serializer_class = PostListSerialiser

    def get_queryset(self):
        post_id = self.kwargs["post_id"]
        return Post.objects.filter(object_id=post_id)


get_post = GetPostAPIView.as_view()


class CreatePostAPIView(CreateAPIView):
    serializer_class = PostCreateSerialiser

    def extract_hashtags(self, text: str):
        """
        Function to extract all the hashtags in a product description.
        It generates new `Tag` instance, if it does not exist, for each of
        of the tags
        """
        hashtag_list = [tag for tag in text.split(",")]

        for hashtag in hashtag_list:
            obj, created = Tag.objects.get_or_create(
                name=hashtag.lower(),
            )

    def perform_create(self, serializer: PostCreateSerialiser):
        return serializer.save(author=self.request.user)

    def create(self, request: Request, *args, **kwargs):
        serialiser = self.get_serializer(data=request.data)
        serialiser.is_valid(raise_exception=True)
        instance = self.perform_create(serialiser)
        instance_serialiser = PostListSerialiser(instance)
        tags = instance_serialiser.data.get("tags")
        self.extract_hashtags(tags)
        return Response(instance_serialiser.data)


create_post = CreatePostAPIView.as_view()


class TagListAPIView(ListAPIView):
    serializer_class = TagListSerialiser

    def get_queryset(self):
        return Tag.objects.all().exclude(name="")


tag_list = TagListAPIView.as_view()
