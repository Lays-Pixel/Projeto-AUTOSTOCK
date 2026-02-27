let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

fetch('', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
name: 'Nathan Sebhastian',
email: 'ns@mail.com'
}),
}).then(response => response.json())
.then(data => console.log(data))