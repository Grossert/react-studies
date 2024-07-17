import { ITarefa } from '../../../types/tarefas';
import style from '../list.module.scss'

function Item({task, time, selecionado, completado, id}: ITarefa) {
    console.log({task, time, selecionado, completado, id})
    return (
        <li className={style.item}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}
export default Item;