export interface LoginInterface {
  email: string;
  password: string;
}

export interface RegisterInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  token: string;
}
