
import {combineReducers} from 'redux';
import visibleFilter from './visibleFilter';
import addTodo from './addTodo';



export default combineReducers({addTodo, visibleFilter});