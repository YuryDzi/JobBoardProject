/* eslint-disable */
// Analytics Cards imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  // UilSignOutAlt,
} from "@iconscout/react-unicons";
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

export const whatFilter = [
  { title: 'work from home' },
  { title: 'part time' },
  { title: 'hiring immediately' },
  { title: 'remote' },
  { title: 'full time' },
  { title: 'remote work from home' },
  { title: 'warehouse' },
  { title: 'amazon' },
  { title: 'receptionist' },
  { title: 'walmart' },
];

export const whereFilter = [
  { title: 'San Jose, CA' },
  { title: 'San Francisco, CA' },
  { title: 'Sunnyvale, CA' },
  { title: 'Santa Clara, CA' },
  { title: 'Sacramento, CA' },
  { title: 'Fremont, CA' },
  { title: 'Los Angeles, CA' },
  { title: 'Oakland, CA' },
  { title: 'Las Vegas, NV' },
  { title: 'Reno, NV' },
  { title: 'Any location' },
];

export const datePostedFilter = [
  { title: 'Last 24 hours' },
  { title: 'Last 3 days' },
  { title: 'Last 7 days' },
  { title: 'Last 14 days' },
  { title: 'Any date' },
];

export const jobTypeFilter = [
  { title: 'Full Time' },
  { title: 'Internship' },
  { title: 'Contract' },
];

export const jobConditionFilter = [
  { title: 'On-Site' },
  { title: 'Remote' },
  { title: 'Hybrid' },
];

export const industryFilter = [
  { title: 'Business Operations & Management' },
  { title: 'Construction' },
  { title: 'Education' },
  { title: 'Finance & Accounting' },
  { title: 'Food & Beverage' },
  { title: 'Healthcare' },
  { title: 'Manufacturing & Utilities' },
  { title: 'Marketing, Advertising & Public Relations' },
  { title: 'Sales & Retail' },
  { title: 'Technology' },
  { title: 'Transportation' },
];

export const inputs = [
  {
    id: 1,
    name: 'username',
    type: 'text',
    placeholder: 'Username',
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special character!",
    label: 'Username',
    pattern: '^[A-Za-z0-9]{3,16}$',
    required: true,
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    errorMessage: 'It should be a valid email address!',
    label: 'Email',
    required: true,
  },
  {
    id: 3,
    name: 'birthday',
    type: 'date',
    placeholder: 'Birthday',
    label: 'Birthday',
  },
  {
    id: 4,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    errorMessage:
      'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
    label: 'Password',
    pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
    required: true,
  },
  {
    id: 5,
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
    errorMessage: "Passwords don't match!",
    label: 'Confirm Password',
    // pattern: values.password,
    required: true,
  },
];


// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Applications",
  },
  {
    icon: UilUsersAlt,
    heading: "Messages",
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

export const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}


// Analytics Cards Data
export const cardsData = [
  {
    title: "Total Applications",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "# of Applications",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Rejected",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Rejected",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Interview",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Interview",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

export const UpdatesData = [
  {
    // img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    // img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    // img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];


// module.exports = {
//   whatFilter,
//   whereFilter,
//   datePostedFilter,
//   jobTypeFilter,
//   industryFilter,
//   jobConditionFilter,
//   inputs,
// };
