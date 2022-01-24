from django.contrib import admin
from django.urls import include, path

from rest_framework_jwt.views import obtain_jwt_token


urlpatterns = [
    path("admin/", admin.site.urls),
    path("v1/core/", include("kelodraken.urls", namespace="kelodraken")),
    path("v1/users/login/", obtain_jwt_token, name="user-login"),
    path("v1/users/", include("common.accounts.urls", namespace="accounts")),
    path("v1/posts/", include("kelodraken.posts.urls", namespace="posts")),
    path("v1/search/", include("kelodraken.search.urls", namespace="search")),
    path("v1/tags/", include("kelodraken.tags.urls", namespace="tags")),
]
