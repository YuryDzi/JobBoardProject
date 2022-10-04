import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../css/Table.css';
import { makeStyle } from '../../../../utils/staticData';

function basicTable(props) {
  /* eslint-disable */
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    setApplications(props.applicationData);
  }, [])

  return (
    <div className='Table'>
      <h3>Recent Applications</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: '0px 13px 20px 0px #80808029' }}
      >
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Position</TableCell>
              <TableCell align='left'>Company</TableCell>
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
                {application.job.title}
                </TableCell>
                <TableCell align='left'>{application.job.company.name}</TableCell>
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
    </div>
  );
}

export default basicTable;
