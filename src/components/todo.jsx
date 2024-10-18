import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Card,
  CardHeader,
  Checkbox,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import AddTodo from "./add-todo";
import { UserTodoContext } from "../App";

const Todo = () => {
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserTodoContext);
  const params = useParams();
  const userId = params.userId;
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let foundUser = users.find((user) => user.id == userId);
    if (foundUser) {
      setTodos(foundUser.todos);
    } else {
      setTodos([]);
    }
  }, [userId]);

  useEffect(() => {
    return () => {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id == userId ? { ...user, todos: todos } : user
        )
      );
    };
  }, [todos.length]);

  const handleDeleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleAddTodo = (title) => {
    let newTodo = {
      userId: userId,
      id: Math.random(),
      title,
      completed: false,
    };
    let newTodoList = [newTodo, ...todos];
    setTodos(newTodoList);
  };

  const handleCompleteTodo = (event, id) => {
    const checked = event.target.checked;
    const newTodoList = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: checked } : todo
    );
    setTodos(newTodoList);
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <>
      <Button startIcon={<ArrowBackIcon />} onClick={goBack}>
        Back
      </Button>
      <Divider />
      <AddTodo handleAddTodo={handleAddTodo} />
      {todos.length ? (
        <Typography variant="overline" gutterBottom>
          #{todos.length} to-dos found!
        </Typography>
      ) : (
        <Typography
          // * Variant prop -> default "body1"
          // variant="h1"
          // variant="h2"
          // variant="h3"
          // variant="h4"
          // variant="h5"
          // variant="h6"
          // variant="body1"
          // variant="body2"
          // variant="button"
          // variant="caption"
          // variant="overline"

          // * Padding bottom prop
          gutterBottom

          // * Alignment prop -> default "inherit"
          // align="center"
          // align="justify"
          // align="left"
          // align="right"

          // * Color prop
          // color="primary"
          // color="secondary"
          // color="error"
          // color="info"
          // color="warning"
          // color="textPrimary"
          // color="textSecondary"
          // color="textDisabled"
          // color="string"
        >
          No to-dos found!
        </Typography>
      )}
      {todos.map((todo, index) => {
        return (
          <Card
            key={index}
            sx={{
              mb: 1,
              borderRadius: 8,
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            <CardHeader
              title={
                <>
                  <Grid container>
                    <Grid size="auto">
                      <Checkbox
                        checked={todo.completed}
                        onChange={(e) => handleCompleteTodo(e, todo.id)}
                      />
                    </Grid>
                    <Grid size="grow">
                      <Typography
                        sx={{
                          mt: 1,
                          textDecoration: todo.completed ? "line-through" : "",
                        }}
                      >
                        {todo.title}
                      </Typography>
                    </Grid>
                  </Grid>
                </>
              }
              action={
                <IconButton
                  color="error"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            />
          </Card>
        );
      })}
    </>
  );
};

export default Todo;
