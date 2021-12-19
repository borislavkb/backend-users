const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/", (req, res) => {
    User.find({})
    .then((users) => {
        res.send(users);
        console.log("Get /")
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
        console.log("Post /")
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
            res.status(404).send("No users in DB");
            return;
        } res.send(user);
        
    })
    .catch(() => {
        res.status(500);
        res.json({
            error: "Something went wrong."
        });
    });
});

router.patch("/:id", (req, res) => {
    const {id} = req.params;
    User.findByIdAndUpdate(id, req.body, {new: true})
    .then((updatedUser) => {
        if(!updatedUser){
            res.status(404).send("No users in DB");
            return;
        }
        res.send(updatedUser);
    })
    .catch((error) => {
        console.log(error)
    })
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