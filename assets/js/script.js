// Check if we are on GitHub Pages
const isGitHubPages = window.location.hostname === 'arendunn.github.io';

// Select all anchor tags in the page
const links = document.querySelectorAll('a');

// Loop through each link and adjust the href if on GitHub Pages
links.forEach(link => {
    const href = link.getAttribute('href');

    // If on GitHub Pages and the link is not a full URL (doesn't start with http:// or https://)
    if (isGitHubPages && !href.startsWith('http') && !href.startsWith('//')) {
        // If the link is a relative path, add '/arendunn-portfolio/' to it
        if (!href.startsWith('/')) {
            link.href = '/apexnet/' + href;
        }
    }
});

function goToServices() {
    const services = document.getElementById("services");
    if (services) {
        services.scrollIntoView({ behavior: "smooth" });
    }
}

function goToContactPage() {
    window.location.href = "contact.html";
}

function goToServicesPage() {
    window.location.href = "index.html";
}

function goToHomePage() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
    let lastScroll = 0;
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll) {
            navbar.style.transform = "translateY(-100%)"; // Hide
        } else {
            navbar.style.transform = "translateY(0)"; // Show
        }

        lastScroll = currentScroll;
    });
});