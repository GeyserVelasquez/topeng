import "./entry.css";

export const Entry = ({ holder = "Entry", className = "", type = "text" }) => {
  return (
    <input 
      className={`entry ${className}`} 
      type={type} 
      placeholder={holder}
    />
  );
};
