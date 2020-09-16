import React, { useEffect, useState } from 'react';
import './Favorites.css';
import { useStateValue } from 'context';
import { favorites, features } from 'config';

// TODO: get live data for featured

const Favorites: React.FC = () => {
  const [{ entity }, dispatch] = useStateValue();
  const [favoriteItems, setFavoriteItems] = useState<any[]>(
    favorites[entity.type],
  );
  const [featureItems, setFeatureItems] = useState<any[]>(
    features[entity.type],
  );

  useEffect(() => {
    setFavoriteItems(favorites[entity.type]);
    setFeatureItems(features[entity.type]);
  }, [entity]);

  return (
    <div className="favorites">
      <div className="favorites__header">
        <h1>Our Top Picks</h1>
      </div>
      <div className="favorites__body">
        {favoriteItems.map((item, index) => (
          <div
            className="favorites__item"
            key={index}
            onClick={() => dispatch({ type: 'set_selection', selected: item })}
          >
            <img
              width="350"
              src={item.artworkUrl100?.replace('100x100', '480x480')}
              alt={item.trackName}
            />
            <span className="favorites__itemLabel">
              <span className="favorites__itemLabelTitle">
                {item.trackName ? item.trackName : item.collectionName}
              </span>
              <span className="favorites__itemLabelSubtitle">
                {item.artistName}
              </span>
            </span>
          </div>
        ))}
      </div>
      <div className="favorites__header">
        <h1>Featured</h1>
      </div>
      <div className="favorites__body">
        {featureItems.map((item, index) => (
          <div
            className="favorites__item"
            key={index}
            onClick={() => dispatch({ type: 'set_selection', selected: item })}
          >
            <img
              width="200"
              src={item.artworkUrl100?.replace('100x100', '300x300')}
              alt={item.trackName}
            />
            <span className="favorites__itemLabel">
              <span className="favorites__itemLabelTitle">
                {item.trackName ? item.trackName : item.collectionName}
              </span>
              <span className="favorites__itemLabelSubtitle">
                {item.artistName}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
