
// header border-bottom on scroll 
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// smoth loading
document.addEventListener("DOMContentLoaded", function(){
    const revealElements = document.querySelectorAll(".reveal");
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(function(entries , observer){
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });

    }, revealOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
})

// Project details use the existing card content as the source of truth.
const projectDetails = [
    { features: ['Connects local Jordanian fashion merchants with customers through web and mobile applications.', 'Responsive React interfaces and RESTful APIs built with FastAPI.', 'Uses Firebase, Redis, Cloudinary, and AI / ML.'], images: [] },
    { features: ['Graduation project at Yarmouk University.', 'Uses facial recognition to verify students before exams.', 'Automates student attendance and check-in.'], images: [] },
    { features: ['In progress.', 'Helps developers start projects from requirements.', 'Uses TypeScript, Node.js, Express.js, Supabase, PostgreSQL, and AI.'], images: [] },
    { features: ['In progress at Orange Coding Academy.', 'An adaptive learning platform built with React, Laravel, and MySQL.'], images: [] },
    { features: ['Developed during Orange Coding Academy training.', 'Fashion e-commerce project using object-oriented PHP and MySQL.', 'Includes reviews and AI features for administrators.'], images: [] },
    { features: ['Developed during Orange Coding Academy training.', 'Supports role-based access and dental appointment booking.', 'Uses a React frontend with PHP PDO and MySQL.'], images: [] },
    { features: ['Developed during Orange Coding Academy training.', 'Education tracking project using React and JSON Server.'], images: [] }
];

const projectDialog = document.querySelector('#project-dialog');
const closeProjectDialog = projectDialog.querySelector('.project-dialog-close');
let projectOpener;

function openProject(card) {
    const details = projectDetails[Number(card.dataset.project)];
    if (!details || projectDialog.open) return;
    projectOpener = card.querySelector('.project-details-button');
    projectDialog.querySelector('#project-dialog-title').textContent = card.querySelector('h2').textContent;
    projectDialog.querySelector('#project-dialog-description').textContent = card.querySelector('.card-header > p').textContent;
    const features = projectDialog.querySelector('.project-dialog-features');
    features.replaceChildren(...details.features.map(text => {
        const item = document.createElement('li');
        item.textContent = text;
        return item;
    }));
    const technologies = projectDialog.querySelector('.project-dialog-technologies');
    technologies.replaceChildren(...Array.from(card.querySelectorAll('.techno-section li'), item => {
        const tag = document.createElement('li');
        tag.textContent = item.title;
        return tag;
    }));
    const link = projectDialog.querySelector('.project-dialog-link');
    const sourceLink = card.querySelector('a[href]');
    link.hidden = !sourceLink;
    if (sourceLink) link.href = sourceLink.href;
    else link.removeAttribute('href');
    const gallery = projectDialog.querySelector('.project-dialog-gallery');
    gallery.replaceChildren(...details.images.map(({ src, alt }) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        img.loading = 'lazy';
        return img;
    }));
    gallery.hidden = details.images.length === 0;
    projectDialog.showModal();
    document.body.classList.add('project-dialog-open');
    projectDialog.scrollTop = 0;
    closeProjectDialog.focus();
}

document.querySelectorAll('.projects .card').forEach(card => {
    const button = card.querySelector('.project-details-button');
    button.setAttribute('aria-label', `View details for ${card.querySelector('h2').textContent}`);
    card.addEventListener('click', event => {
        // Website links keep their original behavior.
        if (event.target.closest('a[href]')) return;
        openProject(card);
    });
});

closeProjectDialog.addEventListener('click', () => projectDialog.close());
projectDialog.addEventListener('click', event => {
    const bounds = projectDialog.getBoundingClientRect();
    if (event.target === projectDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) {
        projectDialog.close();
    }
});
projectDialog.addEventListener('close', () => {
    document.body.classList.remove('project-dialog-open');
    projectOpener?.focus({ preventScroll: true });
});

