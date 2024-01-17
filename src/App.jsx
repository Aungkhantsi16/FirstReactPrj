import { useState, useEffect } from "react";
import "./Style.css";
import Student from "./Student.jsx";

function App() {
  return (
    <>
      <form>
        <h1>React With My Own</h1>
        <label>Name</label>
        <input type="text" placeholder="Enter Your Name" />
        <label>Age</label>
        <input type="text" placeholder="Enter Your Age" />
        <label>Student ID</label>
        <input type="number" placeholder="Enter Your ID" />
        <div className="btn">
          <button className="btn-submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default App;
