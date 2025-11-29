export default function TodoList({ todos, onClear }) {
  return (
    <div>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
      {todos.length > 0 && <button onClick={onClear}>Clear all</button>}
    </div>
  );
}