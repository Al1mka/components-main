export default function Menu({ links = ["Home", "Courses", "About", "Contact"] }) {
  return (
    <nav>
      <ul style={{ display: "flex", listStyle: "none", gap: "2rem", padding: 0 }}>
        {links.map((link, i) => (
          <li key={i}>
            <a href="#" style={{ textDecoration: "none", color: "#007bff" }}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}