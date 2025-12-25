// strateX Alerts

export const initAlerts = (root = document) => {
  root.querySelectorAll(".sx-alert").forEach(alert => {
    if (alert.dataset.sxInit) return;
    alert.dataset.sxInit = "true";

    let isClosing = false;

    const closeAlert = () => {
      if (isClosing) return;
      isClosing = true;

      alert.classList.add("sx-alert-hide");
      setTimeout(() => alert.remove(), 300);
    };

    const closeBtn = alert.querySelector(".sx-alert-close");
    closeBtn && closeBtn.addEventListener("click", closeAlert);

    const timeout = alert.dataset.timeout;
    timeout && setTimeout(closeAlert, Number(timeout));
  });
};