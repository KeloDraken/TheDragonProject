from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend
from django.http.request import HttpRequest


class EmailBackend(ModelBackend):
    def authenticate(
        self, request: HttpRequest, username: str = None, password: str = None, **kwargs
    ):
        UserModel = get_user_model()
        try:
            user = UserModel.objects.get(username=username)
        except UserModel.DoesNotExist:
            return None
        else:
            if user.check_password(password):
                return user
        return None
