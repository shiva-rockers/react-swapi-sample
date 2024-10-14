import { AuthUser } from '../../domain/entities/AuthUser';
import { AuthRepository } from '../../domain/repositories/AuthRepository';

export class LoginUser {
    constructor(private authRepository: AuthRepository) {}

    async execute(username: string, password: string): Promise<AuthUser> {
        return this.authRepository.login(username, password);
    }

    logout() {
        this.authRepository.logout();
    }
}
