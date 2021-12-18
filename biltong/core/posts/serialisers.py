from rest_framework import serializers

from utils.helpers import object_id_generator
from core.posts.models import Post



class PostListSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
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