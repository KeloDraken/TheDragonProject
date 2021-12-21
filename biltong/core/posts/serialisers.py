from rest_framework import serializers
\
from core.posts.models import Post


class PostListSerialiser(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()

    def get_author(self, obj):
        return {"username": obj.author.username}

    class Meta:
        model = Post
        fields = (
            "author",
            "object_id",
            "title",
            "cover_image",
            "text",
            "date_created",
            "datetime_created",
        )


class PostCreateSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            "title",
            "cover_image",
            "text",
        )
