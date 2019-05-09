# deploying to heroku

## installing nodemon as a dev dep via

- yarn: yarn add nodemon --dev
- npm: npm i nodemon -D

## Add scripts for development and deployment to package.json

- server script to run nodemon (development purposes)
- start script to run node (deployment purposes)

## Create a new app in Heroku

- connect the app to our github
- point the app to the correct branch in the correct repo
- enable automatic deployment via the button
- trigger the first deployment

## Creating environment variables

- create a .env file AND ADD THIS TO YOUR .gitignore
- add dotenv npm package to the project (yarn add dotenv || npm i dotenv)
