// to send an HTTP request to the server, we can use the fetch function
// but a better way is to use the axios library
// npm install axios

// Understanding the principles behind HTTP Request and handling errors

import axios from "axios";
import { useEffect, useState } from "react";

// We use an interface to add type and auto-completion to the data we get from the API
// This is a good practice because it makes the code more readable and maintainable
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const App = () => {
  const [error, setError] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // When we call the get method, axios sends a GET request to the specified URL
    // HTTP is hypertext transfer protocol and GET is one of the methods used to request data from a server
    // Request and Response are the two main parts of HTTP
    // xhr = XMLHttpRequest
    // Every request and response has a header (metadata) and a body (data)
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      <h2>Users</h2>
      {error && <h2 className="text-danger">{error}</h2>}
      {users.map((user) => {
        // Don't forget to return the JSX element
        return <li key={user.id}>{user.name}</li>;
      })}
    </>
  );
};

export default App;
