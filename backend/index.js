import express from "express";
import tasksRouter from "./routes/tasks.js"
import {promises as fs} from "fs";

const {readFile, writeFile} = fs

const app = express();
app.use(express.json());

app.use("/task", tasksRouter);

app.listen(3000, async () => {

  try {
    await readFile("tasks.json");
    console.log("API Started!");
  } catch (error) {
    const initialJson = {
      nextId: 1,
      tasks: []
    }
    writeFile("tasks.json", JSON.stringify(initialJson)).then(() => {
      console.log("API Started and File Created!");
    }).catch(err => {
        console.log(err);
    });
  }
  
});