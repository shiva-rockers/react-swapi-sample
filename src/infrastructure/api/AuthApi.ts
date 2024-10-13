import { COMMON_CONSTANTS } from '../../constants/common';
import { AuthUser } from '../../domain/entities/AuthUser';
import { AuthRepository } from '../../domain/repositories/AuthRepository';

const USER_NAME = 'admin';
const PASSWORD = 'password';
const TOKEN = 'mock-token';

export class AuthApi implements AuthRepository {
    async login(username: string, password: string): Promise<AuthUser> {
        if (username === USER_NAME && password === PASSWORD) {
            const token = TOKEN;
            localStorage.setItem(COMMON_CONSTANTS.AUTH_TOKEN, token);
            return { username, token };
        }
        throw new Error('Invalid username or password');
    }

    logout(): void {
        localStorage.removeItem(COMMON_CONSTANTS.AUTH_TOKEN);
    }
}
