from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),

    path("api/v1/posts/", include("core.posts.urls", namespace="posts")),
    path("api/v1/products/", include("core.products.urls", namespace="products")),
]
