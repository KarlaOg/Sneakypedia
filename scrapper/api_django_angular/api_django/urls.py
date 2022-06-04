from django.contrib import admin
from django.views.generic.base import TemplateView
from api_django.views import *
from django.urls import re_path

urlpatterns = [
   re_path(r'^admin/', admin.site.urls),
   re_path(r'^getData/', get_data),
   re_path(r'^.*', get_data, TemplateView.as_view(template_name="home.html"), name="home")
]