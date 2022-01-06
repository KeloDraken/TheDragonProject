from rest_framework import serializers

from core.posts.models import Post
from core.search.models import Search


class SearchQuerySerialiser(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            "object_id",
            "title",
        )


class SearchHistorySerialiser(serializers.ModelSerializer):
    class Meta:
        model = Search
        fields = ("query",)
