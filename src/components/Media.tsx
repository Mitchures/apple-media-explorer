import React from 'react';
import './Media.css';
import { useStateValue } from 'context';

const Media = () => {
  const [{ data }, dispatch] = useStateValue();

  return (
    <div className="media">
      <div className="media__grid">
        {data?.results.map((result, index) => (
          <div
            className="media__gridItem"
            key={index}
            onClick={() =>
              dispatch({ type: 'set_selection', selected: result })
            }
          >
            <img
              width="200"
              src={result.artworkUrl100?.replace('100x100', '300x300')}
              alt={result.trackName}
            />
            <span className="media__gridItemLabel">
              <span className="media__gridItemLabelTitle">
                {result.trackName ? result.trackName : result.collectionName}
              </span>
              <span className="media__gridItemLabelSubtitle">
                {result.artistName}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
