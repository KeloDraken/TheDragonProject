# Generated by Django 3.2.2 on 2021-12-20 12:50

import core.accounts.models
import core.accounts.validators
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_alter_user_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='username',
            field=core.accounts.models.LowercaseCharField(error_messages={'unique': 'This username is not available, please try another one.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=300, unique=True, validators=[core.accounts.validators.UnicodeEmailValidator()], verbose_name='username'),
        ),
    ]
