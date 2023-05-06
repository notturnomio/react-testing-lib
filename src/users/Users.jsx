import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {}
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div data-testid='users-page'>
      {users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id} data-testid='user-item'>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </Link>
      ))}
    </div>
  );
}

export default Users;
