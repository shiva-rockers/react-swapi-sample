import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../application/stores/authStore';
import { PATHS } from '../../constants/path';

interface PrivateRouteProps {
    children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const user = useAuthStore((state) => state.user);

    if (!user) {
        return <Navigate to={PATHS.HOME} replace />;
    }

    return children;
};

export default PrivateRoute;
