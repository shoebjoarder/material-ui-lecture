import React, { createContext, useState } from "react";
import { Container, CssBaseline, Divider } from "@mui/material";
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
          <Container maxWidth="lg" sx={{ minHeight: "95vh", py: 12, px: 2 }}>
            <Routes>
              <Route index element={<Users />} />
              <Route path="users/:userId/todos" element={<Todo />} />
              <Route path="*" element={<Navigate to={"/"} replace />} />
            </Routes>
          </Container>
        </BrowserRouter>
        <Divider />
        <Footer />
      </UserTodoContext.Provider>
    </>
  );
}
