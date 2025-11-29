import { useState } from "react";

export default function CourseDetails() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h2>React Fundamentals</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} details
      </button>
      {isVisible && <p>This course covers components, props, state, hooks, and building real apps.</p>}
    </div>
  );
}