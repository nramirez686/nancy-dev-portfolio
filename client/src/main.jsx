import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import About from './pages/About'; // Import the About component
import Contact from './pages/Contact'; // Import the Contact component
import Portfolio from './pages/Portfolio'; // Import the Portfolio component
import Resume from './pages/Resume'; // Import the Resume component

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About />, 
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
