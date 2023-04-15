// this page shows a list of to-do items, with the following features:
// a text box and a submit button to create a new to-do item
// a list of to-do items that have not been marked “done”; sorted by most-recently created, and hyperlinked to /todo/:id. Each of these to-do items must have:
// a summary of the to-do item’s contents (if the to-do item is too long to display, show a preview limited to one line)
// a button or checkbox that allows you to mark a to-do item as “done”
// a link to visit /done

import React, { Component, useState }from "react";
import { Link,Route } from 'react-router-dom';




export default function Todo(props) {
  
if (loading) {
  return <div>Loading...</div>;
}

if (!session) {
  return <div>Please log in to view your to-do list</div>;
}
  return (
    <li className="todo stack-small">

      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked={props.completed} />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span> 
        </button>

        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>

    </li>
  );
}


