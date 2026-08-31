// js/services/authService.js

export class AuthService {
  static SESSION_KEY = 'medconnect_session';

  /**
   * Retrieve session data from LocalStorage
   */
  static getSession() {
    try {
      const data = localStorage.getItem(this.SESSION_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error('Failed to parse session:', e);
      return null;
    }
  }

  /**
   * Save session data to LocalStorage
   */
  static setSession(user) {
    const session = {
      user,
      token: `mock-token-${Date.now()}`,
      loginTime: new Date().toISOString()
    };
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
    return session;
  }

  /**
   * Log in user - checks json-server first, then falls back to local objects
   */
  static async login(email, password = '', role = 'patient') {
    const defaultUsers = {
      patient: { id: 'p1', name: 'John Doe', email: 'patient@demo.com', role: 'patient' },
      doctor: { id: 'd1', name: 'Dr. Sarah Jenkins', email: 'doctor@demo.com', role: 'doctor' }
    };

    try {
      const endpoint = role === 'doctor' ? '/doctors' : '/patients';
      const response = await fetch(`http://localhost:3000${endpoint}`);
      if (response.ok) {
        const users = await response.json();
        const found = users.find(u => u.email.toLowerCase() === email.toLowerCase());
        if (found) {
          found.role = role;
          this.setSession(found);
          return found;
        }
      }
    } catch (err) {
      console.warn('Backend server unreachable; using offline fallback credentials.');
    }

    const fallbackUser = defaultUsers[role] || {
      id: role === 'doctor' ? 'd1' : 'p1',
      name: email.split('@')[0] || 'Demo User',
      email: email,
      role: role
    };

    this.setSession(fallbackUser);
    return fallbackUser;
  }

  /**
   * Logout user and redirect safely using relative path
   */
  static logout() {
    localStorage.removeItem(this.SESSION_KEY);
    const relativePath = window.location.pathname.includes('/pages/') ? 'login.html' : 'pages/login.html';
    window.location.href = relativePath;
  }

  /**
   * Guard protected routes
   */
  static protectRoute(requiredRole = null) {
    const session = this.getSession();
    const loginPath = window.location.pathname.includes('/pages/') ? 'login.html' : 'pages/login.html';

    if (!session) {
      window.location.href = loginPath;
      return null;
    }

    if (requiredRole && session.user.role !== requiredRole) {
      console.warn(`Access denied. Role required: ${requiredRole}, present: ${session.user.role}`);
      const indexPath = window.location.pathname.includes('/pages/') ? '../index.html' : 'index.html';
      window.location.href = indexPath;
      return null;
    }

    return session;
  }
}