import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import AuthenticateRoute from './PrivateRoute';
import ResourceListPage from '../pages/ResourceListPage';
import ResourceDetailPage from '../pages/ResourceDetailPage';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';
import { PATHS } from '../../constants/path';

const router = createBrowserRouter([
    {
        path: PATHS.HOME,
        element: <LoginPage />
    },
    {
        path: PATHS.RESOURCE_LIST,
        element: (
            <AuthenticateRoute>
                <AuthenticatedLayout />
            </AuthenticateRoute>
        ),
        children: [
            { path: '', element: <ResourceListPage /> },
            { path: ':id', element: <ResourceDetailPage /> },
        ]
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
