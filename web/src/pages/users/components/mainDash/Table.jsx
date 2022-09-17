import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../css/Table.css';
import getUserApplications from '../../../../api/application/getUserApplications';

function basicTable() {
  const users = useSelector((state) => state.user.user.id);

  const [applications, setApplications] = useState([]);

  const getUserApp = async () => {
    await getUserApplications(users).then((res) => {
      setApplications(res.data.nodes);
    });
  };

  // function createData(name, trackingId, date, status) {
  //   return {
  //     name,
  //     trackingId,
  //     date,
  //     status,
  //   };
  // }
  // const rows = [
  //   createData('Lasania Chiken Fri', 18908424, '2 March 2022', 'Approved'),
  //   createData('Big Baza Bang ', 18908424, '2 March 2022', 'Pending'),
  //   createData('Mouth Freshner', 18908424, '2 March 2022', 'Approved'),
  //   createData('Cupcake', 18908421, '2 March 2022', 'Delivered'),
  // ];
  /* eslint-disable */
  const makeStyle = (status) => {
    if (status === 'Approved') {
      return {
        background: 'rgb(145 254 159 / 47%)',
        color: 'green',
      };
    } else if (status === 'RECEIVED') {
      return {
        background: '#ffadad8f',
        color: 'red',
      };
    } else {
      return {
        background: '#59bfff',
        color: 'white',
      };
    }
  };

  console.log(applications, 'general')

  useEffect(() => {
    getUserApp()
  }, []);

  return (
    <div className='Table'>
      <h3>Recent Orders</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: '0px 13px 20px 0px #80808029' }}
      >
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Position</TableCell>
              <TableCell align='left'>Date</TableCell>
              <TableCell align='left'>Status</TableCell>
              <TableCell align='left' />
            </TableRow>
          </TableHead>
          <TableBody style={{ color: 'white' }}>
          {applications && applications.length > 0 
              ? applications.slice(0, 5).map((application) => 
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                {application.job.summary}
                </TableCell>
                <TableCell align='left'>{new Date(application.date).toUTCString().slice(4, 16)}</TableCell>
                <TableCell align='left'>
                  <span className='status' style={makeStyle(application.status)}>
                  {application.status}
                  </span>
                </TableCell>
                <TableCell align='left' className='Details'>
                  Details
                </TableCell>
              </TableRow>
            ): null}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <div>
            {applications && applications.length
              ? applications.map((application) => <ApplicationCard application={application} />)
              : null}
          </div> */}
    </div>
  );
}

export default basicTable;
