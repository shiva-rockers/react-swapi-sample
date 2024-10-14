import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthenticateRoute from './PrivateRoute';
import { PATHS } from '../../constants/path';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';
import LoginPage from '../pages/LoginPage';
import PageNotFound from '../pages/PageNotFound';
import ResourceDetailPage from '../pages/ResourceDetailPage';
import ResourceListPage from '../pages/ResourceListPage';

const router = createBrowserRouter([
    {
        path: PATHS.HOME,
        element: <LoginPage />,
    },
    {
        path: PATHS.RESOURCE_LIST,
        element: (
            <AuthenticateRoute>
                <AuthenticatedLayout />
            </AuthenticateRoute>
        ),
        children: [
            {
                path: '',
                element: <ResourceListPage />,
            },
            {
                path: ':id',
                element: <ResourceDetailPage />,
            },
        ],
    },
    {
        path: '*',
        element: <PageNotFound />,
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
