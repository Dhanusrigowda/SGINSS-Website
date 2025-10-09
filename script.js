// Smooth Scrolling for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    let target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Highlight Active Section in Navbar while scrolling
window.addEventListener('scroll', () => {
  let sections = document.querySelectorAll('section');
  let scrollPos = window.scrollY + 100; // offset for navbar

  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${section.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Gallery Lightbox (click image to enlarge)
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    let overlay = document.createElement('div');
    overlay.classList.add('lightbox');
    overlay.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
});

// Back to Top Button
let backToTop = document.createElement('button');
backToTop.innerText = "↑";
backToTop.classList.add('back-to-top');
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
