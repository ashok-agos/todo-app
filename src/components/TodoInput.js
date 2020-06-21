import React from 'react';

import uuid from 'react-uuid';

const TodoInput = (props) => {

    const addTodo = () => {
        props.addTodo({id: (uuid()+"").slice(0,5), todo: props.todo, priority:props.priority});
        props.setTodo("");
        props.setPriority("");
        console.log((uuid() + "").slice(0,5));
    }

    const updateTodo = () => {
        props.updateTodo({id: props.id, todo: props.todo, priority:props.priority})
        props.setIsAdd(true);
        props.setIsEdit(false);
    }

    const resetTodo = () => {
        props.setIsAdd(true);
        props.setTodo("");
        props.setPriority("");
        props.setId("");
    }

    return (
        <div className="input-container">
            <div className="header">{props.isAdd ? "Add Todo" : "Update Todo" }</div>
            {props.isEdit && 
            <div className="input">
                <label>ID</label>
                <input type="text"
                    // placeholder="Please Enter Todo items"
                    value={props.id}
                    readOnly
                /> 
            </div>
            }
            <div className="input">
                <label>Todo Items</label>
                <input type="text"
                    // placeholder="Please Enter Todo items"
                    value={props.todo}
                    onChange={(e) => props.setTodo(e.target.value)}
                />
            </div>
            <div className="input">
                <label>Priority</label>
                <input type="text"
                    // placeholder="Priority"
                    value={props.priority}
                    onChange={(e) => props.setPriority(e.target.value)}
                />
            </div>
            <div className="btn-container">
                {props.isAdd && <button className="btn" type="button" onClick={addTodo}>Add</button>}
                {props.isEdit && <button className="btn" type="button" onClick={updateTodo}>Update</button>}
                <button type="button" className="btn" onClick={resetTodo}>Reset</button>
            </div>
        </div>
    );
}

export default (TodoInput);