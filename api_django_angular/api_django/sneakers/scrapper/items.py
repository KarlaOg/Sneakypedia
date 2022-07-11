from scrapy_djangoitem import DjangoItem
from sneakers.models import SneakerModel

class SneakersItem(DjangoItem):
    django_model = SneakerModel