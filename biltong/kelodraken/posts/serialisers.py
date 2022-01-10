from rest_framework import serializers
from kelodraken.posts.models import Post


class PostListSerialiser(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()

    def get_author(self, obj: Post):
        return {
            "username": obj.author.username,
            "display_name": obj.author.display_name,
            "is_verified": obj.author.is_verified,
            "object_id": obj.author.object_id,
            "profile_pic": obj.author.profile_pic,
            "cover_pic": obj.author.cover_pic,
            "bio": obj.author.bio,
        }

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


class PostCreateSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            "title",
            "cover_image",
            "text",
            "tags",
        )
