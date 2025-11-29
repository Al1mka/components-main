import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input.trim());
      setInput("");
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === "Enter" && handleAdd()}
        placeholder="New todo..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}