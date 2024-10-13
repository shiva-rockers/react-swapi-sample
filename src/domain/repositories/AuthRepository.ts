import { AuthUser } from '../entities/AuthUser';

export interface AuthRepository {
  login(username: string, password: string): Promise<AuthUser>;
  logout(): void;
}
