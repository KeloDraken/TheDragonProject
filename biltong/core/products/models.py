from django.db import models


class Product(models.Model):
    object_id: str = models.CharField(max_length=30, null=True, blank=True)
    name: str = models.CharField(max_length=1000, null=False, blank=False)
    image_url: str = models.CharField(max_length=1000, null=False, blank=False)
    tag_line: str = models.CharField(max_length=140, null=False, blank=False)
    short_description: str = models.CharField(max_length=1000, null=False, blank=False)
    updates: int = models.PositiveIntegerField(default=0)
    followers: int = models.PositiveIntegerField(default=0)
    revenue: float = models.FloatField(default=0.0)
    url: str = models.URLField(max_length=1000, null=False, blank=False)
    twitter: str = models.URLField(max_length=1000, null=True, blank=True)
    facebook: str = models.URLField(max_length=1000, null=True, blank=True)
    instagram: str = models.URLField(max_length=1000, null=True, blank=True)

    def __str__(self):
        return self.name


class ProductUpdate(models.Model):
    object_id: str = models.CharField(max_length=30, null=True, blank=True)
    title: str = models.CharField(max_length=1000, null=False, blank=False)
    details: str = models.TextField(null=True, blank=True)
    date_created = models.DateField(auto_now_add=True)
    datetime_created = models.DateTimeField(auto_now_add=True)
