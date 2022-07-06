from sneakers.views import JsonView, SearchResults, index
from django.contrib import admin
from django.urls import re_path

urlpatterns = [
   re_path('admin/', admin.site.urls),
   re_path('',index,name = 'index'),
   re_path('api/sneakers/',JsonView.as_view()),
   re_path('api/sneakers/<int:pk>/', JsonView.as_view(), name='sneaker'),
   re_path('api/search/',SearchResults.as_view())
]