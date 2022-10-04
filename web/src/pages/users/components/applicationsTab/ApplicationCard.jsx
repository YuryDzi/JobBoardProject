import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../css/Table.css';
import { makeStyle } from '../../../../utils/staticData';

function ApplicationCard(props) {
  /* eslint-disable */
  const [applications, setApplications] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setApplications(props.applicationData);
  }, [])

  console.log('this is applicationspage', applications);

  return (
    <div className="Table">
      <h3>Recent Applications</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Position</TableCell>
              <TableCell align="left">Company</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {applications && applications.length > 0
              ? applications.slice(0, 7).map((application) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {application.job.title}
                    </TableCell>
                    <TableCell align="left">
                      {application.job.company.name}
                    </TableCell>
                    <TableCell align="left">
                      {new Date(application.date).toUTCString().slice(4, 16)}
                    </TableCell>
                    <TableCell align="left">
                      <span
                        className="status"
                        style={makeStyle(application.status)}
                      >
                        {application.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
          {applications ? (
            applications.length > 0 ? (
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  maxWidth: '1400px',
                  justifyContent: 'center',
                  margin: '0 auto',
                  marginTop: '10px',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                }}
              >
                {Array.range(1, totalPages + 1).map((pageNo) => (
                  <p
                    onClick={() => setCurrentPage(pageNo)}
                    style={{
                      cursor: 'pointer',
                      backgroundColor: `${
                        currentPage === pageNo ? '#595959' : '#E4E2E0'
                      }`,
                      padding: '17px',
                      paddingLeft: '20px',
                      paddingRight: '20px',
                      color: `${currentPage === pageNo ? '#fff' : '#000'}`,
                      fontWeight: 'bolder',
                      fontSize: '18px',
                      marginLeft: '20px',
                    }}
                  >
                    {pageNo}
                  </p>
                ))}
              </div>
            ) : null
          ) : null}
        </Table>
      </TableContainer>
    </div>
  );
}

export default ApplicationCard;
