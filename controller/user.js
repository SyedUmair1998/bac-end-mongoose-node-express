const router = require("express").Router()
const mongoose = require("express")

const User = require("../models/user")

router.get("/", (req, res) => {
  res.send("User controller working")
})

router.post("/save_user", (req, res) => {
  const createStudent = async () => {
    try {
      const st1 = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        contact: req.body.contact,
        age: req.body.age,
        join_date: req.body.join_date,
        is_developer: req.body.is_developer,
      })

      const result = await st1.save()
      console.log(result)

      res.send("Successfull")
    } catch (error) {
      console.log("Some error occurred")
      res.send("Something went wrong")
    }
  }

  createStudent()
})

router.get("/get_users", (req, res) => {
  const getAllData = async () => {
    try {
      const users = await User.find()
      console.log(users)
      res.send(users)
    } catch (error) {
      console.log("unable to fetch data")
      res.send("Unable to fetch data")
    }
  }
  getAllData()
})

router.get("/get_particular_users", (req, res) => {
  const getAllData = async () => {
    try {
      const users = await User.find({ $nor: [{ age: 32 }, { contact: 2111 }] })
      console.log(users)
      res.send(users)
    } catch (error) {
      console.log("unable to fetch data")
      res.send("Unable to fetch data")
    }
  }
  getAllData()
})



router.post("/update_user", (req, res) => {
  const createStudent = async () => {
    try {
     const result = await User.updateMany({name:"Y"},{name:"X"}, {
       upsert:true
     });
     res.send(result);
     console.log(result);
    }
      catch (error) {
      console.log("Some error occurred")
      res.send("Something went wrong")
    }
  }

  createStudent()
})



router.delete("/delete_user", (req, res) => {
  const createStudent = async () => {
    try {
     const result = await User.deleteMany({name:"X"});
     res.send(result);
     console.log(result);
    }
      catch (error) {
      console.log("Some error occurred")
      res.send("Something went wrong")
    }
  }

  createStudent()
})

module.exports = router
