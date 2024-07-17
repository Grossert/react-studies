import { ITarefa } from '../../../types/tarefas';
import style from './item.module.scss'

interface Props extends ITarefa {
    selecionaTask: (taskSelecionada: ITarefa) => void
}

function Item(
    {
        task,
        time,
        selecionado,
        completado,
        id,
        selecionaTask }: Props) {
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
            onClick={() => !completado && selecionaTask(
                {
                    task,
                    time,
                    selecionado,
                    completado,
                    id
                }
            )}>
            <h3>{task}</h3>
            <span>{time}</span>
            {completado &&
                <span className={style.concluido} aria-label='tarefa-completada'>
                </span>}
        </li>
    )
}
export default Item;