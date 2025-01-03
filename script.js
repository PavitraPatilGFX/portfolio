const gallery = document.getElementById("portfolio-gallery");

// Manually specify the images and their descriptions
const images = [
    { src: "./assets/images/Pizza-Poster.png", alt: "Pizza Poster 🍕" },
    { src: "./assets/images/Burger-Poster.png", alt: "Burger Poster 🍔" }
    // Add more images here if needed
];

// Render each image
images.forEach(({ src, alt }) => {
    const imageCard = document.createElement("div");
    imageCard.classList.add("relative", "group", "rounded-corners");
    imageCard.innerHTML = `
        <img src="${src}" alt="${alt}" class="w-full rounded-lg shadow-md">
        <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
            <p class="text-white text-lg font-semibold">${alt}</p>
        </div>
    `;

    // Add click animation
    imageCard.addEventListener("click", () => {
        alert(`You clicked on: ${alt}`);
    });

    gallery.appendChild(imageCard);
});
