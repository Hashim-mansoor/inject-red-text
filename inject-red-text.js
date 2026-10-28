// Injected script: make all text red + show notification
(function() {
  'use strict';

  const style = document.createElement('style');
  style.textContent = `
    * {
      color: red !important;
    }
    a, a * {
      color: red !important;
    }
  `;
  (document.head || document.documentElement).appendChild(style);

  const notif = document.createElement('div');
  notif.textContent = 'Yes, I am injected';
  notif.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #222;
    color: #fff !important;
    padding: 12px 20px;
    border-radius: 6px;
    z-index: 2147483647;
    font-size: 15px;
    font-family: Arial, sans-serif;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    pointer-events: none;
  `;
  (document.body || document.documentElement).appendChild(notif);

  setTimeout(() => notif.remove(), 4000);
})();
