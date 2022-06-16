# JSONServer + JWT Auth

A Fake REST API using json-server with JWT authentication. You can find the [complete tutorial here](https://www.techiediaries.com/fake-api-jwt-json-server/)

## Install


	$ npm install
	$ npm run start-auth

#### NOTE : All The  Endpoints are Private (require Authentication)

## How to login?

You can login by sending a POST request to


	POST 	http://localhost:3000/auth/login

with the following data 


	{
	  "email": "bajpai.mahendra@gmail.com",
	  "password":"test@123"
	}


You should receive an access token with the following format 


	{
	   "access_token": "<ACCESS_TOKEN>"
	}



You should send this authorization with any request to the protected endpoints


	Authorization: Bearer <ACCESS_TOKEN>



