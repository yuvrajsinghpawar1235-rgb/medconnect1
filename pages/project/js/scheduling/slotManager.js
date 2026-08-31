// js/scheduling/slotManager.js

export function Appointment(id, doctorId, patientId, date, time, mode, status, reason) {
  this.id = id;
  this.doctorId = doctorId;
  this.patientId = patientId;
  this.date = date;
  this.time = time;
  this.mode = mode;
  this.status = status || 'Confirmed';
  this.reason = reason;
}

Appointment.prototype.getFormattedTime = function() {
  return `${this.date} at ${this.time}`;
};

export class SlotManager {
  // Master list of standard available appointment time slots
  static masterSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM"
  ];

  /**
   * Filter available slots for a given doctor on a specific date.
   * Normalize dates to YYYY-MM-DD for reliable comparison.
   */
  static getAvailableSlots(existingAppointments, selectedDate) {
    if (!selectedDate) return this.masterSlots;
    if (!Array.isArray(existingAppointments)) return [...this.masterSlots];

    // Normalize target date to standard format (YYYY-MM-DD)
    const normalizedSelectedDate = new Date(selectedDate).toISOString().split('T')[0];

    // Get times of appointments already booked on this exact date
    const bookedTimes = existingAppointments
      .filter(app => {
        if (!app.date || app.status === 'Cancelled') return false;
        const appDate = new Date(app.date).toISOString().split('T')[0];
        return appDate === normalizedSelectedDate;
      })
      .map(app => app.time.trim());

    // Filter out booked slots from master slots
    return this.masterSlots.filter(slot => !bookedTimes.includes(slot.trim()));
  }
}