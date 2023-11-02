const express = require("express");
const mongoose = require("mongoose");
const bodyParser=require("body-parser")

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const user = require("./models/studentSchema")
const course = require("./models/courseSchema")

mongoose.connect("mongodb://0.0.0.0:27017/Student")
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }).catch((err) => {
    console.log(err)
  })





app.post("/login", async(req, res) => {
    const { phone, password } = req.body

    if (!phone || !password) {
       return res.send({
            message: 'please enter a valid phone or password',
          });
    }
    const result = await user.findOne({ phone })
    if (!result || result.password != password) {
       return res.send({
            message: 'incorrect phone or password',
          });
    }
   return res.send({
        message: 'successful login',
      });
});


app.get("/all-student", async(req, res) => {
    const result = await user.find().select("-password")
    if(!result){
      return  res.send({
            message: 'no student found',
          });
    }else{
      return  res.send({
            status: 'success',
            data: result,
          });
    }
});

app.get("/all-course", async(req, res) => {
    const result = await course.find()
    if(!result){
       return res.send({
            message: 'no course found',
          });
    }else{
      return res.send({
            status: 'success',
            data: result,
          });
    }
  });
  
 
app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});

