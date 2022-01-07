# Generated by Django 3.2.2 on 2022-01-05 12:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Product",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("object_id", models.CharField(blank=True, max_length=30, null=True)),
                ("name", models.CharField(max_length=1000)),
                ("image_url", models.CharField(max_length=1000)),
                ("tag_line", models.CharField(max_length=140)),
                ("short_description", models.CharField(max_length=1000)),
                ("updates", models.PositiveIntegerField(default=0)),
                ("followers", models.PositiveIntegerField(default=0)),
                ("revenue", models.FloatField(default=0.0)),
                ("url", models.URLField(max_length=1000)),
                ("twitter", models.URLField(blank=True, max_length=1000, null=True)),
                ("facebook", models.URLField(blank=True, max_length=1000, null=True)),
                ("instagram", models.URLField(blank=True, max_length=1000, null=True)),
            ],
        ),
        migrations.CreateModel(
            name="ProductUpdate",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("object_id", models.CharField(blank=True, max_length=30, null=True)),
                ("title", models.CharField(max_length=1000)),
                ("details", models.TextField(blank=True, null=True)),
                ("date_created", models.DateField(auto_now_add=True)),
                ("datetime_created", models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
