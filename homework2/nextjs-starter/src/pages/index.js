import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ReactDOM from 'react-dom/client';


const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];


export default function Home() {

    Reactdom.render( <App />, document.getElementById('root'))
    root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
  
);
  
}


