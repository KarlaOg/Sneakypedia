web: gunicorn api_django.wsgi:application --log-file - --log-level debug
heroku ps:scale web=1
python3 manage.py migrate
