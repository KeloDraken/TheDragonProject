from django.urls import path

from core.products.views import product_list


app_name = "productions"

urlpatterns = [
    path("list/", product_list, name="product-list"),
]