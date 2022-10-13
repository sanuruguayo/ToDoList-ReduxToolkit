import { useDispatch } from 'react-redux';
import { checkToDo, deleteToDo } from '../redux/todo.slice';

export default function TodoItem({ todo }) {
  // const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => {
            dispatch(checkToDo({ id: todo.id, completed: e.target.checked }));
          }}
        />
        <label>{todo.text}</label>
        <button
          className="destroy"
          onClick={() => dispatch(deleteToDo(todo.id))}
        />
      </div>
    </li>
  );
}
