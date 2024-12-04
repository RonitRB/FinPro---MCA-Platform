export interface User {
  id: string;
  email: string;
  role: 'business' | 'investor' | 'admin';
  name: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}