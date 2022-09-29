import { React } from 'react';
// useEffect, useState
// import { useSelector } from 'react-redux';
// import getUserApplications from '../../api/application/getUserApplications';
// import ApplicationCard from './ApplicationCard';
import './css/ApplicationsPage.css';
import SideBar from './components/mainDash/SideBar';
import MainDash from './components/mainDash/MainDash';
import RightSide from './components/mainDash/RightSide';
// import ApplicationCard from './ApplicationCard';

function ApplicationsPage() {
  return (
    <div className="App-Page">
      <div className="AppGlass">
        <SideBar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default ApplicationsPage;
