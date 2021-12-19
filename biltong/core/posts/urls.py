from django.urls import path

from core.posts.views import create_post, get_post, posts_list, recommended_posts_list


app_name = "posts"

urlpatterns = [
    path("list/", posts_list, name="post-list"),
    path("create/", create_post, name="post-create"),
    path("get/recommended/", recommended_posts_list, name="recommended-posts"),
    path("get/<post_id>/", get_post, name="get-post"),
]
