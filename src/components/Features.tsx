import React, { useEffect, useState } from 'react';
import './Features.css';
import { useStateValue } from 'context';
import { favorites } from 'config';
import axios from 'config/axios';

const Favorites: React.FC = () => {
  const [{ entity }, dispatch] = useStateValue();
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
    <div className="features">
      <div className="features__header">
        <h1>Top Picks</h1>
      </div>
      <div className="features__body">
        {favoriteItems.map((item, index) => (
          <div
            className="features__item"
            key={index}
            onClick={() => dispatch({ type: 'set_selection', selected: item })}
          >
            <img
              width="350"
              src={item.artworkUrl100?.replace('100x100', '480x480')}
              alt={item.trackName}
            />
            <span className="features__itemLabel">
              <span className="features__itemLabelTitle">
                {item.trackName ? item.trackName : item.collectionName}
              </span>
              <span className="features__itemLabelSubtitle">
                {item.artistName}
              </span>
            </span>
          </div>
        ))}
      </div>
      <div className="features__header">
        <h1>Featured</h1>
      </div>
      <div className="features__body">
        {featureItems.map((item, index) => (
          <div
            className="features__item"
            key={index}
            onClick={() => dispatch({ type: 'set_selection', selected: item })}
          >
            <img
              width="200"
              src={item.artworkUrl100?.replace('100x100', '300x300')}
              alt={item.trackName}
            />
            <span className="features__itemLabel">
              <span className="features__itemLabelTitle">
                {item.trackName ? item.trackName : item.collectionName}
              </span>
              <span className="features__itemLabelSubtitle">
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
