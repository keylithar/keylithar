// Animación de entrada al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero-content");
  if (heroText) {
    heroText.style.opacity = 0;
    heroText.style.transform = "translateY(40px)";
    setTimeout(() => {
      heroText.style.transition = "all 1.2s ease";
      heroText.style.opacity = 1;
      heroText.style.transform = "translateY(0)";
    }, 300);
  }
});

// Efecto de aparición al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".item, .collection h2, .contacto form").forEach((el) => observer.observe(el));

// Navbar: cambiar fondo al hacer scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.backgroundColor = "#fff";
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
  }
});

// Enviar formulario (demo)
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Gracias por tu mensaje. Te responderemos pronto 🖤");
    form.reset();
  });
};

const questions = document.querySelectorAll(".faq-question");

questions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      // cerrar todos los demás
      document.querySelectorAll(".faq-answer").forEach((a) => a.style.maxHeight = null);
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

