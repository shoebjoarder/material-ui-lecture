import React, { createContext, useState } from "react";
import { CssBaseline, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Todo from "./components/todo";
import Users from "./components/users";

export const UserTodoContext = createContext({
  users: [],
  setUsers: () => {},
});

export default function App() {
  const [users, setUsers] = useState([]);

  return (
    <>
      <UserTodoContext.Provider value={{ users, setUsers }}>
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <Grid
            container
            justifyContent="center"
            sx={{ minHeight: "90vh", py: 10, px: 2 }}
          >
            <Grid size={{ xs: 12, md: 8, lg: 5 }}>
              <Routes>
                <Route index element={<Users />} />
                <Route path="users/:userId/todos" element={<Todo />} />
                <Route path="*" element={<Navigate to={"/"} replace />} />
              </Routes>
            </Grid>
          </Grid>
        </BrowserRouter>
        <Divider />
        <Footer />
      </UserTodoContext.Provider>
    </>
  );
}
