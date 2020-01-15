//Dependancies
const express = require("express");
// Import Data


//START WITH EXPRESS
const server = express();

//custom middleware
/*
logger()
*logger logs to the console the following information about each request: request method, request url, and a timestamp
*this middleware runs on every request made to the API
*/
function logger(request, responce, next) {
  const { method, originalUrl } = request;
  console.log(`${method} to ${originalUrl} at ${Date(Date.now())}`);

  next();
}

//MOVE TO THE ROUTES FILE THAT HANDLES IDs
//validateUserId()
function validateUserId(request, responce, next) {
//*validateUserId validates the user id on every request that expects a user id parameter
//*if the id parameter is valid, store that user object as req.user
  if ("id parameter" != undefined) {
    request.user = "that user object";
  }

//*if the id parameter does not match any user id in the database, cancel the request and respond with status 400 and { message: "invalid user id" } validateUser()

  next();
}

/*
validateUser validates the body on a request to create a new user
if the request body is missing, cancel the request and respond with status 400 and { message: "missing user data" }
if the request body is missing the required name field, cancel the request and respond with status 400 and { message: "missing required name field" }
validatePost()

validatePost validates the body on a request to create a new post
if the request body is missing, cancel the request and respond with status 400 and { message: "missing post data" }
if the request body is missing the required text field, cancel the request and respond with status 400 and { message: "missing required text field" }
*/
//CUSTOME MILLEWHARE/HANDLE FUNCTIONS OR INPORTS OF


//MIDDLE WARE
server.use(express.json());
server.use(logger);

//ROUTES
server.get('/', logger, (req, res) => {
  res.send(`<h2>Let's write some middleware! And I hate this HTML responce</h2>`);
});

//ENDPOINTS


module.exports = server;
