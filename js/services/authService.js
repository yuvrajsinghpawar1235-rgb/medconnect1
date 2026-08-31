const SESSION_KEY = 'medconnect_session';

export class AuthService {
  static login(email, role = 'patient') {
    const session = {
      user: {
        id: role === 'doctor' ? 'DOC-1' : 'PAT-1',
        name: role === 'doctor' ? 'Dr. Rahul Patel' : 'Rahul Patel',
        email,
        role
      },
      token: `mock-token-${Date.now()}`
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return session;
  }

  static getSession() {
    const data = localStorage.getItem(SESSION_KEY);
    return data ? JSON.parse(data) : null;
  }

  static logout() {
    localStorage.removeItem(SESSION_KEY);
    window.location.href = '/pages/login.html';
  }

  static protectRoute(requiredRole = null) {
    const session = this.getSession();
    if (!session) {
      window.location.href = '/pages/login.html';
      return null;
    }
    if (requiredRole && session.user.role !== requiredRole) {
      window.location.href = '/index.html';
      return null;
    }
    return session;
  }
}