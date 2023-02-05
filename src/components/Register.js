import React from "react";
import { useState } from "react";

function Register() {
  const [newUser, setNewUser] = useState(" ");
  const [newPassword, setNewPassword] = useState("  ");
  const [member, setMember] = useState([]);
  const [succesMessage, setSuccessMessage] = useState("");

  const userInput = document.querySelector("input:nth-Child(1)");
  const passwordInput = document.querySelector("input:nth-Child(2)");

  const clearInput = () => {
    userInput.value = "";
    passwordInput.value = "";
  };

  // POST
  const registerPerson = async (e) => {
    e.preventDefault();
    const response = await fetch("/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newUser, password: newPassword }),
    });
    const data = await response.json();
    console.log(data.result);
    setSuccessMessage(data.result);
    clearInput();
  };

  // GET
  const getMembers = async (e) => {
    e.preventDefault();
    const response = await fetch("/members");
    console.log(response.status);
    const data = await response.json();
    setMember(data.members);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <div className="register-page">
        <div>
          <form onSubmit={registerPerson} className="register-form">
            <input
              onChange={(e) => setNewUser(e.target.value)}
              type="text"
              placeholder="username"
              required
            />
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              placeholder="password"
              required
            />
            <input type="submit" value="Send" />
            <h3>{succesMessage}</h3>
          </form>
        </div>

        <div>
          <button onClick={getMembers}>Members</button>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {member.map((x, index) => (
                <tr key={index}>
                  <td>{x}</td>
                  <td>{x}</td>
                  <td>{x}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Register;
