# Authentication And Authorization in Node JS Using JWT 

1. What is Authentication?

> Authentication is the process of verifying the identity of a user.

> For Example :- when a user logs in with an email and password , the system checks if  
                the credentials matches an existing user.


<!-- Signup / Resistration -> Email, Name, password, mobileno, => Entries 




Database -> USer Information Save -> During Sign In They will validate  -->

2. What is Authorization?


> Authorization determines what actions an authenticated user is allowed to perform.


> For Example :- For Instance , a user might not have access to admin only pages




3. Why use JWT(JSON Web Token)?

> JWTs are Compact , secure and stateless. They allow  servers and Clients to exchange authentication information safely.

> Once a user logs in the server creates a JWT, and the Client includes it in Future requests
to access protected resourses

# Key Tools Used

-> bcrypt js pr bcrypt: for hashing and Comparing password securely


# Basic WorkFlow

1. The user register by submitting an email and password.

2. The Server hashes the password and stores the user information in a Database.

3. The user logs in using email and Password.

4. If the Credentials are correct, the Server creates a JWT and Sends it to the Client.

5. The Client Stores the Token(usually in localStorage or a Cookie)

6. For any Protected Route, The Client includes  the token in the request headers.

7. The Servese uses middleware to varify the token and allow / deny access.


# JWT Token Example (Decoded): 

{
    "id" : "12345",
    "role" : "user",
    "iat" : 1620000000,
    "exp" : 1620003600,

}