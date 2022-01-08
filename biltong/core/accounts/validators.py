from django.core import validators
from django.utils.deconstruct import deconstructible
from django.utils.translation import gettext_lazy as _


@deconstructible
class UnicodeEmailValidator(validators.RegexValidator):
    regex = r"(^[a-zA-Z0-9_.+-]+@student.wethinkcode.co.za+$)"
    message = _("Enter a valid WeThinkCode email address.")
    flags = 0
