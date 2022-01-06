from rest_framework import serializers
from core.tags.models import Tag


class TagListSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = (
            "name",
            "posts",
        )
