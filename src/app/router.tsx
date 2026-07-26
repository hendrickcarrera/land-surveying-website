import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../features/home/HomePage';

// Single-page app: one route rendering everything, nav links scroll to
// sections on the page instead of navigating to separate routes.
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);
