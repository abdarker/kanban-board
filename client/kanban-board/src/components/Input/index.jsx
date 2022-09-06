import axios from "axios";
import React, { useState } from "react";
import "./Input.css";

const Input = () => {
  const [itemText, setItemText] = useState("");

  const addItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5500/api/task", {
        task: itemText,
      });
      console.log(res);
      setItemText("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <form onSubmit={(e) => addItem(e)}>
        <label>
          <input
            placeholder="Write your task ..."
            style={{ width: "300px" }}
            type="text"
            onChange={(e) => {
              setItemText(e.target.value);
            }}
            value={itemText}
          />
        </label>
        <button type="submit" value="Submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Input;
