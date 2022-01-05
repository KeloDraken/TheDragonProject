from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from core.tags.views import (
    tag_list,
)


app_name = "tags"

urlpatterns = format_suffix_patterns(
    [
        path("tags/list/", tag_list, name="tag-list"),
    ]
)
