from django.apps import AppConfig


class ApiPythonConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'sneakers'
    # def ready(self):
    #     import signals