from django.contrib import admin

from core.products.models import Product, ProductUpdate


admin.site.register(Product)
admin.site.register(ProductUpdate)
