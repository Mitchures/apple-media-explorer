import React, { useEffect } from 'react';
import './Header.css';
import LogoBlack from 'images/apple-black.svg';
import LogoWhite from 'images/apple-white.svg';
import { Button } from '@material-ui/core';
import { entities } from 'config';
import { useMedia } from 'utils';
import Search from './Search';
import { useStateValue } from 'context';

const Header: React.FC = () => {
  const [{ entity }, dispatch] = useStateValue();

  const darkMode = useMedia(['(prefers-color-scheme: dark)'], [true], false);

  useEffect(() => {
    dispatch({ type: 'set_selection', selected: null });
    dispatch({ type: 'set_data', data: null });
  }, [dispatch, entity]);

  return (
    <div className="header">
      <div className="header__left">
        <img src={darkMode ? LogoWhite : LogoBlack} alt="Apple" />
        <h1>
          Media <span>Explorer</span>
        </h1>
      </div>
      <div className="header__center">
        {entities.map((et, index) => (
          <Button
            key={index}
            className={`header__button${
              et.type === entity.type ? '--active' : ''
            }`}
            variant="outlined"
            onClick={() => dispatch({ type: 'set_entity', entity: et })}
          >
            {et.label}
          </Button>
        ))}
      </div>
      <div className="header__right">
        <Search {...entity} />
      </div>
    </div>
  );
};

export default Header;
