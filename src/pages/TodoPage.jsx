import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import ClipLoader from 'react-spinners/ClipLoader';
import img2 from '../assets/img/5474794.jpg'
import readTodosRequest from '../api/readTodosRequest';
import TodoItem  from '../components/TodoItem';
import  CreateTodoForm  from '../components/CreateTodoForm';
import { TokenContext } from '../App';

 const TodoPage = () => {
  
  const [token] = useContext(TokenContext);

  const { isLoading, data: todos } = useQuery('todos', 
    readTodosRequest
  );
  return (
    <div>
      <div>
       
      <img src={img2} style={{width:'500px'}} />
      <h1>Write your to-do list</h1>
      </div>
      {isLoading ? (
        <ClipLoader size={150} />
      ) : (
        todos.map((todo) => (
          <TodoItem todo={todo} key={todo._id} />
        ))
      )}
      <CreateTodoForm />
    </div>
  );
};

export default TodoPage;