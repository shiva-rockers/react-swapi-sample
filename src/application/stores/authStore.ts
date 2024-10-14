import { create } from 'zustand';
import { AuthUser } from '../../domain/entities/AuthUser';
import { LoginUser } from '../usecases/LoginUser';
import { AuthApi } from '../../infrastructure/api/AuthApi';
import { COMMON_CONSTANTS } from '../../constants/common';

interface AuthState {
    user: AuthUser | null;
    loading: boolean;
    error: string | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

const savedUser = localStorage.getItem(COMMON_CONSTANTS.AUTH_USER);
const initialUser: AuthUser | null = savedUser ? JSON.parse(savedUser) : null;

export const useAuthStore = create<AuthState>((set) => ({
    user: initialUser,
    loading: false,
    error: null,
    login: async (username, password) => {
        try {
            set({ loading: true });
            const loginUser = new LoginUser(new AuthApi());
            const user = await loginUser.execute(username, password);
            localStorage.setItem(COMMON_CONSTANTS.AUTH_USER, JSON.stringify(user));
            set({
                user,
                loading: false,
                error: null,
            });
        } catch (error) {
            set({
                loading: false,
                error: (error as Error).message,
            });
            throw error;
        }
    },
    logout: () => {
        localStorage.removeItem(COMMON_CONSTANTS.AUTH_USER);
        set({ user: null });
    },
}));
