# Generated by Django 3.2.2 on 2021-12-30 13:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tag',
            name='name',
            field=models.CharField(max_length=2000, unique=True),
        ),
    ]