import React, { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1); 
  };

  return (
    <div style={containerStyle}>
      <h2>Counter: {count}</h2> 
      <button style={buttonStyle} onClick={incrementCount}>
        Click to Increment
      </button>
    </div>
  );
}

const containerStyle = {
  textAlign: 'center',
  margin: '20px'
};

const buttonStyle = {
  padding: '10px 15px',
  fontSize: '16px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default Counter;