import { useState, useEffect } from "react";
import List from "./components/List";
import Details from "./components/Details";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
    )
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="app">
      <List users={users} onUserClick={setSelectedUser} />
      {selectedUser && <Details info={selectedUser} />}
    </div>
  );
}

export default App;
