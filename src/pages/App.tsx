import React, { useState } from "react";
import Form from '../components/form';
import List from '../components/list';
import style from './App.module.scss'
import Cronometro from '../components/cronometro';
import { ITarefa } from "../types/tarefas";

function App() {
  const [items, setItems] = useState<ITarefa[] | []>([])
  return (
    <div className={style.AppStyle}>
      <Form setItems={setItems} />
      <List items={items}/>
      <Cronometro />
    </div>
  );
}

export default App;
