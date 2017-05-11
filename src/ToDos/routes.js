//import modules
import {Router} from 'express';
import {getCollection} from '../server/db';
import ToDo from './ToDo';
//define some methods for routes, getAll, createNew
const router = new Router();

const getToDos = async () => {
  const toDoCollection = await getCollection('todos');
  return toDoCollection.find({}).toArray();
};

const createToDo = async(todo) => {
  const toDoCollection = await getCollection('todos');
  return toDoCollection.insertOne(todo);
};
//route the get post
router.get('/', (req, res) => {
  return getToDos().then(todos => res.json(todos));
});

router.post('/', (req, res) => {
  const todo = new ToDo(
    req.body.id,
    req.body.task,
    req.body.isComplete
  );
  return createToDo(todo).then(todo => res.json(todo));
});

export default router;
