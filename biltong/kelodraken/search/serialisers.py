from rest_framework import serializers

from kelodraken.posts.models import Post
from kelodraken.search.models import Search


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
