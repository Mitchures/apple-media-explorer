import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Button } from '@material-ui/core';
import { favorites } from 'config';
import axios from 'config/axios';
import { useStateValue } from 'context';

const Sidebar: React.FC = () => {
  const [{ data, selected, entity }, dispatch] = useStateValue();
  const [favoriteItems, setFavoriteItems] = useState<any[]>(
    favorites[entity.type],
  );
  const [featureItems, setFeatureItems] = useState<any[]>([]);

  useEffect(() => {
    setFavoriteItems(favorites[entity.type]);
    axios
      .get(
        `/search?term=${
          entity.type === 'tvSeason' ? 'tv' : entity.type
        }&entity=${entity.type}&limit=10&sort=recent`,
      )
      .then((response) => {
        setFeatureItems(response.data.results);
      });
  }, [entity]);

  return (
    <div className="sidebar">
      <div className="sidebar__results">
        {!data && (
          <>
            <h1>Top Picks</h1>
            {favoriteItems.map((item, index) => (
              <Button
                key={index}
                variant="outlined"
                className={`sidebar__resultsButton${
                  selected === item ? '--active' : ''
                }`}
                onClick={() =>
                  dispatch({ type: 'set_selection', selected: item })
                }
              >
                <div className="sidebar__resultsButtonLabel">
                  <span className="sidebar__resultsButtonLabelTitle">
                    {item.trackName ? item.trackName : item.collectionName}
                  </span>
                  <span className="sidebar__resultsButtonLabelSubtitle">
                    {item.artistName}
                  </span>
                </div>
              </Button>
            ))}
            <h1>Featured</h1>
            {featureItems.map((item, index) => (
              <Button
                key={index}
                variant="outlined"
                className={`sidebar__resultsButton${
                  selected === item ? '--active' : ''
                }`}
                onClick={() =>
                  dispatch({ type: 'set_selection', selected: item })
                }
              >
                <div className="sidebar__resultsButtonLabel">
                  <span className="sidebar__resultsButtonLabelTitle">
                    {item.trackName ? item.trackName : item.collectionName}
                  </span>
                  <span className="sidebar__resultsButtonLabelSubtitle">
                    {item.artistName}
                  </span>
                </div>
              </Button>
            ))}
          </>
        )}
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
