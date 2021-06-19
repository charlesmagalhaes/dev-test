import axios from 'axios';

const API_URL = 'http://localhost:3001/todos/';



async function getAllTodo() {
  const res = await axios.get(API_URL);

  const todos = res.data.map((todo) =>{

    return {
      ...todo,
    }
  })

  todos.sort((a,b) => a.year-b.year)
  
  
  
  return todos;

}

export {
  getAllTodo,

};

