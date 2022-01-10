from django.db import models
from kelodraken.accounts.models import User


class Search(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    query: str = models.CharField(max_length=4000, null=False, blank=False)
    datetime_created = models.DateTimeField(auto_now_add=True)
