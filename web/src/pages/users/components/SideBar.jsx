import { React, useState } from 'react';
import '../css/SideBar.css';
import { UilSignOutAlt } from '@iconscout/react-unicons';
import Logo from '../../../assets/img/companyLogo.jpg';
import { SidebarData } from '../Data/Data';

function SideBar() {
  const [selected, setSelected] = useState(0);

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
            role="menu"
            className={selected === index ? 'menuItem active' : 'menuItem'}
            key={index}
            onClick={() => setSelected(index)}
            onKeyDown={() => setSelected(index)}
          >
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
