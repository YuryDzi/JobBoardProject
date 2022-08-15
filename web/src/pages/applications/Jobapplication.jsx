/* eslint-disable */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import getUser from '../../api/user/getUser';
import postApplication from '../../api/application/postApplication';
import '../employee/css/Employeedetails.css';

function Jobapplication({ compId, _id }) {
  const user = useSelector((state) => state.user);
  // const [toPostFlag, settoPostFlag] = useState(false);
//   const [userData, setUserData] = useState({
//     emails: '',
//     name: '',
//     city: '',
//     zip: '',
//     website: '',
//     location: '',
//     contactNo: '',
//     state: '',
//     country: '',
//     skills: '',
//     employerNames: '',
//     locations: '',
//     positions: '',
//     start: '',
//     end: '',
//     descriptions: '',
//   });

//  const getUserData = async () => {
//   await getUser(user.user.id).then((response) => {
//     if (response) {
//       setUserData({
//         emails: response.data.emails[0],
//         descriptions: response.data.descriptions,
//         name: response.data.name,
//         city: response.data.city,
//         zip: response.data.zip,
//         location: response.data.location,
//         website: response.data.website,
//         skills: response.data.skills,
//         contactNo: response.data.contactNo,
//         state: response.data.state,
//         country: response.data.country,
//         employerNames: response.data.employerNames,
//         locations: response.data.locations,
//         positions: response.data.positions,
//         start: response.data.start,
//         end: response.data.end,
//         descriptions: response.data.descriptions,
//       })
//   }
//   else {
//     console.log('can not get user data')
//   }
//   })
//  }

  // console.log(userData);

  useEffect(() => {
    const comanyId = {
      compId,
      id: _id,
    };
  }, []);

  

  const sendAppllication = async (payload) => {
    await getUser(user.user.id).then((response) => {
      if (!response) {
        toast.error('can not get user data');
        console.log('can not get user data');
      }
      else {
        const payload = {
          jobId: _id,
          emails: response.data.emails,
          name: response.data.name,
          city: response.data.city,
          zip: response.data.zip,
          location: response.data.location,
          website:  response.data.website,
          skills: response.data.skills,
          contactNo: response.data.contactNo,
          state: response.data.state,
          country: response.data.country,
          employerNames: response.data.employerNames,
          locations: response.data.locations,
          positions:  response.data.positions,
          start: response.data.start,
          end: response.data.end,
          descriptions: response.data.descriptions,
        }; 
      }
    })
    await postApplication(payload, user.user.id).then((response) => {
      if (!response) {
        console.log('can not post userData');
        return;
      }
      if (response.status === 201) {
        toast.success('Application Submitted');
      }
    });
  }; 

  // useEffect(() => {
  //   getUserData()
  //  }, []);

  useEffect(() => {
    sendAppllication()
  }, []);
  

  return <div>Success!!!</div>;
}

export default Jobapplication;
