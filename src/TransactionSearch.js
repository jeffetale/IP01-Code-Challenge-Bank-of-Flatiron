import React from 'react'

const TransactionSearch = ({searchInput, setSearchInput}) => {
    const handleChange = (e) => {
        setSearchInput(e.target.value)
    };

    return (
        <input
        type='text'
        placeholder='Search Transaction Description'
        value={searchInput}
        onChange={handleChange}
        />
    );
};

export default TransactionSearch;