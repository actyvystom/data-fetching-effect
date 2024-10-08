import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    }
    loadData();
  }, []);

  return (
    <>
      <h1>APIs & data fetching</h1>
      {/* <button onClick={handleLoadData}>Load data</button> */}
      <p>{isLoading ? "Lade Daten..." : ""}</p>
      <ul>
        {!isLoading && users.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </>
  );
}

export default App;
