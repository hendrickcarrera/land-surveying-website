import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../features/home/HomePage';
import ServicesPage from '../features/services/ServicesPage';
import ContactPage from '../features/contact/ContactPage';

// Route config as a plain array of objects — the same shape as an Angular
// `Routes` array (`{ path, component }`), except `element` takes JSX
// directly instead of a component class reference.
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // parent route: renders nav + <Outlet /> for all children below
    children: [
      { index: true, element: <HomePage /> }, // `index: true` = matches the parent's exact path ("/")
      { path: 'services', element: <ServicesPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);
