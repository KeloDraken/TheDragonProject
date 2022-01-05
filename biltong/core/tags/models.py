from django.db import models

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
