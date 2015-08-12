#!/bin/bash

heroku login

pip install -r requirements.txt
npm install

python manage.py migrate

heroku create
heroku buildpacks:set https://github.com/ddollar/heroku-buildpack-multi.git

git push heroku master
heroku ps:scale web=1
heroku run python manage.py syncdb

heroku open