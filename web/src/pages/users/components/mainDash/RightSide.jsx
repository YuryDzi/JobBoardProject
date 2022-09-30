import React from 'react';
import { useSelector } from 'react-redux';
// import CustomerReview from './CustomerReview';
import Updates from './Updates';
import '../../css/RightSide.css';

/* eslint-disable */
const RightSide = () => {
  const selected = useSelector((state) => state.user.dashboard);
  return (
    <div className='RightSide'>
      <div>
      {selected === 0  && <h3>Updates</h3>}
      {selected === 0  && <Updates />}
      </div>
    </div>
  );
};

export default RightSide;
