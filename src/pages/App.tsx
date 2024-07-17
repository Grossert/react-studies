import React, { useState } from "react";
import Form from '../components/form';
import List from '../components/list';
import style from './App.module.scss'
import Cronometro from '../components/cronometro';
import { ITarefa } from "../types/tarefas";

function App() {
  const [items, setItems] = useState<ITarefa[] | []>([])
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTask(taskSelecionada: ITarefa) {
    setSelecionado(taskSelecionada);
    setItems(aTask => aTask.map(task => ({
      ...task,
      selecionado: task.id === taskSelecionada.id ? true : false,

    })))
  }
  
  function finalizarTask (){
    if(selecionado){
      setSelecionado(undefined)
      setItems(aTask => aTask.map(item => {
        if(item.id === selecionado.id){
          return{
            ...item,
            selecionado: false,
            completado: true
          }
        }
        return item
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setItems={setItems} />
      <List
        items={items}
        selecionaTask={selecionaTask} />
      <Cronometro
        selecionado={selecionado}
        finalizarTask={finalizarTask}/>
    </div>
  );
}

export default App;
