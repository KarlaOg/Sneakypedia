from django.shortcuts import render, HttpResponseRedirect
from django.http import HttpResponse, JsonResponse

from api_django.models import SneakerModel
from api_django.serializers import SneakerModelSerializer

from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def get_data(request):
	data = SneakerModel.objects.all()
	if request.method == 'GET':
		serializer = SneakerModelSerializer(data, many=True)
		return JsonResponse(serializer.data, safe=False)
