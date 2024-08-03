// Modal handling (remains unchanged)
var modal = document.getElementById('modal');
var userBtn = document.getElementById('user-btn');
var closeBtn = document.getElementsByClassName('close-btn')[0];

// Show the modal
userBtn.onclick = function() {
    modal.style.display = 'flex';
}

// Close the modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close the modal if user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Navigation and Title Click Handling
const navLinks = document.querySelectorAll('.nav-item a');
const logo = document.querySelector('.logo');
const heroTitle = document.querySelector('.hero-title');

// Function to reset active states
function resetActiveStates() {
    navLinks.forEach(link => link.classList.remove('active'));
    logo.classList.remove('active');
    heroTitle.classList.remove('active');
}

// Add click event listeners
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        resetActiveStates();
        this.classList.add('active');
    });
});

logo.addEventListener('click', function() {
    resetActiveStates();
    this.classList.add('active');
});

heroTitle.addEventListener('click', function() {
    resetActiveStates();
    this.classList.add('active');
});



