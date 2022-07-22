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
      }else {
        err.response;
      }
      console.log(response)
    });
  }, []);

  // const questions = (e) => {
  //   const emails = [];
  //   emails.push(email);
  //   e.preventDefault();
  //   if(toPostFlag){
  //     const payload = { 
  //       id: user.user.id,
  //       emails,
  //       name,
  //       city,
  //       contactNo: phoneNumber,
  //     };
  //     console.log(payload);
  //     postUser(payload).then((response) => {
  //       if(!response) {
  //         toast.error('Cannot add user details');
  //         return;
  //       }
  //     });
  //   }
  //   setGotoNextFlag(true);
  // };
  return (
    <div>Success!!!</div>
  );
}

export default Jobapplication;
