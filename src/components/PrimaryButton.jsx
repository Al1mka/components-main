export default function PrimaryButton({ label, type = "primary", ...props }) {
  const className = type === "secondary" ? "btn-secondary" : "btn-primary";
  return (
    <button className={className} {...props}>
      {label}
    </button>
  );
}