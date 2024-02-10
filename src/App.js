import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TripleInputComponent from './components/inputPage/input.js'; // Ensure this path is correct

function App() {
  const [economicImpacts, setEconomicImpacts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/economic-impacts')
      .then(response => {
        setEconomicImpacts(response.data);
      })
      .catch(error => console.error('There was an error!', error));
  }, []);

  const addEconomicImpact = (newImpact) => {
    // Here you would ideally post to your backend
    // For demonstration, we'll just update the state
    setEconomicImpacts([...economicImpacts, newImpact]);
  };

  return (
    <div className="App">
      {/* <h1>Economic Impacts of Sports Events</h1> */}
      <TripleInputComponent onAdd={addEconomicImpact} />
      <ul>
        {economicImpacts.map((impact, index) => (
          <li key={index}>{impact.eventName}: Economic Impact - ${impact.economicImpact}, Visitors - {impact.visitors}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
