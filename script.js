// Preloader
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0"; // Fade out
    setTimeout(() => {
        preloader.style.display = "none"; // Hide after fade-out
    }, 500); // Matches fade-out transition duration
});

// Portfolio Images
const gallery = document.getElementById("portfolio-gallery");

// Manually specify the images and their descriptions
const images = [
    { src: "./assets/images/Pizza-Poster.png", alt: "Pizza Poster 🍕" },
    { src: "./assets/images/Burger-Poster.png", alt: "Burger Poster 🍔" }
];

// Render each image
images.forEach(({ src, alt }) => {
    const imageCard = document.createElement("div");
    imageCard.classList.add("portfolio-image-container");

    imageCard.innerHTML = `
        <img src="${src}" alt="${alt}" class="rounded-lg">
        <div class="portfolio-image-overlay">
            <p>${alt}</p>
        </div>
    `;

    gallery.appendChild(imageCard);
});
