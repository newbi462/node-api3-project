const express = require('express');

const UserProjectData = require("./userDb.js");

const router = express.Router();

router.post('/', (req, res) => {
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
          error: "get() Could not GET and array of Useres from the DB."
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

router.get('/:id', (req, res) => {
  // do your magic!
  const id = req.params.id;
  UserProjectData.getById(id)
    .then(usersObj => {
      res.status(200).json(usersObj);
      //console.log(usersObj);
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
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
