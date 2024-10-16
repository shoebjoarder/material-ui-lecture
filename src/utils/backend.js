import axios from "axios";

const REQRESURL = import.meta.env.VITE_BACKEND_REQRES;
const JSONPLACEHOLDERURL = import.meta.env.VITE_BACKEND_JSONPLACEHOLDER;

export const requestUserDetails = async () => {
  try {
    let response = await axios.get(REQRESURL);
    let userDetails = response.data.data;
    let userDetailsWithTodos = await Promise.all(
      userDetails.map(async (user) => {
        const todos = await requestUserTodos(user.id);
        return { ...user, name: `${user.first_name} ${user.last_name}`, todos };
      })
    );
    return userDetailsWithTodos;
  } catch (error) {
    throw error;
  }
};

const requestUserTodos = async (userId) => {
  try {
    let response = await axios.get(`${JSONPLACEHOLDERURL}/${userId}/todos`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
