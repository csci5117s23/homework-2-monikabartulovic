import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const DATA = [
  { name: "item", completed: true },
];

ReactDOM.render();

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);
  
}
