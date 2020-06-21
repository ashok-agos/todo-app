// import initialState from './initialState';
import * as actionTypes from '../constants/actionTypes'
import { updateObject } from '../utility';



const initialState = {
    todos: [],
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return updateObject(state, { todos: state.todos.concat({ id: action.todo.id, todo: action.todo.todo, priority: action.todo.priority }) });
        case actionTypes.REMOVE_TODO:
            const todos = [...state.todos]
            let newTodos = todos.filter(list => list.id !== action.id)
            return { todos: [...newTodos] };
        case actionTypes.UPDATE_TODO:
            debugger;
            const copyTodos = [...state.todos];
            const updatedTodos = [];
            copyTodos.forEach((item, index) => {
                if(item.id === action.updateTodo.id){
                    updatedTodos.push(action.updateTodo);
                }
                else{
                    updatedTodos.push(item);
                }
            })
            return { todos: [...updatedTodos] };
        default:
            return state;
    }
}

export default todosReducer;