export enum Role {
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
}

export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  role: Role;
}
