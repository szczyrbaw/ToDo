import React from 'react';
import Todo from './Todo';
import style from './TodoList.css';

const TodoList = ({data, remove}) => {
    const listTasks = data.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={remove} />)
    });

    return (
        <div className={style.TodoList}>
            {listTasks} 
        </div>
    );
}

export default TodoList;