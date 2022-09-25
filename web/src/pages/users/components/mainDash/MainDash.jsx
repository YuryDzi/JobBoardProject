import React from 'react';
import { useSelector } from 'react-redux';
import Cards from './Cards';
import Table from './Table';
import '../../css/MainDash.css';
// import Applications from '../applicationsTab/Applications';

/* eslint-disable */
const MainDash = () => {
  const selector = useSelector((state) => state.user.dashboard);

  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <div>
      <Cards /> 
      <Table />
      </div>
    </div>
  );
};


export default MainDash;
