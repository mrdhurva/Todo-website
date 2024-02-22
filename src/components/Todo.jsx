import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import "../components_css/Todo.css";

function Todo() {
  let [task, setTask] = useState("");
  let [value, setValue] = useState([]);

  let finalValue = ({ target: { value } }) => {
    setTask(value);
  };

  let addTask = () => {
    setValue([...value, task]);
    setTask('');
  };

  let deleteTask=(index)=>{
    let remaining_task=(item,indexs)=>{
        setValue(index!==indexs)
    }
    setValue(remaining_task)
  }

  return (
    <>
      <div className="todo-body">
        <div className="todo-body-input">
          <TextField variant="outlined" label="Name" onChange={finalValue} />
        </div>
        <div className="todo-body-button">
          <Button variant="contained" onClick={addTask}>
            Contained
          </Button>
        </div>
      </div>
      {value.map((item, key_index) => {
          return (
            <div className="todo-output" key={key_index}>
            <div className="todo-output-value" >
                <div className="output-name">
                  <Typography variant="h5" className="data">
                    {item}
                  </Typography>
                </div>
                <div className="output-button">
                  <Button variant="contained" color="error" onClick={deleteTask}>
                    Contained
                  </Button>
                </div>
              </div>
             </div>
          );
        })}
    </>
  );
}

export default Todo;
