# Django Webapp project with auth module

## Setting up heroku with django
Setup local system by following the link at https://devcenter.heroku.com/articles/getting-started-with-python#introduction

###Things to be setup everytime are:

+ virtualvenv
+ heroku toolbelt: pip install django-toolbelt
+ specify dependecies with Pip: pip freeze > requirements.txt

### Once in your machine

+ Setup an environment variable DATABASE_URL : export DATABASE_URL=postgres:///$(whoami)

###Setups already handled by template:
- Procfile
web: gunicorn hellodjango.wsgi --log-file -
- Setting file to parse database configuration from $DATABASE_URL
- staticfile and other setups in heroku-django docs

### Now open the webapp in Pycharm/Sublibe/<your favorite editor>

## References:
https://devcenter.heroku.com/articles/getting-started-with-django



