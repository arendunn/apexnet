function goToServices() {
    const services = document.getElementById("services");
    if (services) {
        services.scrollIntoView({ behavior: "smooth" });
    }
}

function goToContact() {
    window.location.href = "../contact/";
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