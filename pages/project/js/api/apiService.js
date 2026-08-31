// js/api/apiService.js

// Production fallback mechanism for Netlify vs Local development
const LOCAL_API_URL = 'http://localhost:3000';
const MOCK_FALLBACK_URL = 'https://my-json-server.typicode.com/your-username/medconnect'; // Replace or set dynamically

export const BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
  ? LOCAL_API_URL 
  : MOCK_FALLBACK_URL;

export class ApiService {
  static async request(endpoint, options = {}) {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });

      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API Request Error [${endpoint}]:`, error);
      throw error;
    }
  }

  // Doctor API Operations
  static async getDoctors() {
    return this.request('/doctors');
  }

  static async getDoctorById(id) {
    return this.request(`/doctors/${id}`);
  }

  // Appointment API Operations
  static async getAppointments(patientId = null) {
    const url = patientId ? `/appointments?patientId=${patientId}` : '/appointments';
    return this.request(url);
  }

  static async createAppointment(appointmentData) {
    return this.request('/appointments', {
      method: 'POST',
      body: JSON.stringify(appointmentData)
    });
  }

  static async updateAppointment(id, updateData) {
    return this.request(`/appointments/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateData)
    });
  }

  static async cancelAppointment(id) {
    return this.request(`/appointments/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status: 'Cancelled' })
    });
  }

  // Notification API Operations
  static async getNotifications(userId) {
    return this.request(`/notifications?userId=${userId}`);
  }
}