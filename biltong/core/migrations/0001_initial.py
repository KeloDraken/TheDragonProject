# Generated by Django 3.2.2 on 2021-12-31 06:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Update',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('object_id', models.CharField(blank=True, max_length=30, null=True)),
                ('content', models.CharField(max_length=300)),
                ('datetime_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
