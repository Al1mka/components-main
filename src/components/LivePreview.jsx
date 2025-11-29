import { useState } from "react";

export default function LivePreview() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "2rem" }}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type something..."
        style={{ padding: "10px", width: "300px" }}
      />
      <p>You typed: <strong>{text || "nothing yet..."}</strong></p>
    </div>
  );
}