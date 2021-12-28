from django.db import models

from utils.helpers import object_id_generator

from core.accounts.models import User
from core.posts.models import Post


class List(models.Model):
    object_id = models.CharField(max_length=30, null=True, blank=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    datetime_added = models.DateTimeField(auto_now_add=True)

    def save(self, **kwargs):
        self.object_id = object_id_generator(30, List)
        return super(List, self).save(**kwargs)
