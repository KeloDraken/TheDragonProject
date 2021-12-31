from django.contrib import admin
from django.urls import include, path

from rest_framework_jwt.views import obtain_jwt_token


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/core/", include("core.urls", namespace="core")),
    path("api/v1/users/login/", obtain_jwt_token, name="user-login"),
    path("api/v1/users/", include("core.accounts.urls", namespace="accounts")),
    path("api/v1/posts/", include("core.posts.urls", namespace="posts")),
    path("api/v1/products/", include("core.products.urls", namespace="products")),
]
