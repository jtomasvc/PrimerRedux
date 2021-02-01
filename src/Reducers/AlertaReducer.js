import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../Types/index';

//Cada reducer tiene su propio state

const initialState = {
    alerta: null
}

export default function(state= initialState, action){
    switch(action.type){
        case MOSTRAR_ALERTA:
            return{
                ...state,
                alerta: action.payload
            }
        case OCULTAR_ALERTA:
            return{
                ...state,
                alerta:null
            }
        default:
            return state;
    }
}