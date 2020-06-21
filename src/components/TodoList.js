import React from 'react';

import '../css/todo.css'

const TodoList = (props) => {
    const updateItem = (id) => {
        props.setIsEdit(true);
        props.setIsAdd(false);
        props.setId(id);
    }
    return (
        <>
            {props?.todoList?.length ?
                (<table className=".t-table">
                    <thead>
                        <tr>
                            <th>Todo Items</th>
                            <th>Priority</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.todoList.map((list, index) => {
                            return (
                                <tr key={index}>
                                    <td>{list.todo}</td>
                                    <td>{list.priority}</td>
                                    <td><button type="btn" onClick={() => props.removeItem(list.id)}>Delete</button></td>
                                    <td><button type="btn" onClick={() => updateItem(list.id)}>Update</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>) : ""
            }
        </>
    )

}

export default (TodoList);