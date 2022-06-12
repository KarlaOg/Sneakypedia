from django.urls import path
from api_django.views import JsonView

urlpatterns = [
    path('sneakers/',JsonView.as_view()),
    path('sneakers/<int:pk>/', JsonView.as_view(), name='sneaker'),
]