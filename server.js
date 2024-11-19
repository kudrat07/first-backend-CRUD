const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");

app.use(cors());

const userRouter = require("./routes/userRouter");

app.use(express.json());

mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("DB connected successfully");

    app.listen(process.env.PORT || 8000, (error) => {
      if (error) {
        console.log(error);
      }
      console.log("Server is up and running on port no", process.env.PORT)
    });
  })
  .catch((error) => {
    console.log("error", error);
  });

app.get("/", (req, res)=>{
  res.send("This is homepage baby")
})
app.use(userRouter);
