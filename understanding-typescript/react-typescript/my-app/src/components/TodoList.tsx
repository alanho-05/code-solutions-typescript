type TodoListProps = {
  items: { id: string; text: string }[];
};

export default function TodoList(props: TodoListProps): JSX.Element {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
