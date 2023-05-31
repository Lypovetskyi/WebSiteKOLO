window.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.header__menu-btn');
  const nav = document.querySelector('.header__nav');
  const navCloseBtn = document.querySelector('.header__nav-close-btn');
  const mainTitle = document.querySelector('.main__title');
  const loginBtn = document.querySelector('.login-btn');

  menuBtn.addEventListener('click', function () {
    nav.classList.add('open');
    mainTitle.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Прокрутка страницы вниз
    const elementToScroll = document.querySelector('.scroll-target');
    elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  navCloseBtn.addEventListener('click', function () {
    nav.classList.remove('open');
    mainTitle.classList.remove('open');
    document.body.style.overflow = 'auto'; // Разрешение прокрутки body
  });

  loginBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Предотвращение перехода по ссылке

    const loginSection = document.getElementById('login');
    loginSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Закрытие меню после перехода
    nav.classList.remove('open');
    mainTitle.classList.remove('open');
    document.body.style.overflow = 'auto'; // Разрешение прокрутки body
  });

  const navLinks = document.querySelectorAll('.header__nav .nav__list-link');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Предотвращение перехода по ссылке

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      // Закрытие меню после перехода
      nav.classList.remove('open');
      mainTitle.classList.remove('open');
      document.body.style.overflow = 'auto'; // Разрешение прокрутки body
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  let loginButton = document.querySelector('.login-btn');
  loginButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  });
});
