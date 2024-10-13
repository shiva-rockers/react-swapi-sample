import { AuthUser } from '../../domain/entities/AuthUser';
import { AuthRepository } from '../../domain/repositories/AuthRepository';

export class AuthApi implements AuthRepository {
  async login(username: string, password: string): Promise<AuthUser> {
    if (username === 'user' && password === 'password') {
      const token = 'mock-token';
      localStorage.setItem('authToken', token);
      return { username, token };
    }
    throw new Error('Invalid username or password');
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }
}
