from django.urls import path

from core.views import updates_list


app_name = "core"

urlpatterns = [
    path("updates/", updates_list, name="updates-list"),
]
