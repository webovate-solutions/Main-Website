document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contactModal");
  if (!modal) return;

  const openButtons = document.querySelectorAll(".js-open-contact");
  const closeButtons = modal.querySelectorAll(".js-close-contact");
  const dialog = modal.querySelector(".modal-dialog");

  let lastFocused = null;

  function openModal() {
    lastFocused = document.activeElement;

    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    // Fokus in den Dialog setzen (besser für Accessibility)
    const firstInput = modal.querySelector("input, textarea, button");
    if (firstInput) firstInput.focus();
  }

  function closeModal() {
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    // Fokus zurück zum Button, der geöffnet hat
    if (lastFocused) lastFocused.focus();
  }

  // Öffnen
  openButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    });
  });

  // Schließen (Overlay & Close-Button)
  closeButtons.forEach(btn => btn.addEventListener("click", closeModal));

  // ESC schließt
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
      closeModal();
    }
  });

  // Klick außerhalb Dialog schließt (Overlay hat schon close)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
});
