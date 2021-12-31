from django.db import models

from utils.helpers import object_id_generator


class Update(models.Model):
    object_id = models.CharField(max_length=30, null=True, blank=True)
    content = models.CharField(max_length=300, null=False, blank=False)
    datetime_created = models.DateTimeField(auto_now_add=True)

    def save(self, **kwargs):
        self.object_id = object_id_generator(15, Update)
        return super(Update, self).save(**kwargs)
