web: gunicorn --chdir ./api_django main.wsgi:application --log-file - --log-level debug
python3 api_django/manage.py migrate
