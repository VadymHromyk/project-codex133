import spriteSrc from '../img/icons/sprite.svg';

(() => {
document.querySelectorAll('use').forEach(use => {
    const href = use.getAttribute('href');
    if (!href) return;
    const id = href.split('#')[1];
    use.setAttribute('href', `${spriteSrc}#${id}`);
  });

  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();
