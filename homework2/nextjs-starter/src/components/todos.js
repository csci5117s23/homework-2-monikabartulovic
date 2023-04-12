// this page shows a list of to-do items, with the following features:
// a text box and a submit button to create a new to-do item
// a list of to-do items that have not been marked “done”; sorted by most-recently created, and hyperlinked to /todo/:id. Each of these to-do items must have:
// a summary of the to-do item’s contents (if the to-do item is too long to display, show a preview limited to one line)
// a button or checkbox that allows you to mark a to-do item as “done”
// a link to visit /done

import React from "react";

export default function TodoList(props) {
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

        <button type="submit" className="btn btn-primary">
          Add
        </button>  
      </form>

      <div className= "showTasks">
        <button type="button" className="btn btn-primary" aria-pressed="true">
          <span>Show all</span>
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
            <button type="button" className="btn btn-primary">
              Delete 
            </button><span>{props.name}</span>
          </div>
          
        </li>
      </ul>
      </div>
    </div>
    );
  }
