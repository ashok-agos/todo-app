import React, {useState, useEffect} from 'react';

import {addTodos, removeTodos, updateTodos} from '../redux/actions/todosAction';
import {connect} from 'react-redux';

import TodoHeader from '../components/TodoHeader';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

function TodoApp(props) {
  const [id, setId] = useState("");
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isAdd, setIsAdd] = useState(true);

  useEffect(() => {
    props.todoList.forEach(list => {
      if(list.id === id){
        setTodo(list.todo);
        setPriority(list.priority)
      }
    });
  },[isEdit]);

  useEffect(() => {
    if(isAdd){
      setTodo("")
      setPriority("")
      setPriority("")
      setIsEdit(false)
    }
  },[isAdd])

  return (
    <>
      <TodoHeader></TodoHeader>
      <TodoInput
        id={id}
        todo={todo}
        setTodo={setTodo}
        priority={priority}
        setPriority={setPriority}
        addTodo={props.addTodo}
        updateTodo={props.updateTodo}
        isAdd={isAdd}
        setIsAdd={setIsAdd}
        isEdit={isEdit}
        setIsEdit={setIsEdit}

      />
      <TodoList
        todoList={props.todoList}
        removeItem={props.removeItem}
        setIsEdit={setIsEdit}
        setIsAdd={setIsAdd}
        setId={setId}
      />
    </>
  );
}

const mapStateToProps = state => {
  return {
      todos: state.todos,
      todoList: state.todos.todos || [],
  }
}

const mapDispatchToProps = dispatch => {
  return {
      addTodo: (list) => dispatch(addTodos(list)),
      removeItem : (id) => dispatch(removeTodos(id)),
      updateTodo: (list) => dispatch(updateTodos(list)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoApp);
