import express, { json } from 'express';
import { promises as fs } from 'fs';
import { parse } from 'path';
const router = express.Router();

const { readFile, writeFile } = fs;

router.post('/', async (req, res) => {
  try {
    let task = req.body;
    const data = JSON.parse(await readFile('tasks.json'));

    task = { id: data.nextId++, ...task };
    data.tasks.push(task);

    await writeFile('tasks.json', JSON.stringify(data, null, 2));

    res.send(task);
  } catch (error) {
    res.status(400).send({ erro: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const data = JSON.parse(await readFile('tasks.json'));
    delete data.nextId;
    res.send(data);
  } catch (error) {
    res.status(400).send({ erro: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const data = JSON.parse(await readFile('tasks.json'));
    const task = data.tasks.find((task) => task.id === parseInt(req.params.id));
    res.send(task);
  } catch (error) {
    res.status(400).send({ erro: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const data = JSON.parse(await readFile('tasks.json'));
    data.tasks = data.tasks.filter(
      (task) => task.id !== parseInt(req.params.id)
    );
    await writeFile('tasks.json', JSON.stringify(data, null, 2));
    res.send('Tarefa excluida!');
  } catch (error) {
    res.status(400).send({ erro: error.message });
  }
});

router.put('/', async (req, res) => {
  try {
    const task = req.body;
    const data = JSON.parse(await readFile('tasks.json'));
    const index = data.tasks.findIndex((t) => t.id === task.id);
    data.tasks[index] = task;

    await writeFile('tasks.json', JSON.stringify(data, null, 2));
    res.send(task);
  } catch (error) {
    res.status(400).send({ erro: error.message });
  }
});

router.patch('/updateTask', async (req, res) => {
  try {
    const task = req.body;
    const data = JSON.parse(await readFile('tasks.json'));
    const index = data.tasks.findIndex((t) => t.id === task.id);

    data.tasks[index].description = task.description;

    await writeFile('tasks.json', JSON.stringify(data, null, 2));
    res.send(task);
  } catch (error) {
    res.status(400).send({ erro: error.message });
  }
});

export default router;
