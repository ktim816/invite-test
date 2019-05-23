export default function burger() {
  const burgerBtn = document.querySelector('.js-burger');
  const navMenu = document.querySelector('.js-nav');

  function toggleClass() {
    this.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
  }

  burgerBtn.addEventListener('click', toggleClass);
}
