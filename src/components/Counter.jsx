import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(c => c + 1)} style={{ margin: "0 10px", padding: "10px 20px" }}>
        +1
      </button>
      <button onClick={() => setCount(0)} style={{ margin: "0 10px", padding: "10px 20px" }}>
        Reset
      </button>
    </div>
  );
}