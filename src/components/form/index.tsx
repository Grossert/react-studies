import React, { useState } from "react";
import Button from "../button";
import style from './form.module.scss'
import { ITarefa } from "../../types/tarefas";
import { v4 as uuidv4 } from 'uuid';
import { time } from "console";

interface Props {
    setItems: React.Dispatch<React.SetStateAction<ITarefa[]>>,

}

function Form({ setItems }: Props) {
    const [task, setTask] = useState("")
    const [time, setTime] = useState("00:00")

    function addTask(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setItems(aTask =>
            [
                ...aTask,
                {
                    task,
                    time,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        )
        setTask("")
        setTime("00:00")
    }
    return (
        <form className={style.novaTarefa} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor="task">
                    Adicione um novo Estudo
                </label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={task}
                    onChange={evento => setTask(evento.target.value)}
                    required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time"></label>
                <input
                    type="time"
                    name="time"
                    id="time"
                    value={time}
                    onChange={evento => setTime(evento.target.value)}
                    step="1"
                    min="00:00:00"
                    max="02:00:00"
                    required />
            </div>
            <Button type="submit">
                Adicionar
            </Button>
        </form>
    )
}

export default Form;