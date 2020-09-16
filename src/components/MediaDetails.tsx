import React, { useState, useEffect } from 'react';
import './MediaDetails.css';
import { IconButton } from '@material-ui/core';
import { Image, OpenInNew } from '@material-ui/icons';
import TextTruncate from 'react-text-truncate';
import { useStateValue } from 'context';

const MediaDetails: React.FC = () => {
  const [{ selected }] = useStateValue();
  const [artworkLoaded, setArtworkLoaded] = useState(false);
  const {
    artworkUrl100,
    trackName,
    trackViewUrl,
    collectionName,
    collectionViewUrl,
    artistName,
    longDescription,
    description,
  } = selected;

  useEffect(() => {
    setArtworkLoaded(false);
  }, [artworkUrl100]);

  const downloadArtwork = () => {
    fetch(artworkUrl100?.replace('100x100', '6000x6000')).then((response) => {
      response.blob().then((blob) => {
        const a = document.createElement('a');
        const url = URL.createObjectURL(blob);
        a.href = url;
        a.download = `${trackName ? trackName : collectionName}.jpg`;
        a.click();
      });
    });
  };

  return (
    <div className="mediaDetails">
      <div className="mediaDetails__container">
        <div className="mediaDetails__left">
          <img
            width="400"
            onLoad={() => setArtworkLoaded(true)}
            className={`mediaDetails__artwork${artworkLoaded && '--loaded'}`}
            src={artworkUrl100?.replace('100x100', '600x600')}
            alt={trackName}
          />
        </div>
        <div className="mediaDetails__right">
          <div className="mediaDetails__rightHeader">
            <h1>{trackName ? trackName : collectionName}</h1>
            <div className="mediaDetails__actions">
              <IconButton onClick={downloadArtwork}>
                <Image />
              </IconButton>
              <IconButton
                href={trackViewUrl ? trackViewUrl : collectionViewUrl}
              >
                <OpenInNew />
              </IconButton>
            </div>
          </div>
          <h3>{artistName}</h3>
          {/<\/?[a-z][\s\S]*>/i.test(description) && !longDescription ? (
            <p
              className="mediaDetails__htmlDescription"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          ) : (
            <TextTruncate
              line={18}
              element="p"
              truncateText="..."
              text={longDescription ? longDescription : description}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaDetails;
