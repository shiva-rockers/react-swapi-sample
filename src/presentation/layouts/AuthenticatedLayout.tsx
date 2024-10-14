import { Outlet, useNavigate } from 'react-router-dom';

import { useAuthStore } from '../../application/stores/authStore';
import { PATHS } from '../../constants/path';
import Header from '../components/Header';

const AuthenticatedLayout = () => {
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate(PATHS.HOME);
    };

    return (
        <>
            <Header handleLogout={handleLogout} />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default AuthenticatedLayout;
