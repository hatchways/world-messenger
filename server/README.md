# RFP: Server

### Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
* [MongoDB](https://www.mongodb.com/) - NoSQL Database
* [NodeJS](https://nodejs.org/) - JavaScript runtime

### Installing
Enter the project directory
```
cd server
```
Install the dependencies
```
npm install
```
Start the server
```
node server
```

## Running the tests

Once the server is up and listening you can test the endpoints

Registering
```
POST http://localhost:5000/api/users/register
Accept: */*
Cache-Control: no-cache
Content-Type: application/x-www-form-urlencoded

username=tester&email=test@test.test&password=tester&password2=tester&language=en
```
Login
```
POST http://localhost:5000/api/users/login
Accept: */*
Cache-Control: no-cache
Content-Type: application/x-www-form-urlencoded

email=test@test.test&password=tester
```
Profile get
```
GET http://localhost:5000/api/profiles/profile
Accept: */*
Cache-Control: no-cache
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMGZmMWM3YjAxYjFjMzE5YzlmYWJlYyIsInVzZXJuYW1lIjoidGVzdGVyIiwiaWF0IjoxNTYxMzI2MTMxLCJleHAiOjE1OTI4ODMwNTd9.maNWu1xm56uQXZ5tYPQjtO3LqLuOpIXNeLiE3vRzuDI
```
Profile update
```
POST http://localhost:5000/api/profiles/profile
Accept: */*
Cache-Control: no-cache
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMGZmMWM3YjAxYjFjMzE5YzlmYWJlYyIsInVzZXJuYW1lIjoidGVzdGVyIiwiaWF0IjoxNTYxMzI2MTMxLCJleHAiOjE1OTI4ODMwNTd9.maNWu1xm56uQXZ5tYPQjtO3LqLuOpIXNeLiE3vRzuDI

firstName=firstname%20updated&lastName=last%20name%20updated
```


## Built With

* [ExpressJS](https://expressjs.com/) - Web Framework
* [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.
* [PassportJS](http://www.passportjs.org/) - Authentication for Node.js
* [JSONWebToken](https://jwt.io/) - Representing claims securely between two parties

## Authors

* **Team Leonard**
