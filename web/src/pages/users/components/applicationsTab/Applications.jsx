import React from 'react';
import ApplicationCard from './ApplicationCard';

function Applications({ applicationData }) {
  return (
    <div>
      <ApplicationCard applicationData={applicationData} />
    </div>
  );
}

export default Applications;
