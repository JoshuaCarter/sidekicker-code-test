# SideKicker Developer Coding Test
###### Joshua Carter
---

## Introduction
This is my submission for the sidekicker developer coding test.

I had two primary goals with this project:

1) Create a good user experience (presentable UI, no confusion, pagination, etc).
2) Resolve all SWAPI queries on the backend *before* sending anything to the frontend. Thus the backend performs numerous async requests for data before sending it back to the frontend (i.e. I get a page of people, then fetch the name of homeworlds, movies, etc, via further async calls to SWAPI, and *then* send the data back to the frontend).

This is the first time I have used React, Laravel/Lumen, Guzzle, and the second time I have used Bootstrap. As a result, this was a sizeable undertaking for me, ultimately taking me ~30 hrs to complete.

---
## Tools Used

##### React with JavaScript
Chosen as per the project's requirements. I believe I have made proper use of component 'state' and 'props'.

##### Bootstrap 4 with [reactstrap](https://reactstrap.github.io/components/alerts/)
I opted to use a styling framework for this project for presentation's sake, and because my website is already styled without any framework.

##### Lumen (PHP) and Guzzle
I chose to learn and use Lumen as it was the first suggestion in the project specs (though I only really ended up using the routing). Guzzle was used for http requests to the SWAPI.

---
## Running the Production Build
- Pull this repo wherever you like.
- Run `init.sh`. This will run `composer install` on the backend, `npm install` on the frontend, and build the react project using `npm run build`.
- Run `serve_lumen.sh`. This will serve the lumen project with PHP's built-in server.
- Run `serve_react.sh`. This will serve the react production build with npm.
- Your browser should automatically open a new tab and navigate to the react build on `localhost:3000`.

---
## Running the Source Code
- Run `init.sh` if you haven't already.
- Open the `kickstarter-code-test` folder in your preferred IDE.
- Run `cd backend && php -S localhost:8000 -t public` to serve the lumen project.
- Run `cd frontend && npm start` to serve the react project.

---
Thank you for your time.
