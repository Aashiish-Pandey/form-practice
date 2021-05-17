import React, { useState } from 'react';
import './style.css';
import Form from './Form';

function App() {
  const [name, setName] = useState('');
  const [mob, setMob] = useState(0);
  return (
    <div>
      <p>
        my name is {name} and my Mob no is {mob}
      </p>
      <Form setName={setName} setMob={setMob} />;
    </div>
  );
}

export default App;
