#!/bin/bash

pip install -r requirements.txt
npm install

git init
git add .
git commit -m "initial commit"

heroku create
heroku buildpacks:set https://github.com/ddollar/heroku-buildpack-multi.git

git push heroku master