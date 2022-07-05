/* eslint-disable no-unused-vars */
/* eslint-disable object-shorthand */
/* eslint-disable no-nested-ternary */
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
// import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import putUser from '../../api/user/putUser';
import postUser from '../../api/user/postUser';
import getUser from '../../api/user/getUser';
import { userDets } from '../../app/actions';
import PdfSVG from '../../components/svg/PdfSVG';

function JobHistoryModal() {
  // const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [userDetail, setUserDetail] = useState({});

  // const [isOpen, setIsOpen] = useState(false);
  const [showMe, setShowMe] = useState(true);
  // const handleOpen = () => setIsOpen(true);
  // const handleClose = () => setIsOpen(false);

  const [employerName, setEmployerName] = useState('');
  const [position, setPosition] = useState('');
  const [location, setLocation] = useState('');
  const [timePerioud, setTimePerioud] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  const [flag, setFlag] = useState(false);
  const [skills, setSkills] = useState('');
  const contactInfo = () => {
    setShowMe(!showMe);
    return <div>here</div>;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const style = {
    position: 'relative',
    width: 500,
    height: '90%',
    overflowX: 'hidden',
    bgcolor: 'background.paper',
    p: 4,
  };

  // const getUserDetails = async () => {
  //   const userDetails = await getUser(user.user.id);
  //   console.log(userDetails);
  //   if (!userDetails) {
  //     console.log('bruh');
  //     setFlag(true);
  //   } else {
  //     console.log('lol');
  //     setUserDetail(userDetails.data);
  //     setFirstName(userDetails.data.name.split(' ').slice(0, -1).join(' '));
  //     setLastName(userDetails.data.name.split(' ').slice(-1).join(' '));
  //     setmobile(userDetails.data.contactNo);
  //     setCity(userDetails.data.city);
  //     setZipcode(userDetails.data.zip);
  //     setSkills(userDetails.data.skills);
  //   }
  // };

  // const putUserDetails = async () => {
  //   const resumes = [];
  //   resumes.push(resume);
  //   const coverLetters = [];
  //   const emails = [];
  //   emails.push(email);
  //   coverLetters.push(cover);
  //   if (flag) {
  //     const body = {
  //       id: user.user.id,
  //       name: firstName.concat(' ', lastName),
  //       contactNo: mobile,
  //       city: city,
  //       zip: zipcode,
  //       skills: skills,
  //       resumes,
  //       coverLetters,
  //       emails,
  //     };
  //     console.log(body);
  //     dispatch(
  //       userDets({
  //         name: firstName.concat(' ', lastName),
  //         contactNo: mobile,
  //         city: city,
  //         zip: zipcode,
  //         skills: skills,
  //       }),
  //     );
  //     const response = await postUser(body);
  //     getUserDetails();
  //   } else {
  //     console.log('in else');
  //     const body = {
  //       name: firstName.concat(' ', lastName),
  //       contactNo: mobile,
  //       city: city,
  //       zip: zipcode,
  //       skills: skills,
  //       resumes,
  //       coverLetters,
  //       emails,
  //     };
  //     console.log(body);
  //     dispatch(
  //       userDets({
  //         name: firstName.concat(' ', lastName),
  //         contactNo: mobile,
  //         city: city,
  //         zip: zipcode,
  //         skills: skills,
  //       }),
  //     );
  //     const updateResponse = await putUser(body, user.user.id);
  //     console.log(updateResponse);
  //     getUserDetails();
  //   }
  // };

  // useEffect(() => {
  //   getUserDetails();
  // }, []);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={style}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {showMe ? (
            <div
              style={{
                borderColor: 'd4d2d0',
                borderRadius: '8px',
                border: '1px #afafaf solid',
                marginBottom: '1rem',
                marginTop: ' 8px',
                marginLeft: '8px',
                width: '100%',
                boxShadow: '0 5px 1px -5px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flexStart',
                justifyContent: 'flex-start',
              }}
            >
              <div
                style={{
                  marginLeft: ' 20px',
                  marginTop: ' 8px',
                  fontWeight: '700',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div>Experience and Skills</div>
                <EditIcon
                  style={{ marginRight: '10px' }}
                  onClick={contactInfo}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: ' 20px',
                  marginTop: ' 8px',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    marginLeft: '0px',
                    marginTop: ' 12px',
                    fontSize: '0.8rem',
                    fontWeight: '400',
                    lineHeight: '0.8em',
                    color: '#444444',
                  }}
                >
                  {userDetail ? userDetail.EmployerName : ''}
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    style={{
                      marginTop: '18px',
                      fontSize: '0.8rem',
                      fontWeight: '400',
                      lineHeight: '0.8em',
                      color: '#444444',
                    }}
                  >
                    {userDetail
                      ? userDetail.position
                        ? userDetail.position.length > 0
                          ? userDetail.position[0]
                          : ''
                        : ''
                      : ''}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    style={{
                      marginLeft: '0px',
                      marginTop: ' 18px',
                      fontSize: '0.8rem',
                      fontWeight: '400',
                      lineHeight: '0.8em',
                      color: '#444444',
                    }}
                  >
                    {userDetail.location ? userDetail.location : ''}
                  </div>
                </div>

                <div
                  style={{
                    marginLeft: '0px',
                    marginTop: ' 18px',
                    fontSize: '0.8rem',
                    fontWeight: '400',
                    lineHeight: '0.8em',
                    color: '#444444',
                  }}
                >
                  {userDetail.timePerioud ? userDetail.timePerioud : ''}
                </div>

                <div
                  style={{
                    marginLeft: '0px',
                    marginTop: ' 18px',
                    fontSize: '0.8rem',
                    fontWeight: '400',
                    lineHeight: '0.8em',
                    color: '#444444',
                  }}
                >
                  {userDetail.description ? userDetail.description : ''}
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                borderColor: 'd4d2d0',
                borderRadius: '8px',
                border: '1px #afafaf solid',
                marginBottom: '1rem',
                marginTop: ' 8px',
                marginLeft: '8px',
                width: '100%',
                boxShadow: '0 5px 1px -5px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flexStart',
                justifyContent: 'flex-start',
              }}
            >
              <div
                style={{
                  marginLeft: ' 20px',
                  marginTop: ' 8px',
                  fontWeight: '700',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div>Contact Information</div>
                <div
                  style={{
                    marginLeft: '0px',
                    marginTop: ' 12px',
                    fontSize: '1rem',
                    fontWeight: '400',
                    lineHeight: '1em',
                    color: '#444444',
                  }}
                >
                  <span style={{ color: '#db183f' }}>*</span>
                  Required fields
                </div>
              </div>
              <div
                style={{
                  paddingLeft: '20px',
                  paddingTop: '15px',
                  paddingBottom: '25px',
                }}
              >
                <form onSubmit={handleSubmit}>
                  <p
                    style={{
                      fontWeight: 'bold',
                      color: '#666',
                      fontSize: '0.9em',
                    }}
                  >
                    Employer Name
                    <span style={{ color: '#db183f' }}>*</span>
                  </p>
                  <TextField
                    sx={{ width: '95%', height: '50%', fontSize: '0.9em' }}
                    required
                    value={employerName}
                    onChange={(event) => setEmployerName(event.target.value)}
                  />
                  <p
                    style={{
                      fontWeight: 'bold',
                      color: '#666',
                      fontSize: '0.9em',
                    }}
                  >
                    Position
                    <span style={{ color: '#db183f' }}>*</span>
                  </p>
                  <TextField
                    sx={{ width: '95%', height: '50%', fontSize: '0.9em' }}
                    required
                    value={position}
                    onChange={(event) => setPosition(event.target.value)}
                  />
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                      style={{
                        marginLeft: '0px',
                        marginTop: ' 18px',
                        fontWeight: '400',
                      }}
                      // eslint-disable-next-line
                    >  
                    Location
                    </div>
                    <div
                      style={{
                        marginLeft: '0px',
                        marginTop: ' 18px',
                        fontSize: '0.7rem',
                        fontWeight: '400',
                        lineHeight: '0.8em',
                        color: '#444444',
                      }}
                    >
                      only provided to employers you apply or respond to.
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      paddingTop: '10px',
                    }}
                  >
                    <TextField
                      sx={{ width: '95%', height: '50%', fontSize: '0.9em' }}
                      required
                      value={location}
                      onChange={(event) => setLocation(event.target.value)}
                    />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                      style={{
                        marginLeft: '0px',
                        marginTop: ' 18px',
                        fontWeight: '400',
                      }}
                    >
                      Time Period
                    </div>
                    <div
                      style={{
                        marginLeft: '0px',
                        marginTop: ' 18px',
                        fontSize: '0.7rem',
                        fontWeight: '400',
                        lineHeight: '0.8em',
                        color: '#444444',
                      }}
                    >
                      only provided to employers you apply
                    </div>
                  </div>
                  <div
                    style={{
                      marginLeft: '0px',
                      marginTop: ' 5px',
                      marginBottom: '10px',
                      fontSize: '0.7rem',
                      fontWeight: '400',
                      lineHeight: '0.8em',
                      color: '#444444',
                    }}
                  >
                    or respond to.
                  </div>
                  <TextField
                    sx={{ width: '95%', height: '50%', fontSize: '0.9em' }}
                    required
                    value={timePerioud}
                    onChange={(event) => setTimePerioud(event.target.value)}
                  />

                  <div
                    style={{
                      marginLeft: '0px',
                      marginTop: ' 8px',
                      fontSize: '0.9rem',
                      fontWeight: '400',
                      lineHeight: '1.3em',
                      color: '#444444',
                    }}
                  >
                    By submitting the form with this box checked, I consent to
                    receive calls (including live, automated, and recorded
                    calls), texts, and WhatsApp messages from Indeed and
                    employers who use Indeed. This consent includes if this
                    number is a wireless cellular phone number.
                  </div>

                  <div
                    style={{
                      marginTop: ' 12px',
                      fontWeight: '700',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div>Description</div>
                    <div
                      style={{
                        marginTop: ' 12px',
                        fontSize: '0.87rem',
                        fontWeight: '400',
                        lineHeight: '1em',
                        color: '#444444',
                      }}
                    >
                      Providing a specific location helps Indeed connect you
                      with the right job.
                    </div>
                  </div>
                  <p
                    style={{
                      fontWeight: 'bold',
                      color: '#666',
                      fontSize: '0.9em',
                    }}
                  >
                    Description (real)
                    <span style={{ color: '#db183f' }}>*</span>
                  </p>
                  <TextField
                    sx={{ width: '95%', height: '50%', fontSize: '0.9em' }}
                    required
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                  <p
                    style={{
                      fontWeight: 'bold',
                      color: '#666',
                      fontSize: '0.9em',
                    }}
                  >
                    Skills
                  </p>
                  <TextField
                    sx={{ width: '95%', height: '50%', fontSize: '0.9em' }}
                    required
                    value={skills}
                    onChange={(event) => setSkills(event.target.value)}
                  />
                  <p
                    style={{
                      fontWeight: 'bold',
                      color: '#666',
                      fontSize: '0.9em',
                    }}
                  >
                    Website (optional)
                  </p>
                  <TextField
                    sx={{ width: '95%', height: '50%', fontSize: '0.9em' }}
                    required
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                  />
                  <p
                    style={{
                      fontWeight: 'bold',
                      color: '#666',
                      fontSize: '0.9em',
                    }}
                  >
                    CoverLetter
                  </p>
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      style={{ paddingTop: '10px' }}
                      // onChange={uploadCoverLetter}
                    />
                  </div>

                  <button
                    className="reviewSubmitButton"
                    type="submit"
                    style={{
                      marginTop: '25px',
                      borderRadius: '6.25rem',
                      width: '70px',
                      height: '40px',
                      fontWeight: 'bold',
                      fontColor: 'white',
                      backgroundColor: '#085ff7',
                      border: '#085ff7',
                      cursor: 'pointer',
                      paddingLeft: '1.5rem',
                      paddingRight: '1.5rem',
                      textAlign: 'center',
                    }}
                    onClick={() => {
                      contactInfo();
                      // putUserDetails();
                    }}
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </Box>
    </div>
  );
}

export default JobHistoryModal;
