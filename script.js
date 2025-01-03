const gallery = document.getElementById("portfolio-gallery");

// Fetch all images from the assets/images folder
async function fetchImages() {
    const response = await fetch('./assets/images');
    const imageList = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(imageList, 'text/html');
    const images = Array.from(doc.querySelectorAll('a'))
        .map(link => link.href)
        .filter(link => /\.(jpg|jpeg|png|gif|svg)$/.test(link));

    // Render each image
    images.forEach(image => {
        const imageName = image.split('/').pop().split('.')[0];
        const imageCard = document.createElement('div');
        imageCard.classList.add('relative', 'group', 'rounded-corners');
        imageCard.innerHTML = `
            <img src="${image}" alt="${imageName}" class="w-full rounded-lg shadow-md">
            <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
                <p class="text-white text-lg font-semibold">${imageName} 🎨</p>
            </div>
        `;

        // Add click animation
        imageCard.addEventListener('click', () => {
            alert(`You clicked on: ${imageName}`);
        });

        gallery.appendChild(imageCard);
    });
}

fetchImages();
