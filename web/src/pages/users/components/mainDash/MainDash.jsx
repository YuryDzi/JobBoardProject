import React from 'react';
import Cards from './Cards';
import Table from './Table';
import '../../css/MainDash.css';
/* eslint-disable */
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
