import React from 'react';

const Form = ({ name, mob, setName, setMob }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        alert('you are submittting this form');
      }}
    >
      
      <input
        type="text"
        name=" name"
        value={name}
        placeholder="Enter color name"
        onChange={e => setName(e.target.value)}
        borderColor ={}
      />
      <input
        type="text"
        name="mob"
        value={mob}
        placeholder="Enter Mob"
        onChange={e => setMob(e.target.value)}
      />

      <input type="submit" />
    </form>
  );
};

export default Form;
