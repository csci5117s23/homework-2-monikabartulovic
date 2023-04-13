import React, { Component, useState }from "react";
import Todo from '../components/todos';
import Login from '../components/login';


export default function App(props){
  const [input, setInput] = useState("");
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [todoList, setTodoList] = useState([]);

  const handleClick = () => {
    const id = todoList.length + 1;
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        complete: false,
      }
    ]);
    setInput("");
  };
  
  return (
    <div className="addToList">
    <form>
      <h2 className="label-wrapper">
        <label for="new-todo-input" className="label__lg">
          Tasks
        </label>
      </h2>
      <input type="text" id="new-todo" placeholder="add new task"
      />

    <button onClick={() => handleClick()}>Add</button>

    </form>

    <div className= "showAllTasks">
      <button type="button" className="btn btn-primary" aria-pressed="true" >
        <span>Show All Tasks</span>
      </button>
    </div>

    <div className= "showCompleted">
      <button type="button" className="btn btn-primary" aria-pressed="true">
        <span>Show Completed Tasks</span>
      </button>
    </div>

    <div className= "showCompleted">
      <button type="button" className="btn btn-primary" aria-pressed="true">
        <span>Show Incomplete Tasks</span>
      </button>
    </div>

  <div className="list">
    <ul>
      <li className="todo stack-small">
        <div>
          <input id="todo-2" type="checkbox" defaultChecked={props.completed}/>
          <label className="todo-label">
            {props.name}
          </label>
        </div>

        <div className="btn-group">
          <button type="button" className="btn btn-primary" >
            Delete 
          </button><span>{props.name}</span>
        </div>
        
      </li>
    </ul>
    </div>
  </div>
  );
}

// import { useState } from "react";
// import styled from "styled-components";

// const Container = styled.div;


// const App = () => {
//   const [input, setInput] = useState("");
//   const [completedTaskCount, setCompletedTaskCount] = useState(0);
//   const [todoList, setTodoList] = useState([]);


// return (
//     <Container>
//       <div>
//           <h2>Todo List</h2>
//           <Text value={input} onInput={(e) =>setInput(e.target.value)} />
//           <Button onClick={() => handleClick()}>Add</Button>
//         <Tasks>
//         </Tasks>
//         <div>
//           <ul>
//             {todoList.map((todo) => {
//               return (
//                 <LIST
//                   complete = {todo.complete}
//                   id={todo.id}
  
//                   style={{
//                     listStyle: "none",
//                     textDecoration: todo.complete && "line-through",
//                   }}
//                 >
//                   {todo.task}
//                 </LIST>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </Container>
//   );
// };
// export default App;