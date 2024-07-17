import style from './list.module.scss';
import Item from './item'
import { ITarefa } from '../../types/tarefas';

interface Props {
    items: ITarefa[],
    selecionaTask: (taskSelecionada: ITarefa) => void
}

function List({ items, selecionaTask }: Props) {
    return (
        <aside className={style.listaTarefa}>
            <h2>Estudos do dia</h2>
            <ul>
                {items.map((item, i) => (
                    <Item
                        selecionaTask={selecionaTask}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;