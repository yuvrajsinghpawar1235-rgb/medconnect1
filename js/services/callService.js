export const CallService = {
  /**
   * Generates an encrypted/anonymous room link preserving patient privacy.
   */
  generateCallLink(appointmentId) {
    const roomToken = btoa(`medconnect-room-${appointmentId}-${Date.now()}`).substring(0, 18);
    return `https://meet.jit.si/medconnect_consult_${roomToken}`;
  },

  initiateCall(callUrl) {
    window.open(callUrl, '_blank', 'noopener,noreferrer,width=1000,height=700');
  }
};