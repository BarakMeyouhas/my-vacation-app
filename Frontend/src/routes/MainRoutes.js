import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const AllVacations = Loadable(lazy(() => import('pages/dashboard')));
const AdminAllVacations = Loadable(lazy(() => import('pages/dashboard/indexAdmin')));
const VacationDetails = Loadable(lazy(() => import('pages/dashboard/VacationDetails')));
const EditVacation = Loadable(lazy(() => import('pages/dashboard/EditVacation')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/About')));

// render - utilities
// const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
// const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
// const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/allVacations',
      element: <AllVacations />,
      children: [
        {
          path: '/allVacations/vacationDetails',
          element: <VacationDetails />
        },
        {
          path: '/allVacations/EditVacation',
          element: <EditVacation />
        }
      ]
    },
    {
      path: '/vacationDetails',
      element: <VacationDetails />
    },
    {
      path: '/EditVacation',
      element: <EditVacation />
    },
    {
      path: '/adminAllVacations',
      element: <AdminAllVacations />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      element: <AdminAllVacations />
    },
    {
      path: 'About',
      element: <SamplePage />
    }
    // {
    //   path: 'shadow',
    //   element: <Shadow />
    // },
    // {
    //   path: 'typography',
    //   element: <Typography />
    // },
    // {
    //   path: 'icons/ant',
    //   element: <AntIcons />
    // }
  ]
};

export default MainRoutes;
