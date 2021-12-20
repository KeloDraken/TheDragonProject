from django.urls import path
from core.accounts.views import get_user_id, user_registration

app_name = "accounts"


urlpatterns = [
    path("register/", user_registration, name="user-register"),
    path("object_id/", get_user_id, name="get-user-id"),
]
