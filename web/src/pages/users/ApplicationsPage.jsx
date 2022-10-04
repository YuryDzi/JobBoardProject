import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import getUserApplications from '../../api/application/getUserApplications';
// import ApplicationCard from './ApplicationCard';
import './css/ApplicationsPage.css';
import SideBar from './components/mainDash/SideBar';
import MainDash from './components/mainDash/MainDash';
import RightSide from './components/mainDash/RightSide';

function ApplicationsPage() {
  const users = useSelector((state) => state.user.user.id);
  const [userData, setUserData] = useState([]);

  const getUserApp = async () => {
    await getUserApplications(users).then((res) => {
      setUserData(res.data.nodes);
    });
  };

  /* eslint-disable */


  useEffect(() => {
    getUserApp()
  }, []);
  return (
    <div className="App-Page">
      <div className="AppGlass">
        <SideBar />
        <MainDash data={userData}/>
        <RightSide />
      </div>
    </div>
  );
}

export default ApplicationsPage;
