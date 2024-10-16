import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import { requestUserDetails } from "../utils/backend";
import { Avatar, CircularProgress, Paper, Typography } from "@mui/material";
import { UserTodoContext } from "../App";

export default function Users() {
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserTodoContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Boolean(users.length)) {
      setLoading(false);
    } else {
      requestUserDetails()
        .then((response) => {
          setUsers(response);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setError(true);
        });
    }
  }, []);

  const handleViewTodos = (userId) => {
    navigate(`/users/${userId}/todos`);
  };

  return (
    <>
      <Grid container spacing={2} alignItems="center">
        {error ? (
          <Grid size={{ xs: 12 }}>
            <Typography align="center">Error loading data...</Typography>
          </Grid>
        ) : loading ? (
          <Grid size={{ xs: 12 }}>
            <Grid container spacing={2} direction="column" alignItems="center">
              <CircularProgress size={40} />
              <Typography align="center">Loading...</Typography>
            </Grid>
          </Grid>
        ) : (
          <>
            {users?.map((user) => {
              return (
                <Grid key={user.id} size={{ xs: 12, sm: 6 }}>
                  <Paper
                    sx={{
                      p: 2,
                      "&:hover": { boxShadow: 5 },
                      cursor: "pointer",
                    }}
                    onClick={() => handleViewTodos(user.id)}
                  >
                    <Grid
                      container
                      spacing={2}
                      direction="column"
                      alignItems="center"
                    >
                      <Avatar
                        src={user.avatar}
                        sx={{ width: 56, height: 56 }}
                      />
                      <Typography variant="h5" align="center">
                        {user.name}
                      </Typography>
                    </Grid>
                  </Paper>
                </Grid>
              );
            })}
          </>
        )}
      </Grid>
    </>
  );
}
