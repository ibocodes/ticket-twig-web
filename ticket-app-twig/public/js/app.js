// Main application logic
import { isAuthenticated, signOut } from "./auth.js";

// Global logout handler
window.logout = function () {
  signOut();
  window.location.href = "index.php";
};

// Check authentication on protected pages
window.checkAuth = function () {
  if (!isAuthenticated()) {
    window.location.href = "index.php";
    return false;
  }
  return true;
};

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  // Add event listeners as needed
});

