# RFP: Server

### Getting started
These instructions will get you a copy of the server up and running on your local machine for development and testing purposes. 
See deployment for notes on how to deploy the project on a live system.

### Prerequisites
* [MongoDB](https://www.mongodb.com/) - NoSQL Database
* [NodeJS](https://nodejs.org/) - JavaScript runtime

### Configurations
Make sure you have a live MongoDB connection
```
./server/config/keys.js
mongoURI: "mongodb://localhost:27017/test"
```

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
node ./bin/www
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
Getting current user profile
```
GET http://localhost:5000/api/profiles/profile
Accept: */*
Cache-Control: no-cache
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMGZmMWM3YjAxYjFjMzE5YzlmYWJlYyIsInVzZXJuYW1lIjoidGVzdGVyIiwiaWF0IjoxNTYxMzI2MTMxLCJleHAiOjE1OTI4ODMwNTd9.maNWu1xm56uQXZ5tYPQjtO3LqLuOpIXNeLiE3vRzuDI
```
Updating current user profile
```
POST http://localhost:5000/api/profiles/profile
Accept: */*
Cache-Control: no-cache
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMGZmMWM3YjAxYjFjMzE5YzlmYWJlYyIsInVzZXJuYW1lIjoidGVzdGVyIiwiaWF0IjoxNTYxMzI2MTMxLCJleHAiOjE1OTI4ODMwNTd9.maNWu1xm56uQXZ5tYPQjtO3LqLuOpIXNeLiE3vRzuDI

firstName=firstname%20updated&lastName=last%20name%20updated
```
Requesting a new contact for current user
```
POST http://localhost:5000/api/contacts/request
Accept: */*
Cache-Control: no-cache
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMTdmMDdhNTY1NjY2MmVjY2I4MWM2NCIsInVzZXJuYW1lIjoidGVzdHRlc3QiLCJpYXQiOjE1NjE4NDk5NzksImV4cCI6MTU5MzQwNjkwNX0.3WwtglpTAKOR7BRQlzD-BGE8siJUJ4SLMHU5P5_GptA

email=receiver@test.test
```
Accepting a contact request for current user
```
POST http://localhost:5000/api/contacts/accept
Accept: */*
Cache-Control: no-cache
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMTdmMDdhNTY1NjY2MmVjY2I4MWM2NCIsInVzZXJuYW1lIjoidGVzdHRlc3QiLCJpYXQiOjE1NjE4NDk5NzksImV4cCI6MTU5MzQwNjkwNX0.3WwtglpTAKOR7BRQlzD-BGE8siJUJ4SLMHU5P5_GptA

username=requester
```
Rejecting a contact request for current user
```
POST http://localhost:5000/api/contacts/accept
Accept: */*
Cache-Control: no-cache
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMTdmMDdhNTY1NjY2MmVjY2I4MWM2NCIsInVzZXJuYW1lIjoidGVzdHRlc3QiLCJpYXQiOjE1NjE4NDk5NzksImV4cCI6MTU5MzQwNjkwNX0.3WwtglpTAKOR7BRQlzD-BGE8siJUJ4SLMHU5P5_GptA

username=requester
```
Get current user list of contacts
```
GET http://localhost:5000/api/contacts/list
Accept: */*
Cache-Control: no-cache
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMTdmMDdhNTY1NjY2MmVjY2I4MWM2NCIsInVzZXJuYW1lIjoidGVzdHRlc3QiLCJpYXQiOjE1NjE4NDk5NzksImV4cCI6MTU5MzQwNjkwNX0.3WwtglpTAKOR7BRQlzD-BGE8siJUJ4SLMHU5P5_GptA
```
Get list of conversations for current user
```
GET http://localhost:5000/api/conversations/
Accept: */*
Cache-Control: no-cache
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMjhkNjlkMmYwNzIyMWE2YzUyYWY5MyIsInVzZXJuYW1lIjoiZmlyc3QiLCJpYXQiOjE1NjI5NTc1MzAsImV4cCI6MTU5NDUxNDQ1Nn0.-vLxcGfl0WI0Dg5FQaj2WtTqdfFlYB2d6XxrTGTGzVc
```
Creating a new conversation for current user and another user
```
POST http://localhost:5000/api/conversations/new
Accept: */*
Cache-Control: no-cache
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMjhkNjlkMmYwNzIyMWE2YzUyYWY5MyIsInVzZXJuYW1lIjoiZmlyc3QiLCJpYXQiOjE1NjI5NTc1MzAsImV4cCI6MTU5NDUxNDQ1Nn0.-vLxcGfl0WI0Dg5FQaj2WtTqdfFlYB2d6XxrTGTGzVc

recipient=second
```
Get messages of a conversation for current user
```
GET http://localhost:5000/api/conversations/conversation/5d28d7042f07221a6c52af95
Accept: */*
Cache-Control: no-cache
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMjhkNjlkMmYwNzIyMWE2YzUyYWY5MyIsInVzZXJuYW1lIjoiZmlyc3QiLCJpYXQiOjE1NjI5NTc1MzAsImV4cCI6MTU5NDUxNDQ1Nn0.-vLxcGfl0WI0Dg5FQaj2WtTqdfFlYB2d6XxrTGTGzVc
```
Create a new message for a conversation for current user
```
POST http://localhost:5000/api/conversations/conversation
Accept: */*
Cache-Control: no-cache
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMjhkNjlkMmYwNzIyMWE2YzUyYWY5MyIsInVzZXJuYW1lIjoiZmlyc3QiLCJpYXQiOjE1NjI5NTc1MzAsImV4cCI6MTU5NDUxNDQ1Nn0.-vLxcGfl0WI0Dg5FQaj2WtTqdfFlYB2d6XxrTGTGzVc

conversationId=5d28d7042f07221a6c52af95&composedMessage=testingapipost
```

## Deployment
```
Coming soon....
```

## Built With

* [ExpressJS](https://expressjs.com/) - Web Framework
* [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.
* [PassportJS](http://www.passportjs.org/) - Authentication for Node.js
* [JSONWebToken](https://jwt.io/) - Representing claims securely between two parties
* [Socket.io](https://socket.io/) - JavaScript library for realtime web applications

## Authors

* **Team Leonard**
