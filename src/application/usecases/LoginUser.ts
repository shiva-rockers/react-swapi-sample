import { AuthRepository } from '../../domain/repositories/AuthRepository';
import { AuthUser } from '../../domain/entities/AuthUser';

export class LoginUser {
  constructor(private authRepository: AuthRepository) {}

  async execute(username: string, password: string): Promise<AuthUser> {
    return this.authRepository.login(username, password);
  }

  logout() {
    this.authRepository.logout();
  }
}
