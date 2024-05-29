import { useEffect } from "react";

// to simulate connecting to a chat server
const connect = () => console.log("connecting to chat server");
const disconnect = () => console.log("disconnecting from chat server");

const App = () => {
  useEffect(() => {
    connect();

    // cleanup function
    // a function that runs when the component is unmounted
    return () => disconnect();
  });
  return <></>;
};

export default App;
