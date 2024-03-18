import React, { useState } from 'react';

export const Filters = ({ showModal }) => {
  const [filterValue, setFilterValue] = useState('');
  const [sortValue, setSortValue] = useState('');

  const handeleFilterChange = e => {
    setFilterValue(e.target.value);
  };
  const handleSortChage = e => {
    setSortValue(e.target.value);
  };

  return (
    <>
      <div
        style={{
          width: '760px',
          margin: '50px auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <div className="form-group" style={{ marginRight: '10px' }}>
          <label htmlFor="searchInput"></label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="searchInput"
              placeholder="Найти"
            />
            <button type="button">Button</button>
          </div>
        </div>
        <div className="form-group">
          <select
            className="form-control"
            name="filter"
            value={filterValue}
            onChange={handeleFilterChange}
          >
            <option value="filter1">фільтер 1</option>
            <option value="filter2">фільтер 2</option>
          </select>
        </div>
        <div className="form-group">
          <select
            className="form-control"
            name="sort"
            value={sortValue}
            onChange={handleSortChage}
          >
            <option value="sort1">Сортування 1</option>
            <option value="sort2">Сортування 2</option>
          </select>
        </div>
        <div className="input-group-append">
          <button className="btn btn-success" onClick={showModal}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};
