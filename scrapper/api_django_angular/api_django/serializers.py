from rest_framework import serializers
from api_django.models import SneakerModel

class SneakerModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = SneakerModel
        fields = ('label', 'image','description','price')