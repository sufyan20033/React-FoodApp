import "./Innercontainer.css"; // No need to assign it to Styles

export default function Innercontainer({ children }) {
  return <div className="Innercontainer">{children}</div>; // Use className directly
}
