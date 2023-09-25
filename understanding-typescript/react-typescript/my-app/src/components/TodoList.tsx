import './TodoList.css';

type TodoListProps = {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
};

export default function TodoList(props: TodoListProps): JSX.Element {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
