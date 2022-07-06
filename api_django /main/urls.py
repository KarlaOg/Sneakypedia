from django import views
from django.contrib import admin
from django.urls import re_path, include

urlpatterns = [
   re_path('admin/', admin.site.urls),
   re_path('api/', include('sneakers.urls')),
   re_path('', views.index,name = 'index'),
]