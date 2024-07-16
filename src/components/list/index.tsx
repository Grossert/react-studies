import React from "react";
import style from './list.module.scss';

function List() {
    const items = [
        {
            task: 'React',
            time: '02:00:00'
        },
        {
            task: 'JavaScript',
            time: '01:00:00'
        },
        {
            task: 'TypeScript',
            time: '03:00:00'
        }
    ]
    return (
        <aside className={style.listaTarefa}>
            <h2>Estudos do dia</h2>
            <ul>
                {items.map((item, i) => (
                    <li key={i} className={style.item}>
                        <h3>{item.task}</h3>
                        <span>{item.time}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;