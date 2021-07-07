import express from "express";
import tasksRouter from "./routes/tasks.js"
import {promises as fs} from "fs";

const {readFile, writeFile} = fs

const app = express();
app.use(express.json());

app.use("/task", tasksRouter);

app.listen(3000, () => {
  const initialJson = {
    nextId: 1,
    tasks: []
  }
  console.log("API Started!")
});