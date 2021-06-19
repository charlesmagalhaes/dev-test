import React, { useEffect, useState } from 'react';
import ButtonContainer from './components/ButtonContainer';
import * as api from './api/api';
import Spinner from './components/Spinner';
import TodosControl from './components/TodosControl';


export default function () {
  const [selectedYer, setSelectedYer] = useState([]);
  const [selectedMonth, setSelecedMonth]= useState({});
  const [selectedTodos, setSelectedTodos]= useState([]);



 const testAp = async() =>{
    const result = await api.getAllTodo();
    console.log(result);
   return result;
  
 } 
 
//  useEffect(() => {
//   api.getAllTodo().then((todos) => {
//     setTimeout(() => {
//       selectedTodos(todos);
//     }, 2000);
//   });
//  }, [])

 useEffect(() => {
   const getTodos = async () => {
    const todos = await api.getAllTodo();
    setTimeout(() => {
      setSelectedTodos(todos);
    }, 2000);
   };

   getTodos();

 }, [])
 

testAp();


    return (
      <div>

        <ButtonContainer/>
        {selectedTodos.length == 0 && <Spinner/>}
        {selectedTodos.length > 0 && <TodosControl todos ={selectedTodos}/> }
      </div>

    );
}
