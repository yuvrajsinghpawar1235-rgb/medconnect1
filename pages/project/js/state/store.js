class Store {
  constructor() {
    this.state = { doctors: [], appointments: [], currentUser: null };
    this.listeners = [];
  }

  getState() { return this.state; }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach(cb => cb(this.state));
  }

  subscribe(callback) {
    this.listeners.push(callback);
    return () => { this.listeners = this.listeners.filter(cb => cb !== callback); };
  }
}

export const globalStore = new Store();