from django.shortcuts import render
from api_django.models import SneakerModel
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from rest_framework.views import APIView
from .serializers import SneakerModelSerializer
from django.http import HttpResponse
from rest_framework.response import Response

@csrf_exempt
def index(request):
    return HttpResponse("Success")

class SneakersAPI(viewsets.ModelViewSet):
    queryset = SneakerModel.objects.all()
    serializer_class = SneakerModelSerializer

def get_sneakers(request):
	sneakers = SneakerModel.objects.all()

	return render(request, 'home.html', {'sneakers': sneakers})

class JsonView(APIView):
	def get(self, request):
		sneakers = SneakerModel.objects.all()
		serializer  = SneakerModelSerializer(sneakers, many=True)
		return Response({"sneakers":serializer.data})