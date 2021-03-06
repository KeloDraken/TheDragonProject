from django.urls import path
from common.accounts.views import (
    get_user_id,
    get_user_profile,
    user_registration,
    update_user_profile,
)

app_name = "accounts"


urlpatterns = [
    path("update/", update_user_profile, name="update-user-profile"),
    path("get/", get_user_profile, name="get-user-profile"),
    path("register/", user_registration, name="user-register"),
    path("object_id/", get_user_id, name="get-user-id"),
]
