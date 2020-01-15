const express = require('express');

const UserProjectData = require("./userDb.js");

const router = express.Router();

router.post('/', validateUser, (req, res) => {
  // do your magic!
  const resourceObject = req.body;
  //console.log(resourceObject);
  UserProjectData.insert(resourceObject)
    .then(postedObj => {
      res.status(200).json(postedObj);
      //console.log(postedObj);
    })
    .catch( error => {
      console.log(error);
      res.status(500).json(
        {
          error: "insert() Could Not Send your Reqest to DB."
        }
      )
    })
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
  UserProjectData.get()
    .then(usersArr => {
      res.status(200).json(usersArr);
      //console.log(usersArr);
    })
    .catch( error => {
      console.log(error);
      res.status(500).json(
        {
          error: "get() Could not GET and array of Useres from the DB."
        }
      )
    })
});

router.get('/:id', validateUserId, (req, res) => {
  // do your magic!
  const id = req.params.id;
  UserProjectData.getById(id)
    .then(usersObj => {
      res.status(200).json(usersObj);
      //console.log(typeof usersObj);
    })
    .catch( error => {
      console.log(error);
      res.status(500).json(
        {
          error: "getById() Could not GET this User from the DB."
        }
      )
    })
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
  const id = req.params.id;
  UserProjectData.getUserPosts(id)
    .then(postsFromThisIDarr => {
      res.status(200).json(postsFromThisIDarr);
      console.log(postsFromThisIDarr);
    })
    .catch( error => {
      console.log(error);
      res.status(500).json(
        {
          error: "getUserPosts() Could not GET and array of posts from the DB."
        }
      )
    })
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware
/*
validateUserId()
//*validateUserId validates the user id on every request that expects a user id parameter
//*if the id parameter is valid, store that user object as req.user
//*if the id parameter does not match any user id in the database, cancel the request and respond with status 400 and { message: "invalid user id" } validateUser()
*/
function validateUserId(req, res, next) {
  // do your magic!
  let userArr = 0;
  console.log(req.params.id);
  UserProjectData.getById(req.params.id)
    .then(usersObj => {
      console.log(usersObj);
      userArr = usersObj;
      console.log(typeof userArr == "object");
    })
    .catch( error => {
      console.log(error);
      res.status(500).json(
        {
          error: "validateUserId FAILED at getById."
        }
      )
    })
    console.log(typeof userArr == "object");
  setTimeout(function () {
    if (typeof userArr == "object") {
      next();
    } else {
      res.status(400).json({ message: "invalid user id" });
    }
  }, 333);
};

/*
validateUser validates the body on a request to create a new user
if the request body is missing, cancel the request and respond with status 400 and { message: "missing user data" }
if the request body is missing the required name field, cancel the request and respond with status 400 and { message: "missing required name field" }
validatePost()
*/
function validateUser(req, res, next) {
  // do your magic
  if (typeof req.body == "object" && typeof req.body.name == "string") {
    next();
  } else {
    res.status(400).json({ message: "missing required name field" });
  }
};

/*
validatePost validates the body on a request to create a new post
if the request body is missing, cancel the request and respond with status 400 and { message: "missing post data" }
if the request body is missing the required text field, cancel the request and respond with status 400 and { message: "missing required text field" }
*/
function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
