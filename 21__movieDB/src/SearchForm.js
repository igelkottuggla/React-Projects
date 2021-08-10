import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
    const { query, setQuery, error } = useGlobalContext();
    return (
        <form
            className='search-form'
            onSubmit={(event) => event.preventDefault()}
        >
            <h2>Search movies</h2>
            <input
                type='text'
                className='form-input'
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            {error.show && <div className='error'>{error.msg}</div>}
        </form>
    );
};

export default SearchForm;
