from django.apps import AppConfig


class ApiPythonConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'PA_2022.api_django'
    def ready(self):
        import signals