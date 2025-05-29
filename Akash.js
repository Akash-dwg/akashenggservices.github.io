document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your message has been sent. We'll get back to you shortly!");
  });
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("service-query-form").addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! Your query has been submitted.");
    });
  });
  // Sign Up
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Sign up successful! You can now log in.");
    window.location.href = "index.html";
  });
}

// Log In
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (savedUser && savedUser.email === email && savedUser.password === password) {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid email or password.");
    }
  });
}