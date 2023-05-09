import React from 'react';

function User({ onDelete, user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <button id='user-delete' onClick={() => onDelete(user.id)}>
        Remove User
      </button>
    </div>
  );
}

export default User;
