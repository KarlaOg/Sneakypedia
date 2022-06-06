from scrapy_djangoitem import DjangoItem
from api_django.models import SneakerModel

class SneakersItem(DjangoItem):
    django_model = SneakerModel