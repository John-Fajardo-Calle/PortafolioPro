const themeToggleButton = document.getElementById('theme-switch');
const body = document.body;
const overlayTransition = document.querySelector('.theme-transition-overlay');

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.className = savedTheme;
    themeToggleButton.checked = (savedTheme === 'dark');
});

themeToggleButton.addEventListener('change', () => {
    const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
    body.className = newTheme;
    localStorage.setItem('theme', newTheme);
});

// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
            targetElem.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.querySelector('#home button a').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});

// Retractable Navbar
let lastScrollTop = 0;
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.style.top = '-80px';
    } else {
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});

const skillData = {
    python: {
        logo: "assets/logos/python_logo.png",
        title: "Python",
        description: "Expert in automation, data analysis, and backend development using Python. My experience includes creating APIs, predictive tools, and data-driven systems.",
        details: [
            "Develop automation systems for repetitive tasks.",
            "Create machine learning models for predictive analysis.",
            "Build RESTful APIs for small and medium businesses.",
            "Perform advanced data analysis and visualizations."
        ]
    },
    cpp: {
        logo: "assets/logos/c++_logo.png",
        title: "C++",
        description: "Experienced in backend systems, algorithms, and simulations. Skilled in building optimized solutions for complex challenges.",
        details: [
            "Develop efficient algorithms for large datasets.",
            "Build inventory management systems.",
            "Design 2D/3D simulations and interactive games.",
            "Implement compression tools and network simulators."
        ]
    },
    matlab: {
        logo: "assets/logos/matlab_logo.png",
        title: "MATLAB",
        description: "Specialist in signal processing, optimization, and scientific simulations. Capable of creating tools for engineers and researchers.",
        details: [
            "Analyze and process signals with Fourier transformations.",
            "Simulate dynamic systems for engineering problems.",
            "Solve nonlinear optimization problems.",
            "Enhance images and perform real-time processing."
        ]
    },
    css: {
        logo: "assets/logos/css_logo.png",
        title: "CSS",
        description: "Proficient in creating modern web designs with a focus on user experience and interactivity. Strong in animation and layout design.",
        details: [
            "Design responsive and visually appealing websites.",
            "Create smooth animations and hover effects.",
            "Implement themes with dark/light mode toggles.",
            "Build complex layouts with Flexbox and Grid."
        ]
    },
    html: {
        logo: "assets/logos/html_logo.png",
        title: "HTML",
        description: "Expert in semantic HTML and form handling. Dedicated to creating web pages that are accessible and efficient.",
        details: [
            "Structure semantic web pages.",
            "Handle forms with advanced validation.",
            "Integrate content for SEO optimization.",
            "Develop accessible and user-friendly interfaces."
        ]
    },
    javascript: {
        logo: "assets/logos/js_logo.png",
        title: "JavaScript",
        description: "Experienced in building interactive frontends and dynamic web applications. Strong in API integration and visualization tools.",
        details: [
            "Build dynamic and interactive user interfaces.",
            "Integrate APIs for enhanced functionality.",
            "Develop single-page applications with frameworks.",
            "Create custom visualizations for data dashboards."
        ]
    }
};

const modal = document.querySelector('.skill-modal');
const overlay = document.querySelector('.modal-overlay');
const closeModalBtn = document.querySelector('.close-modal-btn');

document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', () => {
        const skill = card.dataset.skill;
        const skillInfo = skillData[skill];

        modal.querySelector('.left img').src = skillInfo.logo;
        modal.querySelector('.left img').alt = skillInfo.title + " Logo";
        modal.querySelector('.left h3').textContent = skillInfo.title;
        modal.querySelector('.modal-description').textContent = skillInfo.description;

        const detailsList = modal.querySelector('.modal-details');
        detailsList.innerHTML = '';
        skillInfo.details.forEach(detail => {
            const li = document.createElement('li');
            li.textContent = detail;
            detailsList.appendChild(li);
        });

        modal.classList.add('skill-modal-open');
        overlay.classList.add('modal-overlay-open');
    });
});

function closeModal() {
    modal.classList.remove('skill-modal-open');
    overlay.classList.remove('modal-overlay-open');
}

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    const nameValue = document.getElementById('name').value;
    const subjectInput = document.getElementById('subject');
    subjectInput.value = "Project Request - " + nameValue;
});