import random
import string

from django.db.models.base import Model
# from core.posts.models import Post


def extract_hashtags(text: str):
    """
    Function to extract all the hashtags in a product description.
    It generates new `Tag` instance, if it does not exist, for each of
    of the tags
    """
    hashtag_list = []

    for word in text.split():
        if word[0] == "#":
            hashtag_list.append(word[1:])

    # for hashtag in hashtag_list:
    #     obj, created = Tag.objects.get_or_create(
    #         name=hashtag.lower(),
    #     )
    return hashtag_list


# def link_tags_to_post(post_id, tags):
#     post = Post.objects.get(object_id=post_id)
#     for tag in tags:
#         _tag = Tag.objects.get(name=tag.lower())
#         PostTag.objects.create(post=post, tag=_tag)


def object_id_generator(size, model, chars=string.ascii_letters + string.digits):
    """
    Generates and returns base64 call id
    """
    object_id = "".join(random.choice(chars) for _ in range(size))
    return check_object_id_exists(object_id=object_id, model=model)


def check_object_id_exists(object_id: str, model: Model):
    """
    Checks if call id exists. Generates and returns new call id if exists
    """
    try:
        model.objects.get(object_id=object_id)
        new_object_id = object_id_generator()
        check_object_id_exists(object_id=new_object_id, model=model)
    except model.DoesNotExist:
        return object_id
