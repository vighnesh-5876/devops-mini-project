function getWelcomeMessage() {
  return "Welcome! Your DevOps mini project is running.";
}

if (typeof document !== "undefined") {
  const button = document.getElementById("welcome-button");
  const message = document.getElementById("message");
  if (button && message) {
    button.addEventListener("click", () => {
      message.textContent = getWelcomeMessage();
    });
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { getWelcomeMessage };
}
