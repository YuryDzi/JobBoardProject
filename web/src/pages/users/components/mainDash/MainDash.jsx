import React from 'react';
import { useSelector } from 'react-redux';
import Cards from './Cards';
import Table from './Table';
import '../../css/MainDash.css';
import Applications from '../applicationsTab/Applications';

/* eslint-disable */
const MainDash = (props) => {
  const selector = useSelector((state) => state.user.dashboard);

  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <div>
        {selector === 0 && <Cards applicationData={props.data} />}
        {selector === 0 && <Table applicationData={props.data} />}
        {selector === 1 && <Applications applicationData={props.data} />}
      </div>
    </div>
  );
};


export default MainDash;
