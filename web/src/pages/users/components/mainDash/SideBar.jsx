import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../css/SideBar.css';
import { UilSignOutAlt } from '@iconscout/react-unicons';
import Logo from '../../../../assets/img/companyLogo.jpg';
import { SidebarData } from '../../Data/Data';
import { setDashboard } from '../../../../app/actions';

function SideBar() {
  const selected = useSelector((state) => state.user.dashboard);
  const dispatch = useDispatch();

  return (
    <div className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>Company Name</span>
      </div>
      {/* menu */}
      <div className="menu">
        {SidebarData.map((item, index) => (
          /* eslint-disable */
          <div
            role='menu'
            className={selected === index ? 'menuItem active' : 'menuItem'}
            key={index}
            onClick={() => dispatch(setDashboard(index))}
            onKeyDown={() => dispatch(setDashboard(index))}
          >
            <item.icon />
            <span>{item.heading}</span>
          </div>
        ))}
        <div className='menuItem'>
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
