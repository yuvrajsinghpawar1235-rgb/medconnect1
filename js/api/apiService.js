const BASE_URL = 'http://localhost:3000';

// Initial Seed Patients (Clean, production-ready email addresses)
const INITIAL_PATIENTS = [
  { id: "PAT-01", email: "rahul.patel@gmail.com", password: "password123", name: "Rahul Patel", role: "patient" },
  { id: "PAT-02", email: "sarah.miller@outlook.com", password: "password123", name: "Sarah Miller", role: "patient" }
];

// Initial Seed Doctors (20 Pre-configured Specialists)
const INITIAL_DOCTORS = [
  { id: "DOC-101", name: "Dr. Sarah Jenkins", specialization: "Cardiology", experience: 12, rating: 4.9, fee: 150, modes: ["In-person", "Video"], clinic: "Heart Care Institute", email: "dr.jenkins@medconnect.com", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&auto=format&fit=crop&q=80" },
  { id: "DOC-102", name: "Dr. Marcus Vance", specialization: "Dermatology", experience: 9, rating: 4.8, fee: 120, modes: ["Video"], clinic: "Skin & Laser Center", email: "dr.vance@medconnect.com", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80" },
  { id: "DOC-103", name: "Dr. Elena Rostova", specialization: "Neurology", experience: 15, rating: 5.0, fee: 200, modes: ["In-person", "Video"], clinic: "Neuro Health Center", email: "dr.rostova@medconnect.com", image: "https://images.unsplash.com/photo-1594824813566-88855ce7890b?w=300&auto=format&fit=crop&q=80" },
  { id: "DOC-104", name: "Dr. James Wilson", specialization: "Pediatrics", experience: 11, rating: 4.9, fee: 110, modes: ["In-person", "Video"], clinic: "Sunrise Children's Clinic", email: "dr.wilson@medconnect.com", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&auto=format&fit=crop&q=80" },
  { id: "DOC-105", name: "Dr. Amara Patel", specialization: "Orthopedics", experience: 14, rating: 4.7, fee: 180, modes: ["In-person"], clinic: "Apex Joint & Bone Care", email: "dr.patel@medconnect.com", image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=300&auto=format&fit=crop&q=80" },
  { id: "DOC-106", name: "Dr. Robert Chen", specialization: "Gastroenterology", experience: 10, rating: 4.8, fee: 160, modes: ["In-person", "Video"], clinic: "Digestive Health Specialists", email: "dr.chen@medconnect.com", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&auto=format&fit=crop&q=80" },
  { id: "DOC-107", name: "Dr. Sophia Martinez", specialization: "Psychiatry", experience: 8, rating: 4.9, fee: 140, modes: ["Video"], clinic: "Mind & Wellness Studio", email: "dr.martinez@medconnect.com", image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=300&auto=format&fit=crop&q=80" },
  { id: "DOC-108", name: "Dr. David Kim", specialization: "Ophthalmology", experience: 13, rating: 4.8, fee: 130, modes: ["In-person"], clinic: "ClearVision Eye Institute", email: "dr.kim@medconnect.com", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&auto=format&fit=crop&q=80" },
  { id: "DOC-109", name: "Dr. Emily Taylor", specialization: "Endocrinology", experience: 7, rating: 4.6, fee: 145, modes: ["In-person", "Video"], clinic: "Metabolic & Thyroid Care", email: "dr.taylor@medconnect.com", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&auto=format&fit=crop&q=80" },
  { id: "DOC-110", name: "Dr. Michael O'Connor", specialization: "Pulmonology", experience: 16, rating: 4.9, fee: 175, modes: ["In-person", "Video"], clinic: "Respiratory Health Alliance", email: "dr.oconnor@medconnect.com", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80" },
  { id: "DOC-111", name: "Dr. Priya Sharma", specialization: "Gynecology", experience: 12, rating: 4.9, fee: 155, modes: ["In-person", "Video"], clinic: "Women's Wellness Medical", email: "dr.sharma@medconnect.com", image: "https://images.unsplash.com/photo-1594824813566-88855ce7890b?w=300&auto=format&fit=crop&q=80" },
  { id: "DOC-112", name: "Dr. Alexander Wright", specialization: "Urology", experience: 11, rating: 4.7, fee: 165, modes: ["In-person"], clinic: "City Urology Center", email: "dr.wright@medconnect.com", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&auto=format&fit=crop&q=80" },
  { id: "DOC-113", name: "Dr. Lisa Al-Mansoor", specialization: "Rheumatology", experience: 9, rating: 4.8, fee: 140, modes: ["Video"], clinic: "Joint & Autoimmune Clinic", email: "dr.almansoor@medconnect.com", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&auto=format&fit=crop&q=80" },
  { id: "DOC-114", name: "Dr. William Scott", specialization: "ENT (Otolaryngology)", experience: 14, rating: 4.8, fee: 125, modes: ["In-person", "Video"], clinic: "Sinus & Hearing Institute", email: "dr.scott@medconnect.com", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&auto=format&fit=crop&q=80" },
  { id: "DOC-115", name: "Dr. Hannah Abbott", specialization: "General Medicine", experience: 6, rating: 4.9, fee: 90, modes: ["In-person", "Video"], clinic: "Primary Family Practice", email: "dr.abbott@medconnect.com", image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=300&auto=format&fit=crop&q=80" },
  { id: "DOC-116", name: "Dr. Daniel Brooks", specialization: "Oncology", experience: 18, rating: 5.0, fee: 220, modes: ["In-person", "Video"], clinic: "Comprehensive Cancer Care", email: "dr.brooks@medconnect.com", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&auto=format&fit=crop&q=80" },
  { id: "DOC-117", name: "Dr. Maya Lin", specialization: "Allergy & Immunology", experience: 8, rating: 4.7, fee: 115, modes: ["Video"], clinic: "Allergy Care Partners", email: "dr.lin@medconnect.com", image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=300&auto=format&fit=crop&q=80" },
  { id: "DOC-118", name: "Dr. Thomas Thorne", specialization: "Nephrology", experience: 15, rating: 4.8, fee: 185, modes: ["In-person"], clinic: "Kidney Health Specialists", email: "dr.thorne@medconnect.com", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&auto=format&fit=crop&q=80" },
  { id: "DOC-119", name: "Dr. Olivia Bennett", specialization: "Plastic Surgery", experience: 10, rating: 4.9, fee: 210, modes: ["In-person"], clinic: "Aesthetic Surgical Art", email: "dr.bennett@medconnect.com", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&auto=format&fit=crop&q=80" },
  { id: "DOC-120", name: "Dr. Kevin Garcia", specialization: "Sports Medicine", experience: 11, rating: 4.8, fee: 135, modes: ["In-person", "Video"], clinic: "Athletic Recovery Hub", email: "dr.garcia@medconnect.com", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80" }
];

export const ApiService = {
  async get(endpoint) {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      return this.getFallback(endpoint);
    }
  },

  async post(endpoint, data) {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      const current = this.getFallback(endpoint);
      current.push(data);
      localStorage.setItem(`med_${endpoint}`, JSON.stringify(current));
      return data;
    }
  },

  getFallback(endpoint) {
    const stored = localStorage.getItem(`med_${endpoint}`);
    if (stored) return JSON.parse(stored);
    if (endpoint === 'doctors') {
      localStorage.setItem('med_doctors', JSON.stringify(INITIAL_DOCTORS));
      return INITIAL_DOCTORS;
    }
    return [];
  }
};

// --- Authentication & User Operations ---

export function getUsers() {
  let storedUsers = localStorage.getItem('med_registered_users');
  let users = storedUsers ? JSON.parse(storedUsers) : [];

  // Migration logic: Detect old @example.com accounts and replace with updated seeds while keeping custom registered users
  const hasLegacyAccount = users.some(u => u.email.includes('@example.com'));
  
  if (hasLegacyAccount) {
    // Keep custom users registered by the testing team, but filter out legacy seeds
    const customUsers = users.filter(u => !u.email.includes('@example.com'));
    
    // Merge new initial patients with any custom registered users
    users = [...INITIAL_PATIENTS];
    customUsers.forEach(cu => {
      if (!users.some(u => u.email.toLowerCase() === cu.email.toLowerCase())) {
        users.push(cu);
      }
    });
  } else if (users.length === 0) {
    users = [...INITIAL_PATIENTS];
  }

  const doctors = ApiService.getFallback('doctors');
  let hasNewDoctor = false;

  // Auto-sync 20 default doctors into the user login pool safely
  doctors.forEach(doc => {
    const docEmail = doc.email || `${doc.name.toLowerCase().replace(/[^a-z]/g, '')}@medconnect.com`;
    const exists = users.some(u => u.email.toLowerCase() === docEmail.toLowerCase());
    
    if (!exists) {
      users.push({
        id: doc.id,
        email: docEmail,
        password: "docpassword123",
        name: doc.name,
        role: "doctor",
        specialization: doc.specialization
      });
      hasNewDoctor = true;
    }
  });

  if (hasNewDoctor || hasLegacyAccount || !storedUsers) {
    localStorage.setItem('med_registered_users', JSON.stringify(users));
  }

  return users;
}

export function registerUser(newUser) {
  const users = getUsers();
  const exists = users.find(u => u.email.toLowerCase() === newUser.email.toLowerCase());
  if (exists) {
    return { success: false, message: 'An account with this email already exists!' };
  }

  users.push(newUser);
  localStorage.setItem('med_registered_users', JSON.stringify(users));

  if (newUser.role === 'doctor') {
    const doctors = ApiService.getFallback('doctors');
    doctors.push({
      id: newUser.id,
      name: newUser.name,
      specialization: newUser.specialization || 'General Physician',
      experience: newUser.experience || 1,
      rating: 5.0,
      fee: newUser.fee || 100,
      modes: ["In-person", "Video"],
      clinic: "MedConnect Care Center",
      email: newUser.email,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&auto=format&fit=crop&q=80"
    });
    localStorage.setItem('med_doctors', JSON.stringify(doctors));
  }

  return { success: true };
}

export function authenticateUser(email, password, role) {
  const users = getUsers();
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password && u.role === role);
  if (user) {
    setSession(user);
    return { success: true, user };
  }
  return { success: false, message: 'Invalid credentials or incorrect portal selected.' };
}

export function setSession(user) {
  localStorage.setItem('med_current_user', JSON.stringify(user));
}

export function getSession() {
  const session = localStorage.getItem('med_current_user');
  return session ? JSON.parse(session) : null;
}

export function clearSession() {
  localStorage.removeItem('med_current_user');
}

export function requireAuth(requiredRole) {
  const user = getSession();
  if (!user) {
    window.location.href = requiredRole === 'doctor' ? 'login-doctor.html' : 'login-patient.html';
    return null;
  }
  if (requiredRole && user.role !== requiredRole) {
    showToast('Unauthorized role access.', 'error');
    window.location.href = user.role === 'doctor' ? 'doctor-dashboard.html' : 'patient-dashboard.html';
    return null;
  }
  return user;
}

export function showToast(message, type = 'success') {
  const existing = document.getElementById('mc-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'mc-toast';
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}