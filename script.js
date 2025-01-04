// Loading Screen
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.add("hidden");
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
            <button class="preview-button" data-src="${src}" aria-label="Preview ${alt}">Preview</button>
        </div>
    `;

    gallery.appendChild(imageCard);
});

// Handle Preview Button Click
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("preview-button")) {
        const imageUrl = e.target.getAttribute("data-src");
        window.open(imageUrl, "_blank");
    }
});
