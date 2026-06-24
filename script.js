document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll para "Fale Conosco"
  const contactButton = document.querySelector('a[href="#contato"]');
  if (contactButton) {
    contactButton.addEventListener("click", function (event) {
      event.preventDefault();
      const contactSection = document.getElementById("contato");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      status.textContent = "Por favor, preencha todos os campos.";
      status.style.color = "#d62828";
      return;
    }

    status.textContent = "Mensagem enviada com sucesso! Entraremos em contato em breve.";
    status.style.color = "#2a9d8f";
    form.reset();
  });
});
