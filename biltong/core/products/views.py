from rest_framework.generics import ListAPIView

from core.products.models import Product
from core.products.serialisers import PostListSerialiser


class ProductListAPIView(ListAPIView):
    serializer_class = PostListSerialiser
    queryset = Product.objects.all()


product_list = ProductListAPIView.as_view()
