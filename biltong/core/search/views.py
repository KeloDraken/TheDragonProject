from django.db.models import Q
from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from core.posts.models import Post
from core.search.serialisers import SearchQuerySerialiser


class SearchAPIView(ListAPIView):
    serializer_class = SearchQuerySerialiser

    def get_queryset(self):

        queryset = Post.objects.all()

        search_query = self.request.query_params.get("q")

        if search_query is not None and search_query != "":
            queryset = (
                queryset.filter(
                    Q(title__icontains=search_query)
                    | Q(text__icontains=search_query)
                    | Q(author__username__icontains=search_query)
                )
                .order_by("-datetime_created")
                .exclude(title="Code of Conduct")
                .exclude(title="Author was too 'cool' to follow markdown guidelines 🙄")[
                    :5
                ]
            )
            return queryset
        return Post.objects.all()[:0]


handle_search = SearchAPIView.as_view()
