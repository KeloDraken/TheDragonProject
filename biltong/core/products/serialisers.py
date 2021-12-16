from rest_framework import serializers
from core.products.models import Product


class PostListSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            "object_id",
            "name",
            "image_url",
            "tag_line",
            "revenue",
        )
