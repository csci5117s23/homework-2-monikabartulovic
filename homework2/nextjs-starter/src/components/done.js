// this page is just like /todos, except
// no interface to create new to-dos
// show only the to-do items that have been marked as “done”
// add some visual indication on the page that these are “done” to-do items
// a link to /todos
import { Link,Route } from 'react-router-dom';
import Todo from './todos';

export default function Done(){
    return (
        <Todo 
        completed={task.completed}>

        </Todo>
    );
}

