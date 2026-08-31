export class Modal {
  static open(title, contentHtml, onConfirm = null) {
    this.close();
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'active-modal';

    overlay.innerHTML = `
      <div class="modal-box">
        <h3>${title}</h3>
        <div style="margin-top: 10px;">${contentHtml}</div>
        <div class="modal-actions">
          <button class="btn btn-outline btn-sm" id="modal-cancel-btn">Cancel</button>
          ${onConfirm ? '<button class="btn btn-primary btn-sm" id="modal-confirm-btn">Confirm</button>' : ''}
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById('modal-cancel-btn').onclick = () => this.close();
    if (onConfirm) {
      document.getElementById('modal-confirm-btn').onclick = async () => {
        await onConfirm();
        this.close();
      };
    }
  }

  static close() {
    const existing = document.getElementById('active-modal');
    if (existing) existing.remove();
  }
}