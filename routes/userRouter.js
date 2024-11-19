const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/userModel");

const router = express.Router();

  // creating user

  router.post("/", async(req, res) => {
    const {name, email, age} = req.body
    try {
      const addUser = await User.create({
        name: name,
        email: email,
        age: age,
      });
      res.status(202).json(addUser)
    } catch (error) {
      console.log(error)
      res.status(500).json({error: error.message})
    }
  });

  //getting user
  router.get("/", async(req, res) => {
    try {
      const showAll = await User.find();
      res.status(200).json(showAll)
    } catch (error) {
      console.log(error)
      res.status(500).json({error: error.message});
    }
  })

  // getting single user

  router.get("/:id", async(req, res) => {
    const {id} = req.params;
    try {
      const singleUser = await User.findById({ _id: id });
      res.status(200).json(singleUser)
    } catch (error) {
      console.log(error)
      res.status(500).json({error: error.message})
    }
  });

  // UPDATING USER

  router.patch("/:id", async(req, res) => {
    const {id} = req.params;
    try {
      const updateUser = await User.findByIdAndUpdate(id, req.body,{
        new: true,
      })
      res.status(200).json(updateUser)
    } catch (error) {
      console.log(error)
      res.status(500).json({error: error.message})
      
    }
  })

// deteting a user
router.delete("/:id", async(req,res) => {
  const {id} = req.params;
  try {
    const deleteUser = await User.findByIdAndDelete({ _id: id})
    res.status(201).json(deleteUser)
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message})
    
  }
})

  

module.exports = router;
