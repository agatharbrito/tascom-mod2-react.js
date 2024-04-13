import React from "react";

export function Button({ children, onClick }) {
  return (
    <button
      style={{
        backgroundColor: "pink",
        color: "green",
        padding: 10,
        borderRadius: 5,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
