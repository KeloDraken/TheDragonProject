import random
import string

from django.db.models.base import Model


def object_id_generator(size, model, chars=string.ascii_letters + string.digits) -> str:
    """
    Generates and returns base64 call id
    """
    object_id: str = "".join(random.choice(chars) for _ in range(size))
    return check_object_id_exists(object_id=object_id, model=model)


def check_object_id_exists(object_id: str, model: Model) -> str:
    """
    Checks if call id exists. Generates and returns new call id if exists
    """
    try:
        model.objects.get(object_id=object_id)
        new_object_id: str = object_id_generator()
        check_object_id_exists(object_id=new_object_id, model=model)
    except model.DoesNotExist:
        return object_id
    except:
        return object_id
