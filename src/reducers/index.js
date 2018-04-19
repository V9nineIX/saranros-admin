import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import login from './login';
import user from './user';
import modalconfirm from './modalconfirm';
import notification from './notification';
import tag from './tag';
export default combineReducers({
    login,
    user,
    modalconfirm,
    notification,
    tag,
    routing: routerReducer
});