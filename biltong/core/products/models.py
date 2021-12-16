from django.db import models


class Product(models.Model):
    object_id = models.CharField(max_length=30, null=True, blank=True)
    name = models.CharField(max_length=1000, null=False, blank=False)
    image_url = models.CharField(max_length=1000, null=False, blank=False)
    tag_line = models.CharField(max_length=140, null=False, blank=False)
    short_description = models.CharField(max_length=1000, null=False, blank=False)
    updates = models.PositiveIntegerField(default=0)
    followers = models.PositiveIntegerField(default=0)
    revenue = models.PositiveIntegerField(default=0)
    url = models.URLField(max_length=1000, null=False, blank=False)
    twitter = models.URLField(max_length=1000, null=True, blank=True)
    facebook = models.URLField(max_length=1000, null=True, blank=True)
    instagram = models.URLField(max_length=1000, null=True, blank=True)

    def __str__(self):
        return self.name


class ProductUpdate(models.Model):
    object_id = models.CharField(max_length=30, null=True, blank=True)
    title = models.CharField(max_length=1000, null=False, blank=False)
    details = models.TextField(null=True, blank=True)
    date_created = models.DateField(auto_now_add=True)
    datetime_created = models.DateTimeField(auto_now_add=True)


class Tag(models.Model):
    object_id = models.CharField(max_length=30, null=True, blank=True)
    name = models.CharField(max_length=1000, null=False, blank=False)

    def __str__(self):
        return self.name


class ProductTag(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="producttag_product"
    )
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE, related_name="productag_tag")
