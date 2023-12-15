// assets
import { LogoutOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LogoutOutlined,
  ProfileOutlined
};

const handleLogout = () => {
  // Remove user information from local storage
  localStorage.removeItem('user');
  // Add any additional logout logic you may need, such as redirecting to the login page
  // For example, you can use the 'navigate' function from 'react-router-dom'
  // navigate('/login'); // Uncomment this line if you are using react-router-dom
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Authentication',
  type: 'group',
  children: [
    {
      id: 'register1',
      title: 'Register',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: true
    },
    {
      id: 'logout1',
      title: 'Logout',
      type: 'item',
      url: '/login',
      icon: icons.LogoutOutlined,
      target: true,
      onClick: handleLogout() // Add this line to call handleLogout when the item is clicked
    }
  ]
};

export default pages;
