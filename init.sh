#!/bin/bash

#install composer packages
cd backend
composer install

#install node modules
cd ../frontend
npm install

#build react
npm run build