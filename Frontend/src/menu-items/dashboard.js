// assets
import { CalendarOutlined } from '@ant-design/icons';

// icons
const icons = {
  CalendarOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  // title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Vacations',
      type: 'item',
      url: '/allVacations',
      icon: icons.CalendarOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
