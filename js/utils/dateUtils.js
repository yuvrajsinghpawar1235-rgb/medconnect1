export class DateUtils {
  static getTodayDateString() {
    return new Date().toISOString().split('T')[0];
  }

  static formatDate(dateStr) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  }
}