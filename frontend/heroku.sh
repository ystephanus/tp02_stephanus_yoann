#!/bin/bash

dirName="tp2"
repoName="tp02em"

ng build
cd dist/$dirName

# First Use
heroku login
heroku apps:destroy --confirm $repoName
heroku create $repoName

git init
touch composer.json
# /First Use

git add .
git commit -m "first commit"

heroku git:remote -a $repoName

git push heroku master #Or 'main'
