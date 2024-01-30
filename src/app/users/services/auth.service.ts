import { AngularFireAuth } from '@angular/fire/compat/auth';

export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Sign in with email/password
  signIn(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Sign up with email/password
  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Sign out
  signOut() {
    return this.afAuth.signOut();
  }

  // Get current user
  getCurrentUser() {
    return this.afAuth.authState;
  }
}
