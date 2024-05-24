import React, { useState, useMemo } from 'react';

interface User {
  id: number;
  name: string;
  age: number;
}

const UserList: React.FC = () => {
  // Sample list of users
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Alice', age: 22 },
    { id: 2, name: 'Bob', age: 17 },
    { id: 3, name: 'Carol', age: 25 },
    { id: 4, name: 'Dave', age: 16 },
    { id: 5, name: 'Eve', age: 29 }
  ]);

  // useMemo to compute and store users over 18
  const adultUsers = useMemo(() => {
    return users.filter(user => user.age >= 18);
  }, [users]);  // Dependency on users array to recompute when users state changes

  return (
    <div>
      <h1>Users Over 18</h1>
      <ul>
        {adultUsers.map(user => (
          <li key={user.id}>
            {user.name} - Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
