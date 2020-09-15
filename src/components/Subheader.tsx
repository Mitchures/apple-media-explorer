import React from 'react';
import './Subheader.css';
import { useStateValue } from 'context';

const Subheader = () => {
  const [{ entity }] = useStateValue();

  return (
    <div className="subheader">
      <h1>{entity.label}</h1>
    </div>
  );
};

export default Subheader;
