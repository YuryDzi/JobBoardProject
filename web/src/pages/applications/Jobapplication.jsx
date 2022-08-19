/* eslint-disable */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import getUser from '../../api/user/getUser';
import postApplication from '../../api/application/postApplication';
import '../employee/css/Employeedetails.css';

function Jobapplication({ setOpen, _id }) {
  const user = useSelector((state) => state.user);
  // const [toPostFlag, settoPostFlag] = useState(false);
  const [userData, setUserData] = useState({
    emails: '',
    name: '',
    city: '',
    zip: '',
    website: '',
    location: '',
    contactNo: '',
    state: '',
    country: '',
    skills: '',
    employerNames: '',
    locations: '',
    positions: '',
    start: '',
    end: '',
    descriptions: '',
  });

  // useEffect(() => {
  //   const testId = _id
  // }, [])

  const getUserData = async () => {
    await getUser(user.user.id).then((response) => {
      if (!response) {
        toast.error('can not get user data');
        console.log('can not get user data');
      }
      setUserData(response.data);
    })
    }

  const payload = {
    jobId: _id,
    emails: userData.emails,
    name: userData.name,
    city: userData.city,
    zip: userData.zip,
    location: userData.location,
    website:  userData.website,
    skills: userData.skills,
    contactNo: userData.contactNo,
    state: userData.state,
    country: userData.country,
    employerNames: userData.employerNames,
    locations: userData.locations,
    positions:  userData.positions,
    start: userData.start,
    end: userData.end,
    descriptions: userData.descriptions,
  }

  const sendAppllication = (e) => {
    e.preventDefault();
     postApplication(payload, user.user.id).then((response) => {
      if (!response) {
        toast.error('can not post userData');
        console.log('can not post userData');
        return;
      }
      if (response.status === 201) {
        toast.success('Application Submitted');
        setOpen(false);
      }
    });
  }; 

  useEffect(() => {
    getUserData();
  }, []);

  console.log(payload, 'this is userdata');
  

  return <div>Success!!!</div>;
}

export default Jobapplication;
