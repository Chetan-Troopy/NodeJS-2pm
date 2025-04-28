# Routing 

> Routing is How the server decides what response to give based on the request


                    Request
Client        <------------------>         Server
                    Response


# How Routing Works in Express


-> Express makes routig very simple 


app.Method(Path, Handler)


Where :

    app => Express application
    Method => HTTP method (get, post, etc)
    path => URL path ('/', '/about')
    Handler => function (req, res) that responds



# Different HTTP Methods

------------------------------------------------------------------------------
 Methods          -                         Meaning                          -
------------------------------------------------------------------------------
 GET              -            Request Data from the Server (Eg. View Page)  -
 POST             -            Send data to the Sever (Eg. Submit Form)      -
 PUT              -            Update Existing Data                          -
 DELETE           -            Delete Data                                   -
------------------------------------------------------------------------------




Client Request ---> URL + HTTP Method ---> Express Check 
                                                       -
                                                       -
                                                       -
                                                       -
Send Resqponse  <--- Run Handler    <---- If Match  <--- 
                                                
                                                