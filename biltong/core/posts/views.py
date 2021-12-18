from rest_framework.generics import CreateAPIView, ListAPIView

from core.posts.models import Post
from core.posts.serialisers import PostCreateSerialiser, PostListSerialiser


class PostListAPIView(ListAPIView):
    serializer_class = PostListSerialiser

    def get_queryset(self):
        return Post.objects.all().order_by("-datetime_created")


posts_list = PostListAPIView.as_view()


class CreatePostAPIView(CreateAPIView):
    serializer_class = PostCreateSerialiser

    def get_queryset(self, *args, **kwargs):
        return Post.objects.all()

    def post(self, request, *args, **kwargs):
        if self.serializer_class.errors:
            print(self.serializer_class.errors)
        return self.create(request, *args, **kwargs)


create_post = CreatePostAPIView.as_view()
