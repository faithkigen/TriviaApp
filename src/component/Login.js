import React from "react";
// import { useState } from "react-router-dom";

function Login() {
  return (
    <div >
      <form className="form2">
        <h1 className="log">Login</h1>
        <label className="use">username</label><br></br>
        <input id="input-1"type="text"></input> <br></br>
        <label classame="pass">password</label>
        <br></br>
        <input  id="input-1"type="text" placeholder="password"></input>
        <br></br>
        
       <button className="log-btn">Submit</button>
      
      </form>
    </div>
  );
}

export default Login;