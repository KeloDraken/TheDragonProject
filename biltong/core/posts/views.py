from rest_framework.request import Request
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.response import Response

from core.posts.models import Post
from core.posts.serialisers import PostCreateSerialiser, PostListSerialiser


class PostListAPIView(ListAPIView):
    serializer_class = PostListSerialiser

    def get_queryset(self):
        return Post.objects.order_by("-datetime_created")


posts_list = PostListAPIView.as_view()


class RecommendedPostsListAPIView(ListAPIView):
    serializer_class = PostListSerialiser

    def get_queryset(self):
        return Post.objects.all().order_by("?")[:3]


recommended_posts_list = RecommendedPostsListAPIView.as_view()


class GetPostAPIView(ListAPIView):
    serializer_class = PostListSerialiser

    def get_queryset(self):
        post_id = self.kwargs["post_id"]
        return Post.objects.filter(object_id=post_id)


get_post = GetPostAPIView.as_view()


class CreatePostAPIView(CreateAPIView):
    serializer_class = PostCreateSerialiser

    def perform_create(self, serializer: PostCreateSerialiser):
        return serializer.save(author=self.request.user)

    def create(self, request: Request, *args, **kwargs):
        serialiser = self.get_serializer(data=request.data)
        serialiser.is_valid(raise_exception=True)
        instance = self.perform_create(serialiser)
        instance_serialiser = PostListSerialiser(instance)
        super().create(request, *args, **kwargs)
        return Response(instance_serialiser.data)


create_post = CreatePostAPIView.as_view()
