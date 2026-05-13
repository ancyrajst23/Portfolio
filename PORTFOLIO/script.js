// Change navbar color on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

 
  document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let modal = new bootstrap.Modal(document.getElementById("messageModal"));
    modal.show();
  });


