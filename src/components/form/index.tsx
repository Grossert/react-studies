import React from "react";
import Button from "../button";
import style from './form.module.scss'
import { ITarefa } from "../../types/tarefas";
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component<{
    setItems: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    state = {
        task: "",
        time: "00:00"
    }

    addTask(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setItems(aTask =>
            [
                ...aTask,
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        )
        this.setState({
            task: "",
            time: "00:00"
        })
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Adicione um novo Estudo
                    </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        value={this.state.task}
                        onChange={evento => this.setState({ ...this.state, task: evento.target.value })}
                        required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time"></label>
                    <input
                        type="time"
                        name="time"
                        id="time"
                        value={this.state.time}
                        onChange={evento => this.setState({ ...this.state, time: evento.target.value })}
                        step="1"
                        min="00:00:00"
                        max="01:30:00"
                        required />
                </div>
                <Button type="submit">
                    Adicionar
                </Button>
            </form>
        )
    }
}

export default Form;