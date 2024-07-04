function List({ users, onUserClick }) {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} onClick={() => onUserClick(user)}>
          <a>{user.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default List;
