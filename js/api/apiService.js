const BASE_URL = 'http://localhost:3000';

const DEFAULT_DATA = {
  doctors: [
    { id: "DOC-101", name: "Dr. Sarah Jenkins", specialization: "Cardiology", experience: 12, rating: 4.9, fee: 150, modes: ["In-person", "Video"], clinic: "Metro Heart Institute", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&auto=format&fit=crop&q=80" },
    { id: "DOC-102", name: "Dr. Michael Chang", specialization: "Dermatology", experience: 8, rating: 4.7, fee: 120, modes: ["In-person", "Video"], clinic: "Derma Care Clinic", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80" },
    { id: "DOC-103", name: "Dr. Elena Rostova", specialization: "Neurology", experience: 15, rating: 4.8, fee: 200, modes: ["In-person"], clinic: "Brain & Spine Center", image: "https://images.unsplash.com/photo-1594824813566-78a933f32f3f?w=300&auto=format&fit=crop&q=80" },
    { id: "DOC-104", name: "Dr. Robert Chen", specialization: "Pediatrics", experience: 10, rating: 4.9, fee: 110, modes: ["In-person", "Video"], clinic: "Children Care Hospital", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&auto=format&fit=crop&q=80" },
    { id: "DOC-105", name: "Dr. Amara Patel", specialization: "Orthopedics", experience: 14, rating: 4.6, fee: 180, modes: ["In-person"], clinic: "Ortho Life Center", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&auto=format&fit=crop&q=80" },
    { id: "DOC-106", name: "Dr. James Wilson", specialization: "Psychiatry", experience: 9, rating: 4.8, fee: 160, modes: ["Video"], clinic: "Mind Balance Virtual", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&auto=format&fit=crop&q=80" },
    { id: "DOC-107", name: "Dr. Sophia Martinez", specialization: "Gynecology", experience: 11, rating: 4.9, fee: 140, modes: ["In-person", "Video"], clinic: "Women's Wellness Clinic", image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=300&auto=format&fit=crop&q=80" },
    { id: "DOC-108", name: "Dr. David Kim", specialization: "Ophthalmology", experience: 13, rating: 4.7, fee: 130, modes: ["In-person"], clinic: "Clear Vision Institute", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80" },
    { id: "DOC-109", name: "Dr. Lisa Ray", specialization: "Endocrinology", experience: 7, rating: 4.5, fee: 125, modes: ["Video"], clinic: "Endo Care Center", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&auto=format&fit=crop&q=80" },
    { id: "DOC-110", name: "Dr. Ahmed Hassan", specialization: "Gastroenterology", experience: 16, rating: 4.9, fee: 190, modes: ["In-person", "Video"], clinic: "Gastro Health Clinic", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80" },
    { id: "DOC-111", name: "Dr. Rachel Green", specialization: "Cardiology", experience: 6, rating: 4.4, fee: 135, modes: ["In-person", "Video"], clinic: "Metro Heart Institute", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80" },
    { id: "DOC-112", name: "Dr. Kevin White", specialization: "Dermatology", experience: 5, rating: 4.3, fee: 100, modes: ["Video"], clinic: "Derma Care Clinic", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80" },
    { id: "DOC-113", name: "Dr. Maria Garcia", specialization: "Neurology", experience: 18, rating: 5.0, fee: 220, modes: ["In-person"], clinic: "Brain & Spine Center", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80" },
    { id: "DOC-114", name: "Dr. William Taylor", specialization: "Pediatrics", experience: 4, rating: 4.6, fee: 95, modes: ["In-person", "Video"], clinic: "Children Care Hospital", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80" },
    { id: "DOC-115", name: "Dr. Priya Sharma", specialization: "Orthopedics", experience: 11, rating: 4.7, fee: 170, modes: ["In-person"], clinic: "Ortho Life Center", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&auto=format&fit=crop&q=80" },
    { id: "DOC-116", name: "Dr. Daniel Lee", specialization: "Psychiatry", experience: 12, rating: 4.8, fee: 175, modes: ["Video"], clinic: "Mind Balance Virtual", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80" },
    { id: "DOC-117", name: "Dr. Chloe Adams", specialization: "Gynecology", experience: 8, rating: 4.6, fee: 135, modes: ["In-person", "Video"], clinic: "Women's Wellness Clinic", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&auto=format&fit=crop&q=80" },
    { id: "DOC-118", name: "Dr. Thomas Clark", specialization: "Ophthalmology", experience: 10, rating: 4.5, fee: 140, modes: ["In-person"], clinic: "Clear Vision Institute", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80" },
    { id: "DOC-119", name: "Dr. Nina Patel", specialization: "Endocrinology", experience: 14, rating: 4.8, fee: 160, modes: ["In-person", "Video"], clinic: "Endo Care Center", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80" },
    { id: "DOC-120", name: "Dr. Omar Farooq", specialization: "Gastroenterology", experience: 9, rating: 4.7, fee: 155, modes: ["Video"], clinic: "Gastro Health Clinic", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80" }
  ],
  specializations: ["Cardiology", "Dermatology", "Neurology", "Pediatrics", "Orthopedics", "Psychiatry", "Gynecology", "Ophthalmology", "Endocrinology", "Gastroenterology"],
  appointments: []
};

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

  getFallback(endpoint) {
    const stored = localStorage.getItem(`med_${endpoint}`);
    if (stored) return JSON.parse(stored);
    
    const initial = DEFAULT_DATA[endpoint] || [];
    localStorage.setItem(`med_${endpoint}`, JSON.stringify(initial));
    return initial;
  }
};

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