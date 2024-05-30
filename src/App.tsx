// to send an HTTP request to the server, we can use the fetch function
// but a better way is to use the axios library
// npm install axios

// Understanding the principles behind HTTP Request and handling errors

import axios, { AxiosError } from "axios";
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
    // get -> a promise -> response/error
    // get -> await promise -> response/error
    // Some people don't like to use then and catch, they prefer async/await
    // Mosh prefers to do promises with then and catch
    const fetchUsers = async () => {
      // we use try/catch to handle errors because we are using async/await
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (error) {
        // We can use the AxiosError interface to get the error message
        setError((error as AxiosError).message);
      }
    };

    // after the component has been rendered, we call the fetchUsers function
    fetchUsers();
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
