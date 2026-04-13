document.addEventListener("DOMContentLoaded", () => {
  const styleButtons = document.querySelectorAll(".select-style");
  const messageField = document.getElementById("message");

  if (!messageField) return;

  styleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const style = button.getAttribute("data-style");
      if (!style) return;

      const prefix = `Gewählter Stil: ${style}\n\n`;

      // Wenn schon drin -> nicht nochmal hinzufügen
      if (!messageField.value.startsWith(prefix)) {
        messageField.value = prefix + messageField.value.replace(/^Gewählter Stil:.*\n\n/, "");
      }

      // Fokus + Cursor ans Ende
      messageField.focus();
      messageField.selectionStart = messageField.selectionEnd = messageField.value.length;
    });
  });
});
