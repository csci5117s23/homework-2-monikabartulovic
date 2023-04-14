import React, { Component, useState }from "react";
import Todo from '../components/todos';
import Login from '../components/login';
import Form from "../components/form";
import FilterButton from "../components/FilterButton";
import { ClerkProvider } from '@clerk/nextjs'


export default function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: "id", name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const taskList = tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  )
);

  return (
  //   <>
  //     return (
  // <ClerkProvider {...pageProps} >

  //   <Component {...pageProps} />

  // </ClerkProvider>
  // )
  //   </>

    <div className="todoapp stack-large">
      <h1>Monika's Todo List</h1>

      <Form addTask = {addTask}></Form>

      <div className="filters btn-group stack-exception">
       <FilterButton></FilterButton>
       <FilterButton></FilterButton>
       <FilterButton></FilterButton>
      </div> 

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
       {taskList}
      </ul>

    </div> // entire div
  );
}
