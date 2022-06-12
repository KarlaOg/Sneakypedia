from rest_framework import serializers
from api_django.models import SneakerModel

class SneakerModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = SneakerModel
        fields = ('id','label', 'image','description','price')
    
    def create(self, validated_data):
	    return SneakerModel.objects.create(**validated_data)