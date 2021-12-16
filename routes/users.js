const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/", (req, res) => {
    User.find({})
    .then((users) => {
        res.send(users);
    })
    .catch(() => {
        res.json({
            error: "Something went wrong, please try again later",
          });
    });
});

router.post("/", (req, res) => {
    User.create(req.body)
      .then((newUser) => {
        res.status(201).send(newUser);
      })
      .catch((error) => {
       
          res.status(400).json(error);
        
      });
  });

router.get("/:id", (req, res) => {
    const {id} = req.params;
    User.findById(id)
    .then((user) => {
        if(!user){
            res.status(404).end();
            return;
        }
    })
    .catch(() => {
        res.status(500);
        res.json({
            error: "Something went wrong."
        });
    });
});

router.delete("/:id", (req, res) => {
    const {id} = req.params;

    User.findByIdAndDelete(id)
    .then(() => {
        res.status(204).end()
    })
    .catch(() => {
        res.status(500);
        res.json({
            error: "Something went wrong"

        });
    });
});

module.exports = router;