import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [economicImpacts, setEconomicImpacts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/economic-impacts')
      .then(response => {
        setEconomicImpacts(response.data);
      })
      .catch(error => console.error('There was an error!', error));
  }, []);

  return (
    <div className="App">
      <h1>Economic Impacts of Sports Events</h1>
      <ul>
        {economicImpacts.map((impact, index) => (
          <li key={index}>{impact.event}: Economic Impact - ${impact.economicImpact}, Visitors - {impact.visitors}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
