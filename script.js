// =========================
// TYPING ANIMATION
// =========================

const words = [
    "Information Technology Student",
    "Future Web Developer",
    "Future Full Stack Developer",
    "Always Learning New Things"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {
        typing.textContent = currentWord.substring(0, charIndex++);
    } else {
        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentWord.length + 1) {
        deleting = true;
        speed = 1200;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// =========================
// CURSOR GLOW
// =========================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    if (!glow) return;

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


// =========================
// SMOOTH SCROLL NAVBAR
// =========================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// =========================
// ACTIVE NAV SCROLL
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".section").forEach(section => {
    observer.observe(section);
});


// =========================
// BUTTON HOVER EFFECT
// =========================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });

});


// =========================
// CONSOLE MESSAGE (EASTER EGG)
// =========================

console.log(`
====================================

🚀 Portfolio Loaded Successfully

Created by:
Cristenold Sagarino

Keep learning. Keep building. 💙

====================================
`);