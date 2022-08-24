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

  const sendApplication = async () => {
    await getUser(user.user.id).then((response) => {
      if (!response) {
        toast.error('can not GET user data');
        console.log('can not GET user data');
        return;
      }
      if (response) {
        const payload = {
          jobId: _id,
          emails: response.data.emails,
          name: response.data.name,
          city: response.data.city,
          zip: response.data.zip,
          location: response.data.location,
          website: response.data.website,
          skills: response.data.skills,
          contactNo: response.data.contactNo,
          state: response.data.state,
          country: response.data.country,
          employerNames: response.data.employerNames,
          locations: response.data.locations,
          positions: response.data.positions,
          start: response.data.start,
          end: response.data.end,
          descriptions: response.data.descriptions,
        };
        postApplication(payload, user.user.id).then((res) => {
          if (!res) {
            toast.error('can not POST user data');
            return;
          }
          if (res) {
            toast.success('Application Submitted');
            return;
          }
        });
      }
    });
    return;
  };

  useEffect(() => {
    sendApplication();
  }, []);

  // TODO: add various ways for display designwise and functionality (add pop up message if the user not registered)
  return <div>Success!!!</div>;
}

export default Jobapplication;
