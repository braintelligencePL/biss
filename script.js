// Etap 3: Animacje i interaktywność strony

document.addEventListener("DOMContentLoaded", () => {
  // ScrollReveal effect dla sekcji
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });

  // Obsługa formularza (walidacja podstawowa)
  const form = document.querySelector("form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.");
    form.reset();
  });
});

/* Style do efektów pojawiania się (w CSS):
section {
  transition: opacity 1s ease-out, transform 1s ease-out;
}

section.hidden {
  opacity: 0;
  transform: translateY(30px);
}

section.visible {
  opacity: 1;
  transform: translateY(0);
} */
