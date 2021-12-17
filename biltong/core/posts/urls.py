from django.urls import path

from core.posts.views import posts_list


app_name = "posts"

urlpatterns = [
    path("list/", posts_list, name="post-list"),
]