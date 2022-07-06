# SNEAKYPEDIA™

SNEAKYPEDIA is a website that references sneakers. You can add, have an inventory and mark as favoris.

SNEAKYPEDIA is [Coumba Camara](https://github.com/kumatata) and I final year school project at ESGI Paris.

# Installation

## API-Platform | Back-End

⚠️ Make sure you have Docker installed ⚠️

This will install :

- API-Platform
- PostgresSQL
- Adminer to visualize the database

Run this command at the root of the project.

```bash
┌─[karla@home] - [~/code/PA_2022]
└─[$] docker-compose up --build
```

## Angular | Front-End
⚠️ Make sure you have `npm` installed ⚠️

Run these commands in the folder `pwa`

This will install the Angular project :

```bash
┌─[karla@home] - [~/code/PA_2022/pwa]
└─[$] npm install
```

To run the Angular project :

```bash
┌─[karla@home] - [~/code/PA_2022/pwa]
└─[$] ng serve
```

## Django | Micro-service
⚠️ Make sure you have `pip`and `python` installed ⚠️

Run these commands in the folder `api_django_angular\api_django`


This will install the requirements used in the 2nd API for the sneakers.

```bash
┌─[karla@home] - [~/code/PA_2022/api_django_angular/api_django]
└─[$] > pip3 install -r  requirements.txt
```

To run the Django project :

Run these commands in the folder `api_django_angular`

```bash
┌─[karla@home] - [~/code/PA_2022/api_django_angular]
└─[$] > python3 manage.py runserver
```

## Technologies

The project is build with :

- [Angular](https://angular.io/)
- [RxJS](https://rxjs.dev/)
- [API-Platform](https://api-platform.com/)
- [Django](https://www.djangoproject.com/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
