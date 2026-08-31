// js/utils/ui.js

export class UI {
  // Toast Notifications
  static showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.style.cssText = `
        position: fixed; bottom: 20px; right: 20px; z-index: 9999;
        display: flex; flex-direction: column; gap: 10px;
      `;
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const bgColor = type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8';
    toast.style.cssText = `
      background: ${bgColor}; color: #fff; padding: 12px 20px; border-radius: 6px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15); font-family: sans-serif; font-size: 14px;
      transition: all 0.3s ease; opacity: 0; transform: translateY(10px);
    `;
    toast.innerText = message;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    }, 50);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // Confirmation Modal
  static showConfirmModal({ title, message, onConfirm }) {
    const backdrop = document.createElement('div');
    backdrop.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0,0,0,0.5); z-index: 9998; display: flex;
      align-items: center; justify-content: center;
    `;

    backdrop.innerHTML = `
      <div style="background: #fff; padding: 24px; border-radius: 8px; max-width: 400px; width: 90%; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
        <h3 style="margin-top: 0;">${title}</h3>
        <p style="color: #666; font-size: 14px;">${message}</p>
        <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px;">
          <button id="modal-cancel-btn" style="padding: 8px 16px; border: 1px solid #ccc; background: #fff; border-radius: 4px; cursor: pointer;">Cancel</button>
          <button id="modal-confirm-btn" style="padding: 8px 16px; border: none; background: #dc3545; color: #fff; border-radius: 4px; cursor: pointer;">Confirm</button>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);

    backdrop.querySelector('#modal-cancel-btn').onclick = () => backdrop.remove();
    backdrop.querySelector('#modal-confirm-btn').onclick = () => {
      onConfirm();
      backdrop.remove();
    };
  }

  // Empty State Generator
  static getEmptyStateHTML(message, icon = '📂') {
    return `
      <div style="text-align: center; padding: 40px 20px; color: #777;">
        <div style="font-size: 48px; margin-bottom: 10px;">${icon}</div>
        <p style="font-size: 16px; margin: 0;">${message}</p>
      </div>
    `;
  }

  // Skeleton Loader for Cards
  static getSkeletonHTML(count = 3) {
    return Array(count).fill(0).map(() => `
      <div style="border: 1px solid #eee; border-radius: 8px; padding: 16px; background: #f9f9f9; height: 280px; display: flex; flex-direction: column; justify-content: space-between;">
        <div style="width: 100%; height: 140px; background: #e0e0e0; border-radius: 6px; animation: pulse 1.5s infinite;"></div>
        <div style="width: 70%; height: 20px; background: #e0e0e0; border-radius: 4px; margin-top: 10px;"></div>
        <div style="width: 40%; height: 16px; background: #e0e0e0; border-radius: 4px;"></div>
      </div>
    `).join('');
  }
}