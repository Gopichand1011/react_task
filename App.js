import React, { useEffect, useState } from 'react';

//import './App.css';

function App() {
  const [records, setRecords] = useState([]);

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')  // API endpoint
      .then((response) => response.json())
      .then(data => setRecords( data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Users from API</h1>
      <ul>
        {records.map((list, index) => (
          <li>Id: {list.id} <br/>
           Name: {list.name} <br/>
          Email: {list.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
