

// 1. Basic Middleware Structure 

// function middlewareExample(req, res, next) {
//     console.log("Middleware running");
//     next() 
// }


// 2. Types of Middleware

// a. Build-In Middeware

// They come with Express:

    // express,josn() -> Parese incoming Json Payload
    // express,urlencoded -> Pares url encoded Data (from Form)
    // express.static() -> serves static files like images , CSS, etc


    // Example 

    // app.use(express.json());

// Application - Level Middleware


// -> Used across the app using app.use() or a specific route





// Exmple 

// app.use(req, res, next) {
//     console.log(`Request Method : ${req.method}, URL : ${req.url}`);
//     next() 
// }



// c. Router -Level Middleware

// ->  Middleware applied to an express.Router() instance


// Example

// const router = express.Router();

// router.use(req, res, next) {
    // console.log("Router Middleware");
    // next() 
// }


// d. Error Handling Middleware

// ->  Middleware with 4 parameters used to catch and respond to error


// Example


// app.use(err, req, res, next) {
//     console.log(err.stack);
//     res.status(500).send('Something is borken');
// }



// Note : next() is used to pass  controls to the next middleware 
// Note : If we don't Call next(), the request will hang



// Middleware Execution Order


// app.use(middleware1)
// app.use(middleware2)
// app.get('/', handler)


// middleware1 -> middleware2 -> handler 