import style from './relogio.module.scss'

interface Props {
    time: number | undefined
}

function Relogio({ time = 0 }: Props) {
    const minutos = Math.floor(time / 60)
    const segundos = time % 60;

    const [minDez, minUni] = String(minutos).padStart(2, '0');
    const [segDez, segUni] = String(segundos).padStart(2, '0');

    return (
        <>
            <span className={style.relogioNumero}>{minDez}</span>
            <span className={style.relogioNumero}>{minUni}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segDez}</span>
            <span className={style.relogioNumero}>{segUni}</span>
        </>
    )
}
export default Relogio;