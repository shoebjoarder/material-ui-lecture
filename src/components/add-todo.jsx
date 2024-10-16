import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";

// * AddTodo component
const AddTodo = ({ handleAddTodo }) => {
  const [addTask, setAddTask] = useState("");

  const handleChange = (event) => {
    setAddTask(event.target.value);
  };

  return (
    <>
      <Grid container spacing={1} sx={{ py: 2 }}>
        <Grid size="grow">
          <TextField
            fullWidth
            placeholder="Add a to-do"
            size="small"
            onChange={handleChange}
          />
        </Grid>

        <Button variant="contained" onClick={() => handleAddTodo(addTask)}>
          Add
        </Button>
      </Grid>
    </>
  );
};

export default AddTodo;
