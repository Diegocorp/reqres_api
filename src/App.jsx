import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

//https://reqres.in/api/users

const fetchData = async () => {
  const res = await axios.get("https://reqres.in/api/users");
  const resJSON = res.data.data;
  console.log(resJSON);
  return resJSON;
};

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetchData().then((data) => {
      setUsers(data);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        {users.map((user, userID) => (
          <div key={userID}>
            <img src={user.avatar} alt="" style={{ borderRadius: "50%" }} />
            <h2>{user.first_name}</h2>
          </div>
        ))}
        <button
          style={{
            borderRadius: "15%",
            fontSize: "35px",
            backgroundColor: "black ",
            color: "white",
          }}
          onClick={getUsers}
        >
          Add
        </button>
      </header>
    </div>
  );
}

export default App;
