from typing import Dict
from rest_framework import status
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework_jwt.settings import api_settings

from core.accounts.serialisers import CreateUserSerialiser, UserSerialiser
from core.accounts.models import User


class CreateUserAPIView(APIView):
    """
    Creates new `User` instance associated with `request.user`
    """

    def login_user_after_register(self, username: str):
        """
        Logs in user after registration
        """
        user = User.objects.get(username=username.lower())
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
        payload = jwt_payload_handler(user)
        return jwt_encode_handler(payload)

    def post(self, request: Request, *args, **kwargs):
        """
        Handles post request
        """
        if self.request.user.is_authenticated:
            data = {"status_code": 403, "message": "You are already have an account"}
            return Response(data=data, status=status.HTTP_403_FORBIDDEN)

        serialiser = CreateUserSerialiser(data=request.data)
        if serialiser.is_valid():
            serialiser.save()

            username: str = serialiser.data.get("username")
            token: str = self.login_user_after_register(username)
            data = {
                "token": token,
                "status_code": 201,
                "message": "Successfully created your account",
            }
            return Response(data=data, status=status.HTTP_201_CREATED)

        if (
            "This username is not available, please try another one."
            in serialiser.errors.get("username")[-1]
        ):
            data = {
                "status_code": 422,
                "message": "This email address already has an account associated with it. Please try logging in.",
            }
            return Response(data=data, status=status.HTTP_200_OK)
        elif (
            "Enter a valid WeThinkCode email address."
            in serialiser.errors.get("username")[-1]
        ):
            data = {
                "status_code": 423,
                "message": "This is not a valid WTC student email address.",
            }
            return Response(data=data, status=status.HTTP_200_OK)

        data = {"status_code": 400, "message": serialiser.errors}
        print(serialiser.errors)
        return Response(data=data, status=status.HTTP_400_BAD_REQUEST)


user_registration = CreateUserAPIView.as_view()


class GetUserObjectID(APIView):
    def get(self, request: Request):
        if not self.request.user.is_authenticated:
            data = {"status_code": 403, "message": "User logged out"}
            return Response(data=data, status=status.HTTP_200_OK)

        serializer = UserSerialiser(request.user)
        return Response(serializer.data)


get_user_id = GetUserObjectID.as_view()
