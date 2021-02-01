import {combineReducers} from 'redux';
import ProductosReducer from './ProductosReducer';
import alertaReducer from './AlertaReducer';

export default combineReducers({
    productos: ProductosReducer,
    alerta: alertaReducer
});