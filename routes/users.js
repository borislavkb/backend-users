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
        res.status(201).json(newUser);
        console.log("User created! ")
      })
      .catch((error) => {
       
          res.status(400).json(error);
        
      });
  });

router.get("/user/:id", (req, res, next) => {
    const {id} = req.params;
    console.log(id);
    User.findById(id)
    .then((user) => {
        if(!user){
            res.status(404).send("No users in DB");
            return;
        } res.status(200).json(user);
        console.log("user delivered")
        
    })
    .catch(() => {
        res.status(500);
        res.json({
            error: "Something went wrong."
        });
    });
});

router.patch("/user/:id", (req, res) => {
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


router.delete("/user/:id", (req, res) => {
    const {id} = req.params;

    User.findByIdAndDelete(id)
    .then((user) => {
        res.send(user)
        console.log("User deleted.")
        
    })
    .catch((error) => {
        res.status(500).json(error);
    });
});

module.exports = router;