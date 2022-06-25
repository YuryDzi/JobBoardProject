import React from 'react';
import '../css/SideBar.css';
import { UilSignOutAlt } from '@iconscout/react-unicons';
import Logo from '../../../assets/img/companyLogo.jpg';
import { SidebarData } from '../Data/Data';

function SideBar() {
  return (
    <div className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>Company Name</span>
      </div>
      {/* menu */}
      <div className="menu">
        {SidebarData.map((item) => (
          <div className="menuItem">
            <item.icon />
            <span>{item.heading}</span>
          </div>
        ))}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
