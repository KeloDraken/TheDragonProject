from rest_framework.generics import ListAPIView

from core.posts.models import Post
from core.posts.serialisers import PostListSerialiser


class PostListAPIView(ListAPIView):
    serializer_class = PostListSerialiser
    queryset = Post.objects.all()

posts_list = PostListAPIView.as_view()
