import Button from "../button";
import Relogio from "./relogio";
import style from './cronometro.module.scss'

function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio></Relogio>
            </div>
            <Button>
                Começar
            </Button>
        </div>
    )
}
export default Cronometro;