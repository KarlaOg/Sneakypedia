from django.shortcuts import get_object_or_404, render
from api_django.models import SneakerModel
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets,permissions
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
	def get(self, request, pk=None):
		if pk:
			sneaker = get_object_or_404(SneakerModel.objects.all(), pk=pk)
			serializer = SneakerModelSerializer(sneaker)
			return Response({"sneaker": serializer.data})
		sneakers = SneakerModel.objects.all()
		serializer = SneakerModelSerializer(sneakers, many=True)
		return Response({"sneakers": serializer.data})
	
	def post(self, request):
		sneaker = request.data.get('sneaker')
		serializer  = SneakerModelSerializer(data=sneaker)
		if serializer.is_valid(raise_exception=True):
			sneaker_saved=serializer.save()
		return Response({"success":"Sneaker `{}` created successfully".format(sneaker_saved.label)})

	def put(self, request, pk):
			saved_sneaker = get_object_or_404(SneakerModel.objects.all(), pk=pk)
			data = request.data.get('sneaker')
			serializer = SneakerModelSerializer(instance=saved_sneaker, data=data, partial=True)

			if serializer.is_valid(raise_exception=True):
				sneaker_saved = serializer.save()
			return Response({"success": "Sneaker '{}' updated successfully".format(sneaker_saved.label)})


	def delete(self,request,pk):
		sneaker = get_object_or_404(SneakerModel.objects.all(), pk=pk)
		if self.request.method == 'DELETE':
			if request.user.is_superuser:
				sneaker.delete()
				return Response({"message": "Sneaker with id `{}` has been deleted.".format(pk)},status=204)
			else:
				return Response({"message": "You are not authorised to delete a sneaker"},status=401)

		
	# permission_classes = [permissions.IsAuthenticatedOrReadOnly]