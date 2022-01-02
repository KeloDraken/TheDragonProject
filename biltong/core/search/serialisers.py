from rest_framework import serializers
from core.posts.models import Post


class SearchQuerySerialiser(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            "object_id",
            "title",
        )
