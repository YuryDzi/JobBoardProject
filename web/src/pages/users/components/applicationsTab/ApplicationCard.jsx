import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import '../../css/Table.css';
import getUserApplications from '../../../../api/application/getUserApplications';
import { makeStyle } from '../../Data/Data';

const ApplicationCard = () => {
  const users = useSelector((state) => state.user.user.id);
  const [applications, setApplications] = useState([]);

  const getUserApp = async () => {
    await getUserApplications(users).then((res) => {
      setApplications(res.data.nodes);
    });
  };

  useEffect(() => {
    getUserApp();
  }, []);
/* eslint-disable */
  return (
    <div>
      {applications && applications.length > 0
        ? applications.map((application) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {application.job.summary}
              </TableCell>
              <TableCell align='left'>{application.job.company.name}</TableCell>
              <TableCell align='left'>
                {new Date(application.date).toUTCString().slice(4, 16)}
              </TableCell>
              <TableCell align='left'>
                <span className='status' style={makeStyle(application.status)}>
                  {application.status}
                </span>
                {/* <span>{diffDays}</span> */}
              </TableCell>
              <TableCell align='left' className='Details'>
                Details
              </TableCell>
            </TableRow>
          ))
        : null}
    </div>
  );
};

export default ApplicationCard;
