import React from 'react';
import TodoTextInput from './TodoTextInput';
import { useDispatch } from 'react-redux/es/exports';
import { addToDo } from '../redux/todo.slice';

const Header = () => {
  const dispatch = useDispatch();
  const onSave = (text) => {
    dispatch(addToDo(text));
  };
  return (
    <header className="header">
      <h1>Tareas</h1>
      <TodoTextInput onSave={onSave} placeholder="¿Qué vamos a hacer hoy?" />
    </header>
  );
};

export default Header;
