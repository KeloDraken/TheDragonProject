from django.urls import path

from core.posts.views import create_post, posts_list


app_name = "posts"

urlpatterns = [
    path("list/", posts_list, name="post-list"),
    path("create/", create_post, name="post-create"),
]