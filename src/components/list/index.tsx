import style from './list.module.scss';
import Item from './item'
import { ITarefa } from '../../types/tarefas';


function List({ items }: { items: ITarefa[] }) {
    return (
        <aside className={style.listaTarefa}>
            <h2>Estudos do dia</h2>
            <ul>
                {items.map((item, i) => (
                    <Item
                        key={i}
                        task={item.task}
                        time={item.time}
                        selecionado={item.selecionado}
                        completado={item.completado}
                        id={item.id}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;