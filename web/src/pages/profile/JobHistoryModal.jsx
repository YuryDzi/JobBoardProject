/* eslint-disable no-unused-vars */
/* eslint-disable object-shorthand */
/* eslint-disable no-nested-ternary */
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import putUser from '../../api/user/putUser';
import postUser from '../../api/user/postUser';
import getUser from '../../api/user/getUser';
import { userDets } from '../../app/actions';

function JobHistoryModal() {
  // const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  //   const [userHistory, setUserHistory] = useState({});

  const [isOpen, setIsOpen] = useState(false);
  const [showMe, setShowMe] = useState(true);
  const [showData, setShowData] = useState(true);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const [flag, setFlag] = useState(false);
  const [employerName, setEmployerName] = useState('');
  const [position, setPosition] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setTimePerioudStart] = useState('');
  const [endDate, setTimePerioudEnd] = useState('');
  const [description, setDescription] = useState('');
  const contactInfo = () => {
    setShowMe(!showMe);
    return <div>here</div>;
  };
  const historyInfo = () => {
    setShowData(!showData);
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

  const getUserHistory = async () => {
    const userHistory = await getUser(user.user.id);
    console.log(userHistory);
    if (!userHistory) {
      console.log('no user details');
      setFlag(true);
    } else {
      console.log('worked, user details');
      setEmployerName(userHistory.data.employerNames);
      setDescription(userHistory.data.descriptions);
      setPosition(userHistory.data.positions);
      setLocation(userHistory.data.locations);
      setTimePerioudStart(userHistory.data.start);
      setTimePerioudEnd(userHistory.data.end);
    }
  };

  const putUserHistory = async () => {
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
    if (flag) {
      const body = {
        id: user.user.id,
        employerNames,
        locations,
        positions,
        start,
        end,
        descriptions,
      };
      console.log(body);
      dispatch(
        userDets({
          employerNames,
          locations,
          positions,
          start,
          end,
          descriptions,
        }),
      );
      const response = await postUser(body);
      getUserHistory();
    } else {
      console.log('in else');
      const body = {
        employerNames,
        locations,
        positions,
        start,
        end,
        descriptions,
      };
      console.log(body);
      dispatch(
        userDets({
          employerNames,
          locations,
          positions,
          start,
          end,
          descriptions,
        }),
      );
      const updateResponseHistory = await putUser(body, user.user.id);
      console.log(updateResponseHistory);
      getUserHistory();
    }
  };

  useEffect(() => {
    getUserHistory();
  }, []);

  return (
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
        <div>Work History</div>
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
              Start
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
            value={startDate}
            onChange={(event) => setTimePerioudStart(event.target.value)}
          />
          <div>End</div>
          <TextField
            sx={{ width: '95%', height: '50%', fontSize: '0.9em' }}
            required
            value={endDate}
            onChange={(event) => setTimePerioudEnd(event.target.value)}
          />
          <p
            style={{
              fontWeight: 'bold',
              color: '#666',
              fontSize: '0.9em',
            }}
          >
            Description
            <span style={{ color: '#db183f' }}>*</span>
          </p>
          <TextField
            sx={{ width: '95%', height: '50%', fontSize: '0.9em' }}
            required
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <div>
            <button type="button">+ add another</button>
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
              historyInfo();
              putUserHistory();
            }}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default JobHistoryModal;
