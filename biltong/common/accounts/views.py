from rest_framework import status
from rest_framework.generics import UpdateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework_jwt.settings import api_settings

from common.accounts.serialisers import (
    CreateUserSerialiser,
    UserSerialiser,
    UserUpdateSerialiser,
)
from common.accounts.models import User


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


class GetUserProfileAPIView(APIView):
    def get(self, request: Request):
        queryset = User.objects.all()
        # if not self.request.user.is_authenticated:
        #     data = {"status_code": 403, "message": "You're logged out"}
        #     return Response(data=data, status=status.HTTP_200_OK)

        object_id = self.request.query_params.get("id")

        if object_id is not None and object_id != "":
            queryset = User.objects.get(object_id=object_id)

        serialiser = UserSerialiser(queryset)
        return Response(serialiser.data)


get_user_profile = GetUserProfileAPIView.as_view()


class UpdateUserProfileAPIView(UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserUpdateSerialiser
    permission_classes = [IsAuthenticated]

    def update(self, request, *args, **kwargs):
        instance = User.objects.get(object_id=request.user.object_id)
        serialiser: UserUpdateSerialiser = self.get_serializer(
            instance, data=request.data, partial=True
        )

        if serialiser.is_valid():
            serialiser.save()
            return Response({"message": "mobile number updated successfully"})

        else:
            return Response({"message": "failed", "details": serialiser.errors})


update_user_profile = UpdateUserProfileAPIView.as_view()


class GetUserObjectID(APIView):
    def get(self, request: Request):
        if not self.request.user.is_authenticated:
            data = {"status_code": 403, "message": "User logged out"}
            return Response(data=data, status=status.HTTP_200_OK)

        serialiser = UserSerialiser(request.user)
        return Response(serialiser.data)


get_user_id = GetUserObjectID.as_view()
