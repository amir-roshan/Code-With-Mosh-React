// to send an HTTP request to the server, we can use the fetch function
// but a better way is to use the axios library
// npm install axios

// Understanding the principles behind HTTP Request and handling errors

import axios, { CanceledError } from "axios";
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
    // it allows us to cancle or abort the asynchronous operations
    const controller = new AbortController();

    // what if the user navigates to another page before the request is completed?
    // we need to cancel the request to avoid memory leaks
    // in the get method, we have a second argument that is an object
    // which we can pass the configuration object
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((response) => setUsers(response.data))
      .catch((error) => {
        // if the error is an instance of CanceledError, we return
        if (error instanceof CanceledError) return;

        setError(error.message);
      });

    // we return a cleanup function to cancel the request
    // The first request is cancled because as part of mounting the component, the cleanup function is called
    return () => controller.abort();
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
