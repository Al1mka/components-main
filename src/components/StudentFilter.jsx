import { useState } from "react";
import StudentCard from "./StudentCard";

export default function StudentFilter({ students }) {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? students : students.filter(s => s.group === filter);

  return (
    <div>
      <h2>Student Filter</h2>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("SE-101")}>SE-101</button>
        <button onClick={() => setFilter("SE-102")}>SE-102</button>
        <button onClick={() => setFilter("SE-103")}>SE-103</button>
      </div>
      {filtered.map(student => (
        <StudentCard
          key={student.id}
          name={student.name}
          group={student.group}
          track={student.track || "N/A"}
        />
      ))}
    </div>
  );
}