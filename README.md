## Introduction
This project is created with `create-react-app` to reduce development time, webpack is good, but add development time although it is way much powerful.

## How to use
In order to use this project, simply `git clone` the project and run `npm install` then `npm start`. But for optimized production it is encouragead to run `npm install` and then `npm run build` then `serve -s build`.

## Docker
The application already dockerized, in order to re-create the environment simply start your `docker` and then `docker build -t shopee .` and finally `docker run -p 80:80 shopee` (not advisable, tend to fail, since this the first time I am dockerized an application so please refer to `how to use`)

## Style
This project isn't using some fancy style like CSS-Preprocessor `SASS` it using only Bootstrap framework for styling.

## Linting
AirBnb Linter is used in this project to create a consistency code across file

## Static Typing
In order to minimize the bug, the applicaiton is using `prop-types` as its static typing

## Additional information
The project is not optimized at all like using any code-splitting nor lazy-load since it is unneeded at this point.

For any troubleshoot to use the application, kindly open issue on this repo.
