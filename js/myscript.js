// Function to open the modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.querySelector(".modal-overlay").style.display = "block";
}

// Function to close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.querySelector(".modal-overlay").style.display = "none";
}

// Attach click event to the button
document.getElementById("openModalBtn").addEventListener("click", openModal);

function toggleMobileMenu() {
  let mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("open");
}
