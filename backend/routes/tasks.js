import express, { json } from 'express';
import { promises as fs } from 'fs';
const router = express.Router();

const { readFile, writeFile } = fs;

router.post('/', async (req, res) => {
  try {
    let task = req.body;
    const data = JSON.parse(await readFile('tasks.json'));

    task.id = data.nextId;
    data.nextId++;
    data.tasks.push(task);

    await writeFile('tasks.json', JSON.stringify(data));

    res.send(task);
  } catch (error) {
    res.status(400).send({ erro: error.message });
  }
});

export default router;
