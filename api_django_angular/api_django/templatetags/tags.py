from django import template
from django.core.serializers import serialize

register = template.Library()

@register.filter(name="json")
def json(queryset):
    return serialize('json', queryset)