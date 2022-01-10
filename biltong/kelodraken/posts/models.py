from django.db import models

from markdownfield.models import MarkdownField, RenderedMarkdownField
from markdownfield.validators import VALIDATOR_CLASSY

from utils.helpers import object_id_generator
from common.accounts.models import User


class Post(models.Model):
    object_id: str = models.CharField(max_length=30, null=True, blank=True)
    author: User = models.ForeignKey(
        User, on_delete=models.DO_NOTHING, null=True, blank=True
    )
    title: str = models.CharField(
        max_length=140,
        null=False,
        blank=True,
        default="Author was too 'cool' to follow markdown guidelines 🙄",
    )
    cover_image: str = models.CharField(max_length=2000, null=True, blank=True)
    text: str = MarkdownField(
        rendered_field="text_rendered",
        use_editor=False,
        use_admin_editor=True,
        validator=VALIDATOR_CLASSY,
    )
    text_rendered: str = RenderedMarkdownField()
    tags: str = models.CharField(max_length=4000, null=True, blank=True)
    date_created = models.DateField(auto_now_add=True)
    datetime_created = models.DateTimeField(auto_now_add=True)

    def save(self, **kwargs):
        self.object_id = object_id_generator(15, Post)
        return super(Post, self).save(**kwargs)


class Report(models.Model):
    post: Post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user: User = models.ForeignKey(
        User,
        on_delete=models.DO_NOTHING,
        null=True,
        blank=True,
    )
    text: str = models.TextField(null=False, blank=False)
