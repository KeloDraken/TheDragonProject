from django.urls import path

from core.search.views import handle_search


app_name = "search"

urlpatterns = [
    path("", handle_search, name="handle-search"),
]
