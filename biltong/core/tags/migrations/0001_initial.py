# Generated by Django 3.2.2 on 2022-01-05 12:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=2000, unique=True)),
                ('followers', models.PositiveIntegerField(default=0)),
                ('about', models.TextField(blank=True, null=True)),
                ('accent_colour', models.CharField(blank=True, default='ffffff', max_length=2000, null=True)),
                ('cover_image', models.CharField(blank=True, max_length=2000, null=True)),
                ('posts', models.PositiveIntegerField(default=0)),
                ('creator', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
