import { useState } from "react";
import { CssBaseline, Button, Typography, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function App() {
  // ****************************************
  // ** Create a state using useState hook **
  // ****************************************
  const [name, setName] = useState("Simple Counter");
  const [count, setCount] = useState(0);
  // ****************************************

  return (
    <>
      <CssBaseline />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: "95vh" }}
      >
        <Grid
          container
          direction="column"
          sx={{ bgcolor: "#FFB44D", p: 4, borderRadius: 2 }}
          spacing={1}
        >
          {/* // ************************************* */}
          {/* // **** Displays the counter name ****** */}
          {/* // ************************************* */}
          <Typography variant="h4" align="center">
            {name}
          </Typography>
          {/* // ************************************* */}

          {/* // ************************************* */}
          {/* // ***** Displays the count value ****** */}
          {/* // ************************************* */}
          <Typography variant="h1" align="center">
            {count}
          </Typography>
          {/* // ************************************* */}

          <Grid container justifyContent="center" spacing={1}>
            <Grid size="grow">
              {/* // ************************************* */}
              {/* // ***** Button to decrease count ****** */}
              {/* // ************************************* */}
              <Button
                variant="contained"
                color="error"
                fullWidth
                onClick={() => setCount(count - 1)} // Click event to decrease count
              >
                Decrease
              </Button>
              {/* // ************************************* */}
            </Grid>
            <Grid size="grow">
              {/* // ************************************* */}
              {/* // ***** Button to increase count ****** */}
              {/* // ************************************* */}
              <Button
                variant="contained"
                color="success"
                fullWidth
                onClick={() => setCount(count + 1)} // Click event to increase count
              >
                Increase
              </Button>
              {/* // ************************************* */}
            </Grid>
          </Grid>
          <Grid size="grow">
            {/* // ************************************** */}
            {/* // * Button to reset the count to zero ** */}
            {/* // ************************************** */}
            <Button
              variant="contained"
              color="info"
              fullWidth
              onClick={() => setCount(0)} // Click event to reset count
            >
              Reset
            </Button>
            {/* // ************************************** */}
          </Grid>
          <Grid size="grow" sx={{ pt: 1 }}>
            {/* // ************************************** */}
            {/* // * Input field to rename the counter ** */}
            {/* // ************************************** */}
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              label="Change name"
              onChange={(event) => setName(event.target.value)}
            />
            {/* // ************************************** */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
