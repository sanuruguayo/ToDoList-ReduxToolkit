import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTodos } from '../redux/todo.slice';
import TodoList from './TodoList';

const MainSection = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // efecto
    // setLoading(true);
    // axios.get('http://localhost:3004/todos').then((res) => {
    //   dispatch(setTodos(res.data));
    //   setLoading(false);
    // });
    async function fetchTodos() {
      setLoading(true);

      const res = await axios.get('http://localhost:3004/todos');

      dispatch(setTodos(res.data));
      setLoading(false);
    }
    fetchTodos();
  }, []);

  return (
    <section className="main">
      {loading ? (
        <div style={{ margin: '15px' }}>
          <i className="fa fa-spinner fa-spin fa-4x"></i>
        </div>
      ) : (
        <TodoList />
      )}
    </section>
  );
};

export default MainSection;
