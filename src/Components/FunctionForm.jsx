import React, { useState } from "react";

export default function App() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="App" style={{backgroundColor: "royalblue"}}>
        <h1>FunctionForm</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Name <br/></label>
          <input
            type="Name"
            name="email"
            value={state.Name}
            onChange={handleInputChange}
          />
        </div>
        <br/>
        <div className="form-control">
          <label>Password <br/></label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <br/>
        <div className="form-control">
          <label>Email <br/></label>
          <input
            type="Emaild"
            name="Email"
            value={state.Email}
            onChange={handleInputChange}
          />
        </div>
        <br/>
        <div className="form-control">
          <label></label>
          <button type="submit" style={{backgroundColor: "skyblue"}}>Submit</button>
        </div>
      </form>
    </div>
  );
}