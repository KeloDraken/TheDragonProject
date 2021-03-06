from rest_framework.generics import ListAPIView

from kelodraken.models import Update
from kelodraken.serialisers import UpdateListSerialiser


class UpdateListAPIView(ListAPIView):
    serializer_class = UpdateListSerialiser

    def get_queryset(self):
        return Update.objects.all().order_by("-datetime_created")[:3]


updates_list = UpdateListAPIView.as_view()
