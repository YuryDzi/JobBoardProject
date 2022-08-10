/* eslint-disable */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import getUser from '../../api/user/getUser';
import postUser from '../../api/user/postUser';
import '../employee/css/Employeedetails.css';

function Jobapplication() {
  const user = useSelector((state) => state.user);

  const [toPostFlag, setToPostFlag] = useState(false);

  useEffect(() => {
    getUser(user.user.id).then((response) => {
      if(response){
        response.data.emails[0];
        response.data.name;
        response.data.city;
        response.data.zip;
        response.data.location;
        response.data.website;
        response.data.skills;
        response.data.contactNo;
        response.data.state;
        response.data.country;
        response.data.employerNames;
        response.data.locations;
        response.data.positions;
        response.data.start;
        response.data.end;
        response.data.descriptions;
      }else {
        setToPostFlag(true);
      }
    });
  }, []);

  const pushApplication = (e) => {
    const emails = [];
    emails.push(email);
    const employerNames = [];
    employerNames.push(employerName);
    const locations = [];
    locations.push(location);
    const positions = [];
    positions.push(position);
    const start = [];
    start.push(startDate);
    const end = [];
    end.push(endDate);
    const descriptions = [];
    descriptions.push(description);
    e.preventDefault();
    if(toPostFlag){
      const payload = { 
        id: user.user.id,
        name: firstName.concat(' ', lastName),
        contactNo: mobile,
        city: city,
        zip: zipcode,
        website: website,
        skills,
        emails,
        employerNames,
        locations,
        positions,
        start,
        end,
        descriptions,
      };
      console.log(payload);
      postUser(payload).then((response) => {
        if(!response) {
          toast.error('Cannot add user details');
          return;
        }
      });
    }
  };
  return (
    <div>Success!!!</div>
  );
}

export default Jobapplication;
