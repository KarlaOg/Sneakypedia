from django.urls import path
from api_django import views

urlpatterns = [
    path('', views.get_sneakers, name='sneakers_list'),
]