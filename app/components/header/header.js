/* eslint-disable */
export default function header() {
  const header = document.querySelector('.js-header');
  let isActive = false;

  const toggleClass = () => {
    if (window.scrollY === 0 && !isActive) {
      header.classList.remove('is-active');
      isActive = true;
    } else {
      header.classList.add('is-active');
      isActive = false;
    }
  };

  window.addEventListener('scroll', toggleClass);
}
/* eslint-enable */
