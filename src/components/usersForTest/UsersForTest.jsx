import React, { useEffect, useState } from 'react';
import User from './User';

function UsersForTest() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTimeout(() => {
          setUsers(data);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    loadUsers();
  }, []);

  const onDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      {isLoading && <p id='users-loading'>Loading...</p>}
      {users.length && (
        <div id='users-list'>
          {users.map((user) => (
            <User key={user.id} onDelete={onDelete} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default UsersForTest;
