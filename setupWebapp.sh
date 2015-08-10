#!/bin/bash

pip install -r requirements.txt
npm install

python manage.py migrate

git init
git add .
git commit -m "initial commit"

heroku login
heroku create
heroku ps:scale web=1
heroku buildpacks:set https://github.com/ddollar/heroku-buildpack-multi.git

git push heroku master

python manage.py runserver
heroku open