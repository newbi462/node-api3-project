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

/*


*/
//CUSTOME MILLEWHARE/HANDLE FUNCTIONS OR INPORTS OF


//MIDDLE WARE
server.use(express.json());
server.use(logger);

//ROUTES
const userRouter = require('./users/userRouter.js');

//ENDPOINTS
server.get('/', logger, (req, res) => {
  res.send(`<h2>Let's write some middleware! And I hate this HTML responce</h2>`);
});

server.use('/api/users', userRouter);



module.exports = server;
