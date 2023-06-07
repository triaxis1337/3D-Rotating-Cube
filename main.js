const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu ul");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("responsive-menu");
});

function sendEmail() {
    // Code to send an email goes here
    // You can use a library like nodemailer or an API to handle email sending
    alert('Email sent successfully!');
  }
  