import React from 'react'
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import createTodoRequest from "../api/createTodoRequest";

const CreateTodoForm = () => {

    const [text, setText] = useState("");
    const queryClient = useQueryClient();

   const { mutate: createTodo } = useMutation(
    (newTodo) => createTodoRequest(newTodo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      },
    });   

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!text) return;
        createTodo({
          text,
        });
        setText('');
      }}
    >
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
        style={{
          padding: '8px',
          marginRight: '6px',
        }}
      />
      <button
        style={{
          padding: '5px',
          height: '35px',
          outline: 'none',
          border: 'none',
          color: 'white',
          backgroundColor: '#f09696',
        }}
      >
        Create
      </button>
    </form>
  )
}

export default CreateTodoForm;