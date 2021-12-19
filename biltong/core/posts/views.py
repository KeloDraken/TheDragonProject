from rest_framework.generics import CreateAPIView, ListAPIView

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

    def get_queryset(self, *args, **kwargs):
        return Post.objects.all()

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


create_post = CreatePostAPIView.as_view()
