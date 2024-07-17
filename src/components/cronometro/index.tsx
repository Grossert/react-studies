import Button from "../button";
import Relogio from "./relogio";
import style from './cronometro.module.scss'
import tempoParaSegundos from "../../common/utils/time";
import { ITarefa } from "../../types/tarefas";
import { useEffect, useState } from "react";

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTask: () => void
}

function Cronometro({ selecionado, finalizarTask }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selecionado?.time) {
            setTime(tempoParaSegundos(selecionado.time))
        }
    }, [selecionado])

    function regressiva(cont: number = 0) {
        setTimeout(() => {
            if (cont > 0) {
                setTime(cont - 1);
                return regressiva(cont - 1)
            }
            finalizarTask();
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio
                    time={time}
                />
            </div>
            <Button onClick={() => regressiva(time)}>
                Começar
            </Button>
        </div>
    )
}
export default Cronometro;