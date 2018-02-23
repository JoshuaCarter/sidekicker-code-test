# SideKicker Developer Coding Test
###### Joshua Carter
---

## Introduction
This is my submission for the sidekicker developer coding test.

I had two primary goals with this project:

1) Create a good user experience (presentable UI, no confusion, pagination, etc).
2) Resolve all SWAPI queries on the backend *before* sending anything to the frontend. Thus the backend performs numerous async requests for data before sending it back to the fronend (e.g. gets the name of homeworlds, movies, etc, and combines them with the person's data before sending a response to the frontend).

I hope that I have achieved this, though so much of the subject matter in this project is new to me, that I'm hardly confident in my work.

This is the first time I have used React, Laravel/Lumen, Guzzle, and the second time I have user Bootstrap. As a result, this was a sizeable undertaking for me, ultimately taking me ~30-40 hrs to complete.

Regrettably, and despite coding like a mad-man over the weekend (24 hrs straight on Sunday x_x), I haven't had enough time to delve into testing, a subject which is also fairly new to me.

---
## Tools Used

##### React with JavaScript
Chosen as per the project's requirements. I believe I have made proper use of component 'state' and 'props'.

##### Bootstrap 4 with [reactstrap](https://reactstrap.github.io/components/alerts/)
I opted to use a styling framework for this project for presentation's sake, and because my website is already styled without any framework.

##### Lumen (PHP) and Guzzle
I chose to learn and use Lumen as it was the first suggestion in the project specs. Guzzle was used for http requests to the SWAPI.

##### WAMP
Used locally for my familiarity with it.

---
## Running the Production Build
- Pull this repo wherever you like.
- Run `kickstarter-code-test/init.sh`. This will run `composer install` on the backend, `npm install` on the frontend, and build the react project using `npm run build`.
- Run `kickstarter-code-test/serve_lumen.sh`. This will serve the lumen project with PHP's built-in server.
- Run `kickstarter-code-test/serve_react.sh`. This will serve the react production build with npm.
- Your browser should automatically open a new tab and navigate to the react build on `localhost:3000`.

---
## Running the Source Code
- Run `kickstarter-code-test/init.sh` if you haven't already.
- Open the `kickstarter-code-test` folder in your preferred IDE.
- Run `cd backend && php -S localhost:8000 -t public` to serve the lumen project.
- Run `cd frontend && npm start` to serve the react project.

---
Thank you for your time.
