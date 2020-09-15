import React, { useState, useEffect } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import { Entity } from 'types';
import axios from 'config/axios';
import { useStateValue } from 'context';

const Search: React.FC<Entity> = ({ label, type }) => {
  const [{ entity }, dispatch] = useStateValue();
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    setInput('');
  }, [entity]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: 'set_selection', selected: null });
    await axios
      .get(`/search?term=${input}&country=us&entity=${type}&limit=35`)
      .then((response) => {
        console.log(response);
        dispatch({ type: 'set_data', data: response.data });
      });
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={`Search ${label}`}
        />
        <SearchIcon />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Search;
