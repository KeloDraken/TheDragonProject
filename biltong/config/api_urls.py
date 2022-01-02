from django.urls import include, path

from rest_framework_jwt.views import obtain_jwt_token


urlpatterns = [
    path("v1/core/", include("core.urls", namespace="core")),
    path("v1/users/login/", obtain_jwt_token, name="user-login"),
    path("v1/users/", include("core.accounts.urls", namespace="accounts")),
    path("v1/posts/", include("core.posts.urls", namespace="posts")),
    path("v1/products/", include("core.products.urls", namespace="products")),
    path("v1/search/", include("core.search.urls", namespace="search")),
]
