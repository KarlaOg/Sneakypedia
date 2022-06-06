from django.shortcuts import render
from api_django.models import SneakerModel
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def get_sneakers(request):
	sneakers = SneakerModel.objects.all()

	return render(request, 'home.html', {'sneakers': sneakers})