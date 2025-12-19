const menuBtns = document.querySelectorAll('.sx-menu-btn');
    const drawer = document.getElementById('sxDrawer');
    const overlay = document.getElementById('sxOverlay');
    const closeBtn = document.querySelector('.sx-close-btn');

    menuBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        drawer.classList.add('active');
        overlay.classList.add('active');
      });
    });

    overlay.addEventListener('click', closeDrawer);
    closeBtn.addEventListener('click', closeDrawer);

    function closeDrawer() {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
    }