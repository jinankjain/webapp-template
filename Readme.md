# Webapp template - Django with AngularJS
## Boilerplace code to get you running on Heroku in minutes

## Pre-requisites
- Python
- Node
- postgresql
- heroku toolbelt installed
- Setup an environment variable: DATABASE_URL=postgres:///$(whoami)

## Pre-setup steps
- [Optional][Recommended] Make sure you have virtualenv setup to avoid python package conflicts

## Setup sets
- `$git clone https://github.com/shashank-iitj/webapp-template.git`
- `$cd webapp-template`
- `$chmod +x setupWebapp.sh`
- `$./setupWebapp.sh`

## Notes for geeks
###Setups already handled by template:
#### Heroku Specific
- Procfile
web: gunicorn webapp.wsgi --log-file -
- Setting file to parse database configuration from $DATABASE_URL
- staticfile and other setups in heroku-django docs
- wsgi.py to enable configs done in app
- .gitignore

#### Webapp specific
- .bowerrc : file to specify where the bower components are stored
- .buildpacks : file to tell heroku which all frameworks need to be installed
- node essential packages as described in package.json and postScript to do various tasks
- bower installations
- gulp.js build to automate tasks like js minification etc.

## References:
- https://devcenter.heroku.com/articles/getting-started-with-python
- https://devcenter.heroku.com/articles/getting-started-with-django



