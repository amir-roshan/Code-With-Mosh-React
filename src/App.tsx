// to send an HTTP request to the server, we can use the fetch function
// but a better way is to use the axios library
// npm install axios

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
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // we pass the URL of the API end pint to the get method
    // this method returns a promise because it is an asynchronous operation which means it takes some time to complete
    // A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
    // Asynchronous is just a fancy way of saying that something takes time to complete.
    // We can specify the type of data we expect to get from the API by passing it as a type argument to the get method
    // All promises have a then method which is called when the promise is resolved
    // Always add the dependencies array to the useEffect hook to avoid infinite loops
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data));
  }, []);

  return (
    <>
      <h2>Users</h2>
      <h2>{users.length}</h2>
      {users.map((user) => {
        // Don't forget to return the JSX element
        return <li key={user.id}>{user.name}</li>;
      })}
    </>
  );
};

export default App;
