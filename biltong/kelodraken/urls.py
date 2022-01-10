from django.urls import path

from kelodraken.views import updates_list


app_name = "kelodraken"

urlpatterns = [
    path("updates/", updates_list, name="updates-list"),
]
