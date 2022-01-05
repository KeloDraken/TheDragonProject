from rest_framework.generics import ListAPIView

from core.tags.models import Tag
from core.tags.serialisers import TagListSerialiser


class TagListAPIView(ListAPIView):
    serializer_class = TagListSerialiser

    def get_queryset(self):
        return Tag.objects.all().exclude(name="").order_by("posts")


tag_list = TagListAPIView.as_view()
