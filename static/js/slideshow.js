const slideshow = document.getElementById("slideshow");
let current = 0;

fetch("/api/images")
    .then(res => res.json())
    .then(files => {
        files.forEach((file, index) => {
            const img = document.createElement("img");
            img.src = `/static/images/${file}`;
            img.style.opacity = 0;
            if (index === 0) img.style.opacity = 1;
            slideshow.appendChild(img);
        });
        startSlideshow();
    });

function startSlideshow() {
    const imgs = slideshow.querySelectorAll("img");
    setInterval(() => {
        imgs[current].style.opacity = 0;
        current = (current + 1) % imgs.length;
        imgs[current].style.opacity = 1;
    }, 3000);
}