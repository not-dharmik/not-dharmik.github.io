
// Array of dynamic text for transition
const dynamicText = ["Dharmik", "Web Developer", "Data Engineer", "Problem Solver", "Tech Enthusiast", "Lifelong Learner", "Collaborator"];
let index = 0;
let dynamicTextElement = document.getElementById("dynamic-text");

// Function to change the dynamic text
function changeText() {
    dynamicTextElement.textContent = dynamicText[index];
    index = (index + 1) % dynamicText.length; // Loop back to the first text after the last one
}

// Change the text every 2 seconds
setInterval(changeText, 1000);

// Sticky Navbar when scrolling
window.onscroll = function() {
    let navbar = document.getElementById("navbar");
    if (window.pageYOffset > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

// Scroll effect for education cards
const educationCards = document.querySelectorAll('.education-card');

window.addEventListener('scroll', () => {
    educationCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardVisible = window.innerHeight - 150;
        if (cardTop < cardVisible) {
            card.classList.add('visible');
        }
    });
});


// Function to highlight active section in the navbar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.top-nav a');

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // Offset to adjust for nav height
        if (scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    // Remove active class from all links and add to current
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// Scroll effect for project cards
const projectCards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
    projectCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardVisible = window.innerHeight - 150;
        if (cardTop < cardVisible) {
            card.classList.add('visible');
        }
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Reveal Animation for About Me
const aboutMeSection = document.getElementById('about-me');
window.addEventListener('scroll', () => {
    const sectionTop = aboutMeSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
        aboutMeSection.classList.add('active');
    }
});
