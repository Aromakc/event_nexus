from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from graphene_django.views import GraphQLView
from django.views.generic import RedirectView

urlpatterns = [
    path("", include("events.urls")),
    # path("", RedirectView.as_view(url="/admin/")),
    path("admin/", admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
