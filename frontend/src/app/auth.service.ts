export class AuthService {
  loggedIn = false;

  isAuthenticated(): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => resolve(this.loggedIn), 200);
    });

    return promise;
  }

  login() {
    this.loggedIn = true;
    console.log('Logged in!');
  }

  logout() {
    this.loggedIn = false;
    console.log('Logged out!');
  }
}
