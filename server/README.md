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

Registering endpoint
```
POST /api/users/register HTTP/1.1
Host: localhost:5000
Content-Type: application/x-www-form-urlencoded
cache-control: no-cache

username=testtest&email=test%40test.test&password=tester&password2=tester&language=en
```
Login endpoint
```
POST /api/users/login HTTP/1.1
Host: localhost:5000
Content-Type: application/x-www-form-urlencoded
cache-control: no-cache

username=testtest&password=tester
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```
## Built With

* [ExpressJS](https://expressjs.com/) - Web Framework
* [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.
* [PassportJS](http://www.passportjs.org/) - Authentication for Node.js
* [JSONWebToken](https://jwt.io/) - Representing claims securely between two parties

## Authors

* **Team Leonard**