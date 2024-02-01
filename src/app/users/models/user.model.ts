export enum Role {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
  USER = 'USER',
}

export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  role: Role;
}
