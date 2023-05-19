$(document).ready(function() {
  $(window).scroll(function() {
    $('.dropdownSection').each(function() {
      let sectionTop = $(this).offset().top;
      let sectionHeight = $(this).outerHeight();
      let scrollTop = $(window).scrollTop();
      let windowHeight = $(window).height();
      
      if (scrollTop > (sectionTop - windowHeight + sectionHeight / 2)) {
        $(this).addClass('show');
      }
    });
  });
});


function isElementInViewport(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

let lists = document.querySelectorAll(".features__list");

function animateElements() {
  lists.forEach(function(list, index) {
    if (isElementInViewport(list)) {
      setTimeout(function() {
        list.classList.add("show");
      }, index * 150); 
    }
  });
}

window.addEventListener("scroll", animateElements);
window.addEventListener("load", animateElements);


