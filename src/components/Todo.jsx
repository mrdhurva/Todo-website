import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import "../components_css/Todo.css";

function Todo() {
  let [task, setTask] = useState("");
  let [items, setItems] = useState([]);

  let finalValue = ({ target: { value } }) => {
    setTask(value);
    console.log(value)
  };

  let addTask = () => {
    if(task!==''){
      setItems([...items,task]);
      setTask('');
    }else{
      alert('Input must contain value')
    }
  };

let deleteTask=(index)=>{
    let remaining_items=items.filter((item_value,item_index)=>{
        return index!==item_index;
    })
    setItems(remaining_items)
}

  return (
    <>
      <div className="todo-body">
        <div className="todo-body-input">
          <TextField variant="outlined" label="Name" onChange={finalValue} />
        </div>
        <div className="todo-body-button">
          <Button variant="contained" onClick={addTask}>
            Submit
          </Button>
        </div>
      </div>
      <div className="todo-output">
      {items.map((item_value, item_index) => {
          return (
              <div className="todo-output-value"  key={item_index}>
              <div className="output-name">
                <Typography variant="h5" className="data">
                  {item_value}
                </Typography>
              </div>
              <div className="output-button">
                <Button variant="contained" color="error" onClick={()=>{deleteTask(item_index)}}>
                  Delete
                </Button>
              </div>
            </div>
          );
        })} 
     </div>
      
    </>
  );
}

export default Todo;
