import React, { useState } from 'react';
import './App.css';
import { puppyList } from './data.js';
import './index.css'
function App() {
  const [featPupId, setFeatPupId] = useState(null);
  const [puppies, setPuppies] = useState(puppyList);

  function handleClick(puppyId) {
    setFeatPupId(puppyId);
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      <div className="puppy-list">
        {puppies.map((puppy) => (
          <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
            {puppy.name}
          </p>
        ))}
      </div>

      {featPupId && (
        <div className="featured-puppy">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
