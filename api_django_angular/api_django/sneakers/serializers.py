from rest_framework import serializers
from sneakers.models import SneakerModel

class SneakerModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = SneakerModel
        fields = ('id','label', 'image','description','price','release_date')
    
    def create(self, validated_data):
	    return SneakerModel.objects.create(**validated_data)
