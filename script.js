document.addEventListener('DOMContentLoaded', function () {
    const projectsContainer = document.getElementById('projects-container');
    const modal = document.getElementById('modal');
    const modalVideo = document.getElementById('modal-video');
    const modalDescription = document.getElementById('modal-description');
    const modalTools = document.getElementById('modal-tools');
    const modalLink = document.getElementById('modal-link');
    const closeModal = document.querySelector('.close');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');
    const binaryAnimation = document.getElementById('binaryAnimation');

    // Sample data object
// Sample data object
const projects = [
    {
        title: "Language Learning App",
        videoUrl: "videos/learn.mp4",
        description: "Language learning app modeled by duolingo, hey japan. supports multilanguage+ai functionality.",
        tools: "HTML, CSS, JavaScript,flask,openai",
        image: "images/learning.png",
        link: "",
        demo: "https://bayan-app.netlify.app/"
    },
    {
        title: "3D Vulkan Rpg",
        videoUrl: "videos/3d.mp4",
        description: "3D action rpg created using vulkan",
        tools: "C,Vulkan,sdl",
        image: "images/3d.png", 
        link: "https://github.com/mwagg22/IT485-Action-RPG-Vulkan"
    },
    {
        title: "2d Megaman Sdl Clone",
        videoUrl: "videos/2d.mp4",
        description: "2D megaman style game",
        tools: "C,sdl",
        image: "images/2d.png", 
        link: "https://github.com/mwagg22/IT-276-2d-Shooter-SDL"
    },
    {
        title: "Text Replacer Chrome extention",
        videoUrl: "videos/translator.mp4",
        description: "Chrome extention to transcribe words using json keyvalue map",
        tools: "Node.js,Javascript",
        image: "images/translator.png",
        link: "https://github.com/mwagg22/chrome-translator"
    },
    {
        title: "3d Ant simulation",
        videoUrl: "videos/ants.mp4",
        description: "Ant simulation to replicate movement in different scenarios",
        tools: "C++,OpenGL",
        image: "images/ants.png",
        link: ""
    },
    {
        title: "Quake 4 Spyro Mod",
        videoUrl: "videos/spyro.mp4",
        description: "A 3d mod in quake 4",
        tools: "C++,ID Engine 4",
        image: "images/mod.png",
        link: "https://github.com/mwagg22/it-266-Quake4-ModL"
    },
    {
        title: "Instagram Bot",
        videoUrl: "",
        description: "A simple selenium bot for certain actions on instagram",
        tools: "Python, Selenium",
        image: "images/bot.png",
        link: "https://github.com/mwagg22/igbot"
    },
    {
        title: "Sonic OpenGym ML",
        videoUrl: "videos/sonicAI.mp4",
        description: "Reinforcement learning to play sonic the hedgehog 2",
        tools: "Python, OpenAI",
        image: "images/sonic.png",
        link: ""
    }
];

// Function to create project cards
function createProjectCards() {
    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h2>${project.title}</h2>
            <img src="${project.image}" alt="${project.title}">
            <p>Click to see more details</p>
        `;

        // Add click event to show modal
        card.addEventListener('click', () => {
            modalVideo.src = project.videoUrl;
            modalDescription.textContent = project.description;
            modalTools.textContent = `Tools used: ${project.tools}`;
            modal.style.display = 'block';
            if(project.link)
                modalLink.innerHTML = `<a href="${project.link}" target="_blank" class="btn">
            <i class="fab fa-github"></i>
        </a>`;
            if(project.demo)
            modalLink.innerHTML = `<a href="${project.demo}" target="_blank" class="btn">
        <i class="fab fa-link"></i>
    </a>`;
        });

        projectsContainer.appendChild(card);
    });
}
    // Call the function to populate cards
    createProjectCards();

    // Close modal functionality
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        modalVideo.src = ''; // Stop the video when modal is closed
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalVideo.src = ''; // Stop the video when modal is closed
        }
    });

    // Smooth scrolling for navbar links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu after clicking a link
            if (navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
            }
        });
    });

    // Hamburger menu functionality
    mobileMenu.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });

    // Binary Animation
    function createBinaryStream() {
        const binaryChars = '01';
        const columnCount = Math.floor(window.innerWidth / 20); // Adjust based on font size
        for (let i = 0; i < columnCount; i++) {
            const column = document.createElement('div');
            column.classList.add('binary-column');
            // column.style.left = `${i * 20}px`; // Adjust based on font size
            column.style.animationDuration = `${Math.random() * 5 + 3}s`; // Randomize speed
            column.textContent = Array(50).fill(0).map(() => binaryChars[Math.floor(Math.random() * 2)]).join('');
            binaryAnimation.appendChild(column);

            // Randomly light up characters
            setInterval(() => {
                const randomIndex = Math.floor(Math.random() * column.textContent.length);
                const newText = column.textContent.split('');
                newText[randomIndex] = binaryChars[Math.floor(Math.random() * 2)];
                column.textContent = newText.join('');
            }, 100);
        }
    }

    // createBinaryStream();
});

// Particle Animation
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(0, 255, 0, ${Math.random() * 0.5 + 0.1})`;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const particles = [];
for (let i = 0; i < 50; i++) {
    particles.push(new Particle());
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateParticles);
}

animateParticles();