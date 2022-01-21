import React, { useState } from "react";

import "./App.css";
function App() {
  // State
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [validation, setValidation] = useState("");

  // regex
  const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
  const passwordLength = password.length >= 6;
  const hasUpperCase = /(.*[A-Z].*)/.test(password);
  const hasNumber = /(.*[0-9].*)/.test(password);
  const specialCaract = /(.*[^a-zA-Z0-9].*)/.test(password);

  const login = (e) => {
    e.preventDefault();
    if ((password.length || checkPassword.length) < 6) {
      setValidation("6 caracteres minimum");
      return;
    }
    if (password.value !== checkPassword.value) {
      setValidation("les mots de passes ne correspondent pas");
      return;
    }
    if (!hasUpperCase && !hasNumber && !specialCaract) {
      setValidation("le format du mot de passe n'est pas valide");
      return;
    }
    try {
      alert("succes");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <form action="" className="form-container" onSubmit={login}>
        <div className="create-account">Create account</div>
        <input
          type="text"
          className="input"
          placeholder="Firstname..."
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
          required
        />
        <input
          type="email"
          className="input"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="password"
          className="input"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <p className="validation">{validation}</p>
        <input
          type="password"
          className="input"
          placeholder="Confirm Password..."
          onChange={(e) => setCheckPassword(e.target.value)}
          value={checkPassword}
          required
        />
        <ul className="check-list">
          {passwordLength ? (
            <li>✅ 6 characters or more</li>
          ) : (
            <li>❌ Missing {6 - password.length} characters</li>
          )}

          {hasUpperCase ? <li>✅ Majuscule</li> : <li>❌ Majuscule</li>}
          {hasNumber ? <li>✅ Number</li> : <li>❌ Number</li>}

          {specialCaract ? (
            <li>✅ Special character</li>
          ) : (
            <li>❌ Special character</li>
          )}
        </ul>
        <button className="button">Submit</button>
      </form>
    </div>
  );
}

export default App;
