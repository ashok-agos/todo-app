import * as actionTypes from '../constants/actionTypes';

export const addTodos = (todo) => {
    return {
        type: actionTypes.ADD_TODO,
        todo: {...todo}
    }
}

export const removeTodos = (id) => {
    return{
        type: actionTypes.REMOVE_TODO,
        id: id,
    }
}

export const updateTodos = (todo) => {
    debugger;
    return {
        type: actionTypes.UPDATE_TODO,
        updateTodo: {...todo}
    }
}