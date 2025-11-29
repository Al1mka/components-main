export default function StudentCard({ name, group, track }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 16, margin: 8, borderRadius: 8 }}>
      <h3>{name}</h3>
      <p>Group: {group}</p>
      <p>Track: {track}</p>
    </div>
  );
}