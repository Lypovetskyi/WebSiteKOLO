window.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.header__menu-btn');
  const nav = document.querySelector('.header__nav');
  const navCloseBtn = document.querySelector('.header__nav-close-btn');
  const mainTitle = document.querySelector('.main__title');
  const loginBtn = document.querySelector('.login-btn');

  menuBtn.addEventListener('click', function() {
    nav.classList.add('open');
    mainTitle.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Прокрутка страницы вниз
    const elementToScroll = document.querySelector('.scroll-target');
    elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  navCloseBtn.addEventListener('click', function() {
    nav.classList.remove('open');
    mainTitle.classList.remove('open');
    document.body.style.overflow = 'auto'; // Разрешение прокрутки body
  });

  loginBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращение перехода по ссылке

    const loginSection = document.getElementById('login');
    loginSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Закрытие меню после перехода
    nav.classList.remove('open');
    mainTitle.classList.remove('open');
    document.body.style.overflow = 'auto'; // Разрешение прокрутки body
  });
});


document.querySelector(".nav__list-link.last.login-btn.oper").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default anchor click behavior

  const targetElement = document.getElementById("solutions");
  const offset = targetElement.offsetTop;

  window.scrollTo({
    top: offset,
    behavior: "smooth"
  });
});

