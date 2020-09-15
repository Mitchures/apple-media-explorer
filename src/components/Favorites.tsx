import React from 'react';
import './Favorites.css';
import { Star } from '@material-ui/icons';

const Favorites: React.FC = () => {
  return (
    <div className="favorites">
      <h1>Favorites</h1>
      <div className="progress__ring">
        <h1>5.0</h1>
        <svg className="chart" viewBox="0 0 104.2 104.2">
          <defs>
            <linearGradient id="a">
              <stop offset="0" stopColor="#f45c6e" />
              <stop offset="1" stopColor="#9e88e7" />
            </linearGradient>
            <linearGradient
              id="b"
              x1="-47.1"
              x2="-47.1"
              y1="63.4"
              y2="183.5"
              xlinkHref="#a"
              gradientUnits="userSpaceOnUse"
            />
          </defs>
          <g
            fill="none"
            strokeWidth="13.2"
            strokeDashoffset="16.4"
            transform="translate(101.07 -80.306) "
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle
              className="gray"
              cx="-48.9"
              cy="132.4"
              r="45.5"
              stroke="#efefef"
              paintOrder="markers fill stroke"
            />
            <circle
              className="foo2"
              cx="-48.9"
              cy="132.4"
              r="45.5"
              stroke="url(#b)"
              paintOrder="markers fill stroke"
            />
          </g>
        </svg>
      </div>
      <div className="progress__ring">
        <Star />
        <svg className="chart" viewBox="0 0 104.2 104.2">
          <defs>
            <linearGradient id="a">
              <stop offset="0" stopColor="#f45c6e" />
              <stop offset="1" stopColor="#9e88e7" />
            </linearGradient>
            <linearGradient
              id="b"
              x1="-47.1"
              x2="-47.1"
              y1="63.4"
              y2="183.5"
              xlinkHref="#a"
              gradientUnits="userSpaceOnUse"
            />
          </defs>
          <g
            fill="none"
            strokeWidth="13.2"
            strokeDashoffset="16.4"
            transform="translate(101.07 -80.306) "
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle
              className="gray"
              cx="-48.9"
              cy="132.4"
              r="45.5"
              stroke="#efefef"
              paintOrder="markers fill stroke"
            />
            <circle
              className="foo"
              cx="-48.9"
              cy="132.4"
              r="45.5"
              stroke="url(#b)"
              paintOrder="markers fill stroke"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Favorites;
