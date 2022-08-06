const whatFilter = [
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

const whereFilter = [
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

const datePostedFilter = [
  { title: 'Last 24 hours' },
  { title: 'Last 3 days' },
  { title: 'Last 7 days' },
  { title: 'Last 14 days' },
  { title: 'Any date' },
];

const jobTypeFilter = [
  { title: 'Full Time' },
  { title: 'Internship' },
  { title: 'Contract' },
];

const jobConditionFilter = [
  { title: 'On-Site' },
  { title: 'Remote' },
  { title: 'Hybrid' },
];

const industryFilter = [
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

const inputs = [
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

module.exports = {
  whatFilter,
  whereFilter,
  datePostedFilter,
  jobTypeFilter,
  industryFilter,
  jobConditionFilter,
  inputs,
};
