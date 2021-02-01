import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../Types/index';

//Muestra alerta
export function mostrarAlerta(alerta) {
    return(dispatch) => {
        dispatch(mostrarAlertaError())
    }
}

const mostrarAlertaError = alerta => ({
    type: MOSTRAR_ALERTA,
    payload:alerta
})

//Ocultar la laerta
export function ocultarAlertaAction() {
    return (dispatch) => {
        dispatch(ocultarAlerta())
    }
}


const ocultarAlerta = () => ({
    type: OCULTAR_ALERTA
})