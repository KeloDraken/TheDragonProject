from rest_framework import serializers
from core.posts.models import Post


class PostListSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            "object_id",
            "title",
            "cover_image",
            "text_rendered",
            "date_created",
            "datetime_created",
        )
