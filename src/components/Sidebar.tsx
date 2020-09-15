import React from 'react';
import './Sidebar.css';
import { Button } from '@material-ui/core';
import { useStateValue } from 'context';

const Sidebar: React.FC = () => {
  const [{ data, selected }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <div className="sidebar__results">
        {data?.results.length === 0 && (
          <p className="sidebar__noResults">No Results</p>
        )}
        {data?.results.map((result, index) => (
          <Button
            key={index}
            variant="outlined"
            className={`sidebar__resultsButton${
              selected === result ? '--active' : ''
            }`}
            onClick={() =>
              dispatch({ type: 'set_selection', selected: result })
            }
          >
            <div className="sidebar__resultsButtonLabel">
              <span className="sidebar__resultsButtonLabelTitle">
                {result.trackName ? result.trackName : result.collectionName}
              </span>
              <span className="sidebar__resultsButtonLabelSubtitle">
                {result.artistName}
              </span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
