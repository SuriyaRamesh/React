import { useState } from "react";
import React from "react";

// Parent Component: Dropdown
export function Dropdown({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isOpen, toggleDropdown })
      )}
    </div>
  );
}

// Trigger Component
export function DropdownTrigger({ children, toggleDropdown }) {
  return (
    <button onClick={toggleDropdown} style={{ padding: '8px 16px', cursor: 'pointer' }}>
      {children}
    </button>
  );
}

// Content Component
export function DropdownContent({ children, isOpen }) {
  return isOpen ? (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        background: '#fff',
        border: '1px solid #ccc',
        padding: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      {children}
    </div>
  ) : null;
}

// Option Component
export function DropdownOption({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: '8px 12px',
        cursor: 'pointer',
        background: '#f9f9f9',
        borderBottom: '1px solid #ddd',
      }}
    >
      {children}
    </div>
  );
}

