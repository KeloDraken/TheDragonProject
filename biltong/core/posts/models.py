from django.db import models

from markdownfield.models import MarkdownField, RenderedMarkdownField
from markdownfield.validators import VALIDATOR_CLASSY

from utils.helpers import object_id_generator
from core.accounts.models import User


class Post(models.Model):
    object_id = models.CharField(max_length=30, null=True, blank=True)
    author = models.ForeignKey(User, on_delete=models.DO_NOTHING, null=True, blank=True)
    title = models.CharField(
        max_length=140,
        null=False,
        blank=False,
        default="Author was too 'cool' to follow markdown guidelines 🙄",
    )
    cover_image = models.CharField(max_length=2000, null=True, blank=True)
    text = MarkdownField(
        rendered_field="text_rendered",
        use_editor=False,
        use_admin_editor=True,
        validator=VALIDATOR_CLASSY,
    )
    text_rendered = RenderedMarkdownField()
    date_created = models.DateField(auto_now_add=True)
    datetime_created = models.DateTimeField(auto_now_add=True)

    def save(self, **kwargs):
        self.object_id = object_id_generator(15, Post)
        return super(Post, self).save(**kwargs)
