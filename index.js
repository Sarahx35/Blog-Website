
// Opening and closing mobile hamburger menu bar in mobile view 
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// Updating the footer year automatically
const copyrightName = "Acem Inc.";
const copyrightDate = new Date();
document.write("&copy; " + copyrightName + " " + copyrightDate.getFullYear());

