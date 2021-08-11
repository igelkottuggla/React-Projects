import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
    const { query, handleSearch } = useGlobalContext();

    return (
        <form
            className='search-form'
            onSubmit={(event) => event.preventDefault()}
        >
            <h2>Search hacker news</h2>
            <input
                type='text'
                className='form-input'
                value={query}
                onChange={(event) => handleSearch(event.target.value)}
            />
        </form>
    );
};

export default SearchForm;
