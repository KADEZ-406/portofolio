document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            this.reset(); // Kosongkan form
            $('#alertModal').modal('show'); // Tampilkan modal
        } else {
            alert('Terjadi kesalahan, silakan coba lagi.');
        }
    }).catch(error => {
        alert('Terjadi kesalahan, silakan coba lagi.');
    });
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll('.navbar-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Header Button Click Animation
document.querySelector(".btn-get-started").addEventListener("click", function () {
    const bioSection = document.querySelector(".bio-section");
    bioSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    bioSection.classList.add("highlight");
    setTimeout(() => bioSection.classList.remove("highlight"), 1000);
});

// Highlight Class (CSS Required)
const style = document.createElement("style");
style.innerHTML = `
    .highlight {
        animation: pulse 1s ease-out;
    }
    @keyframes pulse {
        0% {
            box-shadow: 0 0 10px #ff9800;
        }
        50% {
            box-shadow: 0 0 25px #ff9800;
        }
        100% {
            box-shadow: 0 0 10px #ff9800;
        }
    }
`;
document.head.appendChild(style);

// Dynamic Year in Footer
const footer = document.querySelector(".footer");
footer.innerHTML += `<br><small>© ${new Date().getFullYear()} Muhammad Rezky Setiansyah</small>`;

// Scroll-to-Top Button
const scrollButton = document.createElement("div");
scrollButton.innerHTML = "⬆️";
scrollButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #ff9800;
    color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
`;
document.body.appendChild(scrollButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollButton.style.opacity = 1;
    } else {
        scrollButton.style.opacity = 0;
    }
});

scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbarLinks = document.querySelector('.navbar-links');

    // Theme Toggle
    themeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeSwitch.checked = true;
    }

    // Hamburger Menu Toggle
    hamburgerMenu.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!navbarLinks.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            navbarLinks.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });

    // Contact Form Submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        fetch(this.action, {
            method: this.method,
            body: new FormData(this),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                this.reset();
                alert('Message sent successfully!');
            } else {
                alert('Error sending message. Please try again.');
            }
        }).catch(error => {
            alert('Error sending message. Please try again.');
        });
    });
});

