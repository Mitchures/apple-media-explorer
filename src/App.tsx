import React, { useEffect, useState } from 'react';
import './App.css';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Subheader from 'components/Subheader';
import Media from 'components/Media';
import MediaDetails from 'components/MediaDetails';
import Favorites from 'components/Favorites';
import { useStateValue } from 'context';

const App: React.FC = () => {
  const [{ selected, data }] = useStateValue();
  const [bgColorLoaded, setBgColorLoaded] = useState(false);
  const [bgBlackLoaded, setBgBlackLoaded] = useState(false);

  useEffect(() => {
    if (selected) {
      setBgColorLoaded(false);
      setBgBlackLoaded(false);
    }
  }, [selected]);

  return (
    <div className="app">
      <Header />
      <Subheader />
      <div className="app__body">
        <Sidebar />
        {!selected && !data && <Favorites />}
        {!selected && data && <Media />}
        {selected && <MediaDetails />}
      </div>
      {selected && (
        <div
          className={`app__bg${
            bgColorLoaded && bgBlackLoaded ? '--loaded' : ''
          }`}
        >
          <img
            className={`app__bgColor${bgColorLoaded ? '--loaded' : ''}`}
            onLoad={() => setBgColorLoaded(true)}
            alt={selected?.trackName}
            src={selected?.artworkUrl100}
          />
          <img
            className={`app__bgBlack${bgBlackLoaded ? '--loaded' : ''}`}
            onLoad={() => setBgBlackLoaded(true)}
            alt={selected?.trackName}
            src={selected?.artworkUrl100}
          />
        </div>
      )}
    </div>
  );
};

export default App;
