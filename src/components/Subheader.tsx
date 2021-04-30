import React, { useEffect, useState } from 'react';
import './Subheader.css';
import { Button } from '@material-ui/core';
import { useStateValue } from 'context';

const Subheader: React.FC = () => {
  const [{ entity, data, genres }] = useStateValue();
  const [activeGenre, setActiveGenre] = useState('All');

  useEffect(() => {
    setActiveGenre('All');
  }, [genres]);

  // TODO: when genres is selected filter data per genre

  return (
    <div className="subheader">
      <h1>{entity.label}</h1>
      {data && (
        <div className="subheader__actions">
          <Button
            className={`subheader__button${activeGenre === 'All' ? '--active' : ''}`}
            variant="outlined"
            onClick={() => setActiveGenre('All')}
          >
            All
          </Button>
          {genres?.map((genre, index) => (
            <Button
              key={index}
              className={`subheader__button${activeGenre === genre ? '--active' : ''}`}
              variant="outlined"
              onClick={() => setActiveGenre(genre)}
            >
              {genre}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Subheader;
