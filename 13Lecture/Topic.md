# RESTful API in Express JS

# What is a Restful API

> A Restful API (Respersentational State Transfer API) is a way for applications to talk to each other over the web using HTTP methods Like:

1. GET - to fecth data
2. POST - to create data
3. PUT/PATCH - to update Data
4. DELETE - to remove data

Each "resource" (like users, products, Posts) is accessed through a URL endpoints.

Example:

GET/api/users         -> Fetch all users
POST/api/users        -> create a new user
PUT/api/users/:id     -> update a user
DELETE/api/users/:id  -> delete a user 


# How a REST API Works (Simple flow)

1. A client(Frontend) sends a request to the server(backend) using HTTP method.

2. The server processes the request, interacts with database, if needed.

3. The Server sends back a response(JSON data, erroe messsage , etc)


                Request
      ---------------------------->
Client                            Server
      <----------------------------
                Response



# Benefits of Restful API 

> Resuable and scalable.

> Works with an frontend (react, angular, vue, mobile apps).

> Easy to test with tools like Postman.

