import React, { ReactNode } from 'react';
import './ProgressRing.css';

interface IProps {
  children: ReactNode;
  width: string | number;
  height: string | number;
}

const ProgressRing: React.FC<IProps> = ({ children, width, height }) => {
  return (
    <div
      className="progressRing"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {children}
      <svg className="progressRing__svg" viewBox="0 0 104.2 104.2">
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
            className="progressRing__svgBottomCircle"
            cx="-48.9"
            cy="132.4"
            r="45.5"
            stroke="#efefef"
            paintOrder="markers fill stroke"
          />
          <circle
            className="progressRing__svgTopCircle"
            cx="-48.9"
            cy="132.4"
            r="45.5"
            stroke="url(#b)"
            paintOrder="markers fill stroke"
          />
        </g>
      </svg>
    </div>
  );
};

export default ProgressRing;
