from django.contrib import admin
from core.posts.models import Post, Tag

admin.site.register(Post)
admin.site.register(Tag)
