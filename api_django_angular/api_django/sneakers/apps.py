from django.apps import AppConfig


class SneakersAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'sneakers'
    # def ready(self):
    #     import signals