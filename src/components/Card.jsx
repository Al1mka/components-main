export default function Card({ children }) {
  return (
    <div style={{ color: "black", border: "2px solid #333", borderRadius: 12, padding: 20, margin: "16px 0", backgroundColor: "#f9f9f9" }}>
      {children}
    </div>
  );
}