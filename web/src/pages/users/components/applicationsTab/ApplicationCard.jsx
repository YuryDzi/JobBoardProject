import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../css/Table.css';
import getUserApplications from '../../../../api/application/getUserApplications';
import { makeStyle } from '../../Data/Data';

const ApplicationCard = () => {
  const users = useSelector((state) => state.user.user.id);
  const [applications, setApplications] = useState([]);

  // fetching the data (user's applications)
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
        ? applications.slice(0, 1).map((application) => (
            <TableContainer
              component={Paper}
              style={{ boxShadow: '0px 13px 20px 0px #80808029' }}
            >
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {application.job.summary}
                  </TableCell>
                  <TableCell align='left'>
                    {application.job.company.name}
                  </TableCell>
                  <TableCell align='left'>
                    {new Date(application.date).toUTCString().slice(4, 16)}
                  </TableCell>
                  <TableCell align='left'>
                    <span
                      className='status'
                      style={makeStyle(application.status)}
                    >
                      {application.status}
                    </span>
                  </TableCell>
                </TableRow>
              </Table>
            </TableContainer>
          ))
        : null}
    </div>
  );
};

export default ApplicationCard;
