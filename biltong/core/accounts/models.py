from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit

from utils.helpers import object_id_generator
from core.accounts.validators import UnicodeEmailValidator


class LowercaseCharField(models.CharField):
    """
    Override CharField to convert to lowercase before saving.
    """

    def to_python(self, value):
        """
        Convert text to lowercase.
        """
        value = super(LowercaseCharField, self).to_python(value)
        # Value can be None so check that it's a string before lowercasing.
        if isinstance(value, str):
            value = value.replace(" ", "_")
            return value.lower()
        return value


class User(AbstractUser):
    """
    Users, within the ChafPozi authentication system, are represented by this
    model.
    """

    object_id = models.CharField(max_length=50, null=True, blank=True)
    is_fake_profile = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)
    points = models.IntegerField(default=0)
    num_posts = models.PositiveIntegerField(default=0)
    username = LowercaseCharField(
        # Copying this from AbstractUser code
        _("username"),
        max_length=300,
        unique=True,
        help_text=_(
            "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only."
        ),
        validators=[
            UnicodeEmailValidator(),
        ],
        error_messages={
            "unique": _("This username is not available, please try another one."),
        },
    )
    display_name = models.CharField(max_length=100, null=True, blank=True)
    profile_pic = ProcessedImageField(
        upload_to="accounts/profile_pics/",
        processors=[ResizeToFit(300, 400)],
        format="JPEG",
        options={"quality": 90},
        null=True,
        blank=True,
    )
    bio = models.TextField(null=True, blank=True, max_length=300)
    subscribers = models.PositiveBigIntegerField(default=1)
    # User social media links
    instagram = models.CharField(max_length=60, null=True, blank=True)
    vsco = models.CharField(max_length=60, null=True, blank=True)
    twitter = models.CharField(max_length=60, null=True, blank=True)
    website = models.URLField(max_length=300, null=True, blank=True)

    def save(self, **kwargs):
        self.object_id = object_id_generator(30, User)
        return super(User, self).save(**kwargs)
