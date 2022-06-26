from django import template
from django.core.serializers import serialize

register = template.Library()

@register.filter
def json_filter(queryset):
    return serialize('json', queryset)
