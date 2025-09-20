import React from 'react';


function UserCard({ name, age, location }) {
  return (
    <div style={cardStyle}>
      <h2 style={nameStyle}>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
}

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '20px',
  margin: '10px',
  width: '200px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};

const nameStyle = {
  color: 'white',
  marginTop: '0'
};

export default UserCard;