from rest_framework import serializers
from kelodraken.models import Update


class UpdateListSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Update
        fields = (
            "object_id",
            "title",
            "datetime_created",
        )
