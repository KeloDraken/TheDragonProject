from django.db import models

from markdownfield.models import MarkdownField, RenderedMarkdownField
from markdownfield.validators import VALIDATOR_CLASSY

from utils.helpers import object_id_generator
from core.accounts.models import User


class Tag(models.Model):
    creator = models.ForeignKey(
        User, null=True, blank=True, on_delete=models.DO_NOTHING
    )
    name: str = models.CharField(unique=True, max_length=2000, null=False, blank=False)
    followers: int = models.PositiveIntegerField(default=0)
    about: str = models.TextField(null=True, blank=True)
    accent_colour: str = models.CharField(
        default="ffffff", max_length=2000, null=True, blank=True
    )
    cover_image: str = models.CharField(max_length=2000, null=True, blank=True)
    posts: int = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name


class Post(models.Model):
    object_id: str = models.CharField(max_length=30, null=True, blank=True)
    author: str = models.ForeignKey(
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
