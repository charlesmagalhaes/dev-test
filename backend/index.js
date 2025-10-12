import express from 'express';
import tasksRouter from './routes/tasks.js';
import { promises as fs } from 'fs';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './doc.js';

const { readFile, writeFile } = fs;

const app = express();
app.use(express.json());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/task', tasksRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  try {
    await readFile('tasks.json');
    console.log(`API Started on port ${PORT}!`);
  } catch (error) {
    const initialJson = {
      nextId: 1,
      tasks: [],
    };
    writeFile('tasks.json', JSON.stringify(initialJson))
      .then(() => {
        console.log(`API Started and File Created on port ${PORT}!`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
