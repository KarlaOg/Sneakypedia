web: gunicorn api_django.wsgi --log-file - --log-level debug
heroku ps:scale web=1
python3 api_django/manage.py migrate
