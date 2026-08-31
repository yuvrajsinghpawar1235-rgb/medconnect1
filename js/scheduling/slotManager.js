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
  static masterSlots = ["09:00", "10:30", "11:30", "14:00", "15:30", "16:30"];

  static getAvailableSlots(existingAppointments, selectedDate) {
    const bookedTimes = existingAppointments
      .filter(a => a.date === selectedDate && a.status !== 'Cancelled')
      .map(a => a.time);

    return this.masterSlots.filter(slot => !bookedTimes.includes(slot));
  }
}