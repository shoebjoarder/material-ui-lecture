import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AddIcon from "@mui/icons-material/Add";

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

        <Button
          // * Variant prop -> default is "text"
          variant="contained"
          // variant="outlined"
          // variant="string" // Like "text" without color

          // * Color prop -> default "primary"
          // color="secondary"
          // color="success"
          // color="error"
          // color="warning"
          // color="info"
          // color="string"

          // * Disable -> default false
          // disabled={true}
          // disabled // alternative

          // * Icon prop
          // startIcon={<AddIcon />}
          endIcon={<AddIcon />}
          onClick={() => handleAddTodo(addTask)}
        >
          Add
        </Button>
      </Grid>
    </>
  );
};

export default AddTodo;
