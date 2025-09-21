import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    RouterProvider,
    createBrowserRouter,
    redirect,
} from 'react-router-dom';
import App from './app/App';
import ErrorPage from './Pages/ErrorPage';
import Setup from './Pages/Setup';
import Stakes from './Pages/Stakes';
import Covers from './Pages/Covers';
import Lights from './Pages/Lights';
import Menu from './Pages/Menu';
import Food from './Pages/Food';
import Energy from './Pages/Energy';
import Weather from './Pages/Weather';
import Map from './Pages/Map';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, // This handles the '/' route
                loader: () => redirect('/menu'),
            },
            {
                path: '/menu',
                element: <Menu />,
            },
            {
                path: '/setup',
                element: <Setup />,
            },
            {
                path: '/stakes',
                element: <Stakes />,
            },
            {
                path: '/covers',
                element: <Covers />,
            },
            {
                path: '/lights',
                element: <Lights />,
            },
            {
                path: '/food',
                element: <Food />,
            },
            {
                path: '/energy',
                element: <Energy />,
            },
            {
                path: '/weather',
                element: <Weather />,
            },
            {
                path: '/map',
                element: <Map />,
            }
        ]
    },
]);

root.render(
    // <React.StrictMode>
    <RouterProvider router={router} />
    // </React.StrictMode>
);
