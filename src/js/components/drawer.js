// strateX Drawer Logic

export const initDrawer = (root = document) => {
  const drawer = root.querySelector(".sx-drawer");
  const overlay = root.querySelector(".sx-overlay");
  const menuButtons = root.querySelectorAll(".sx-menu-btn");
  const closeBtn = root.querySelector(".sx-close-btn");

  if (!drawer) return;

  const OPEN_CLASSES = ["open", "active", "show"];

  const openDrawer = () => {
    OPEN_CLASSES.forEach(cls => drawer.classList.add(cls));
    overlay && OPEN_CLASSES.forEach(cls => overlay.classList.add(cls));
  };

  const closeDrawer = () => {
    OPEN_CLASSES.forEach(cls => drawer.classList.remove(cls));
    overlay && OPEN_CLASSES.forEach(cls => overlay.classList.remove(cls));
  };

  menuButtons.forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      openDrawer();
    });
  });

  closeBtn && closeBtn.addEventListener("click", closeDrawer);
  overlay && overlay.addEventListener("click", closeDrawer);
};