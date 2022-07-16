import { React } from 'react';
// useEffect, useState
// import { useSelector } from 'react-redux';
// import getUserApplications from '../../api/application/getUserApplications';
// import ApplicationCard from './ApplicationCard';
import './css/ApplicationsPage.css';
import SideBar from './components/mainDash/SideBar';
import MainDash from './components/mainDash/MainDash';
import RightSide from './components/mainDash/RightSide';

function ApplicationsPage() {
  // const [applications, setApplications] = useState([]);

  // const user = useSelector((state) => state.user.user.id);

  // useEffect(() => {
  //   getUserApplications(user).then((res) => {
  //     setApplications(res.data.nodes);
  //   });
  // }, []);

  return (
    <div className="App-Page">
      <div className="AppGlass">
        <SideBar />
        <MainDash />
        <RightSide />
        {/* <div>
          {applications && applications.length
            ? applications.map((application) => <ApplicationCard application={application} />)
            : null}
        </div> */}
      </div>
    </div>
  );
}

export default ApplicationsPage;
