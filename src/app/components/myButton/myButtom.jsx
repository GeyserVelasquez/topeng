"use client"; // Indica que este es un Client Component

import "./myButtom.css";

export const MyButtom = ({
  text = "Button",
  className = "",
  white = false,
  onClick,
}) => {
  return (
    <button
      className={`myButtom ${className} ${white ? "btn-white" : "btn-orange"}`}
      onClick={onClick} // Asegurarse de que el onClick esté pasando correctamente
    >
      {text}
    </button>
  );
};
