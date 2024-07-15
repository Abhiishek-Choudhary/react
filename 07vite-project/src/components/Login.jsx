import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
     e.preventDefault();
     setUser({username, Password})
  }

  return (
    <div>
      <input
        style={{padding: "9px"}}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Enter your name"
      />
      {" "}
      <input
        style={{padding: "9px"}}
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Enter password"
      />
      {" "}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
