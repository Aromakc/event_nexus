from django.contrib import admin
from .models import Organizer, User, Post, Subscription

# Register your models here.
admin.site.register(Organizer)
admin.site.register(User)
admin.site.register(Post)
admin.site.register(Subscription)
