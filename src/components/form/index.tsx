import React from "react";
import Button from "../button";
import style from './form.module.scss'

class Form extends React.Component {
    render() {
        return (
            <form action="" className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Adicione um novo Estudo
                    </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time"></label>
                    <input
                        type="time"
                        name="time"
                        id="time"
                        step="1"
                        min="00:00:00"
                        max="01:30:00"
                        required />
                </div>
                <Button></Button>
            </form>
        )
    }
}

export default Form;