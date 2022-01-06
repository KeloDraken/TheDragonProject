from django.urls import path

from core.search.views import handle_search, search_history


app_name = "search"

urlpatterns = [
    path("", handle_search, name="handle-search"),
    path("history/", search_history, name="search-history"),
]
