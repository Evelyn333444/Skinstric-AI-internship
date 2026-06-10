import React, { useState, useRef, useEffect } from 'react';
import './searchBar.css';

export default function SearchBar({ initialOpen = false, onSubmit, onChange }) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  // Automatically focus the input field when it opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearchClick = () => {
    setIsOpen(true);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (onSubmit) {
        onSubmit(query);
      }
    }
  };

  return (
    <div style={styles.container}>
      {!isOpen ? (
        <span onClick={handleSearchClick} style={styles.placeholder}>
          Click to type
        </span>
      ) : (
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={() => setIsOpen(false)} // Closes search bar if user clicks away
          placeholder="Search..."
          style={styles.input}
        />
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    fontFamily: 'sans-serif',
  },
  placeholder: {
    cursor: 'pointer',
    color: '#888',
    border: '1px solid #ccc',
    padding: '8px 12px',
    borderRadius: '4px',
  },
  input: {
    padding: '8px 12px',
    border: '1px solid #999',
    borderRadius: '4px',
    outline: 'none',
  }
};