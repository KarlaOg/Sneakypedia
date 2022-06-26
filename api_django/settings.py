import os

import environ
import django_heroku

django_heroku.settings(locals())

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
env = environ.Env()
# reading .env file
environ.Env.read_env()

# Raises django's ImproperlyConfigured exception if SECRET_KEY not in os.environ
SECRET_KEY = env("SECRET_KEY")


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['sneakypedia-django-api.herokuapp.com']
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'api_django',
    'rest_framework',
    "corsheaders",
    "django_elasticsearch_dsl",
    "api_django.templatetags.tags",
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:8080",
    "http://localhost:4200",
    "http://192.168.1.21:4200"
    ]

ROOT_URLCONF = 'api_django.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
            'libraries':{
            'tags': 'api_django.templatetags.tags',
            
            }
        },
    },
]

# Database
# https://docs.djangoproject.com/en/1.10/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3')
    },
    'users':{
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': env("DATABASE_NAME"),
        'USER': env("DATABASE_USER"),
        'PASSWORD': env("DATABASE_PASSWORD"),
        'HOST': env("DATABASE_HOST"),
        'PORT': env("DATABASE_PORT"),
    }
}

DATABASE = {
    'drivername': 'postgresql',
    'host':  env("DATABASE_HOST"),
    'port': env("DATABASE_PORT"),
    'username': env("DATABASE_USER"),
    'password': env("DATABASE_PASSWORD"),
    'database':env("DATABASE_NAME"),
}

LANGUAGE_CODE = 'fr'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.10/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]

# ELASTICSEARCH_DSL={
#     'default': {
#         'hosts': 'localhost:9200'
#     },
# }

SECURE_HSTS_SECONDS = 3600
# SECURE_SSL_REDIRECT = True
SECURE_HSTS_PRELOAD = True
SESSION_COOKIE_SECURE = True
# SECURE_HSTS_INCLUDE_SUBDOMAINS = True
CSRF_COOKIE_SECURE = True