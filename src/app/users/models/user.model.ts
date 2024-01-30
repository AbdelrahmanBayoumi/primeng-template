export enum Role {
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
}

export interface User {
  email: string;
  password: string;
  role: Role;
}
