from rest_framework import serializers

from core.accounts.models import User


class CreateUserSerialiser(serializers.ModelSerializer):
    @classmethod
    def create(cls, validated_data):
        password = validated_data.pop("password")
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user

    class Meta:
        model = User
        fields = (
            "username",
            "password",
        )
