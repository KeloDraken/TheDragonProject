from rest_framework import serializers
from core.posts.models import Post, Tag


class PostListSerialiser(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()

    def get_author(self, obj):
        return {"username": obj.author.username, "object_id": obj.author.object_id}

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
            "tags",
        )


class TagListSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ("name",)


class PostCreateSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            "title",
            "cover_image",
            "text",
            "tags",
        )
