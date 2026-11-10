const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  }));
}
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const recipient = "support@livoraproduction.com";
    if (!recipient || recipient.includes("REPLACE_WITH")) {
      alert("Please update the official email address in index.html and script.js before publishing.");
      return;
    }
    const subject = encodeURIComponent("Website enquiry — " + data.get("subject"));
    const body = encodeURIComponent(
      "Name: " + data.get("name") + "\nEmail: " + data.get("email") +
      "\nInterest: " + data.get("subject") + "\n\nMessage:\n" + data.get("message")
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}
