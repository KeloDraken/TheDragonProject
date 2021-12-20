from django.http import HttpRequest

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework_jwt.settings import api_settings

from core.accounts.serialisers import CreateUserSerialiser
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

    def post(self, request: HttpRequest, *args, **kwargs):
        """
        Handles post request
        """
        if request.user.is_authenticated:
            data = {"status_code": 403, "message": "You are already have an account"}
            return Response(data=data, status=status.HTTP_403_FORBIDDEN)

        serialiser = CreateUserSerialiser(data=request.data)
        if serialiser.is_valid():
            serialiser.save()

            username = serialiser.data.get("username")
            token = self.login_user_after_register(username)
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
                "message": "This email address is already with an account. Please try logging in.",
            }
            return Response(data=data, status=status.HTTP_200_OK)

        data = {"status_code": 400, "message": serialiser.errors}
        print(serialiser.errors)
        return Response(data=data, status=status.HTTP_400_BAD_REQUEST)


user_registration = CreateUserAPIView.as_view()
