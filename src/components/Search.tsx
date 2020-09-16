import React, { useState, useEffect } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import { IEntity } from 'types';
import axios from 'config/axios';
import { useStateValue } from 'context';

const Search: React.FC<IEntity> = ({ label, type }) => {
  const [{ entity }, dispatch] = useStateValue();
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    setInput('');
  }, [entity]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: 'set_selection', selected: null });
    await axios
      .get(`/search?term=${input}&entity=${type}&limit=35`)
      .then((response) => {
        console.log(response);
        dispatch({ type: 'set_data', data: response.data });

        let genres: any[] = [];
        // eslint-disable-next-line
        response.data.results.map((item: any) => {
          if (item.primaryGenreName) {
            if (!genres.includes(item.primaryGenreName)) {
              genres = [...genres, item.primaryGenreName];
            }
          } else if (item.genres) {
            // eslint-disable-next-line
            item.genres.map((g: string) => {
              if (!genres.includes(g)) {
                genres = [...genres, g];
              }
            });
          }
        });
        dispatch({ type: 'set_genres', genres: genres });
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
