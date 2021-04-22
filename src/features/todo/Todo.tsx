// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  addTodo, removeTodo, selectTodo, toggleTodo,
} from './todoSlice';

import styles from './Todo.module.css';

// eslint-disable-next-line import/prefer-default-export
export function Todo() {
  const todos = useAppSelector(selectTodo);
  const dispatch = useAppDispatch();
  const [context, setContext] = useState<string>('');

  const handleContextChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setContext(e.target.value);
  };

  return (
    <div className={styles.flex}>
      <div className={styles.box}>
        <input className={styles.input} type="text" onChange={handleContextChange} value={context} />

        <button onClick={() => {
          dispatch(addTodo(context));
          setContext('');
        }}
        >
          저장
        </button>

        <ul className={styles.todos}>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.context}
              {' '}
              <button onClick={() => {
                dispatch(toggleTodo(todo.id));
              }}
              >
                {todo.checked ? 'O' : 'X'}
              </button>
              <button onClick={() => {
                dispatch(removeTodo(todo.id));
              }}
              >
                DEL
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
