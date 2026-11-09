const projectDetails = [
  {
    "features": [
      "Connects local Jordanian fashion merchants with customers through web and mobile applications.",
      "Responsive React interfaces and RESTful APIs built with FastAPI.",
      "Uses Firebase, Redis, Cloudinary, and AI / ML."
    ],
    "images": [
      {
        "src": "images/projects/lynk-home.jpg",
        "alt": "Lynk Jo homepage with Arabic navigation and product sections",
        "caption": "Homepage",
        "height": 716,
        "width": 1272
      },
      {
        "src": "images/projects/lynk-image-search.jpg",
        "alt": "Lynk Jo visual product search upload screen",
        "caption": "Visual product search",
        "height": 716,
        "width": 1272
      }
    ]
  },
  {
    "features": [
      "Graduation project at Yarmouk University.",
      "Uses facial recognition to verify students before exams.",
      "Automates student attendance and check-in."
    ],
    "images": [
      {
        "src": "images/projects/face-attendance-login.jpg",
        "alt": "Yarmouk University exam attendance system login screen",
        "caption": "Graduation project — sign in",
        "height": 720,
        "width": 1280
      }
    ]
  },
  {
    "features": [
      "In progress.",
      "Helps developers start projects from requirements.",
      "Uses TypeScript, Node.js, Express.js, Supabase, PostgreSQL, and AI."
    ],
    "images": [
      {
        "src": "images/projects/prolink-home.jpg",
        "alt": "ProLink homepage showing its idea-to-architecture interface",
        "caption": "Homepage — in progress",
        "height": 716,
        "width": 1272
      }
    ]
  },
  {
    "features": [
      "In progress at Orange Coding Academy.",
      "An adaptive learning platform built with React, Laravel, and MySQL."
    ],
    "images": [
      {
        "src": "images/projects/skillpath-home.jpg",
        "alt": "SkillPath AI adaptive learning homepage and learning path preview",
        "caption": "Homepage — in progress",
        "height": 712,
        "width": 1265
      },
      {
        "src": "images/projects/skillpath-paths.jpg",
        "alt": "SkillPath AI learning paths for Laravel and Node.js",
        "caption": "Learning paths — in progress",
        "height": 712,
        "width": 1265
      }
    ]
  },
  {
    "features": [
      "Developed during Orange Coding Academy training.",
      "Fashion e-commerce project using object-oriented PHP and MySQL.",
      "Includes reviews and AI features for administrators."
    ],
    "images": [
      {
        "src": "images/projects/ecommerce-landing.png",
        "alt": "LUMIÈRE fashion storefront landing page from the eco-marc project",
        "caption": "Fashion storefront",
        "width": 1883,
        "height": 964
      },
      {
        "src": "images/projects/ecommerce-shop.png",
        "alt": "LUMIÈRE product catalog with category filters",
        "caption": "Product catalog",
        "width": 1868,
        "height": 988
      },
      {
        "src": "images/projects/ecommerce-admin-ai.png",
        "alt": "LUMIÈRE administrator AI business assistant screen",
        "caption": "Admin AI business assistant",
        "width": 1832,
        "height": 994
      }
    ]
  },
  {
    "features": [
      "Developed during Orange Coding Academy training.",
      "Supports role-based access and dental appointment booking.",
      "Uses a React frontend with PHP PDO and MySQL."
    ],
    "images": [
      {
        "src": "images/projects/dental-login.jpg",
        "alt": "DentalCare appointment system sign-in page",
        "caption": "Appointment system — sign in",
        "height": 712,
        "width": 1265
      }
    ]
  },
  {
    "features": [
      "Developed during Orange Coding Academy training.",
      "Education tracking project using React and JSON Server."
    ],
    "images": [
      {
        "src": "images/projects/edu-track-login.jpg",
        "alt": "EDU-TRACK instructor portal sign-in page",
        "caption": "Instructor portal — sign in",
        "height": 712,
        "width": 1265
      }
    ]
  }
];

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');
function closeMenu({ restoreFocus = false } = {}) {
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    if (restoreFocus) menuToggle.focus();
}
menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
    if (open) navigation.querySelector('a').focus();
});
navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') closeMenu({ restoreFocus: true });
});
document.addEventListener('click', event => {
    if (!event.target.closest('.header')) closeMenu();
});
window.matchMedia('(min-width: 769px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
});

const cards = Array.from(document.querySelectorAll('.projects .card'));
const filterButtons = document.querySelectorAll('.project-filters button');
filterButtons.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    let count = 0;
    cards.forEach(card => {
        const visible = filter === 'all' || card.dataset.category === filter || (filter === 'progress' && card.dataset.progress === 'true');
        card.hidden = !visible;
        if (visible) count++;
    });
    document.querySelector('.project-count').textContent = `${count} ${count === 1 ? 'project' : 'projects'}`;
}));

const projectDialog = document.querySelector('#project-dialog');
const closeProjectDialog = projectDialog.querySelector('.project-dialog-close');
const gallery = projectDialog.querySelector('.project-dialog-gallery');
const galleryControls = projectDialog.querySelector('.gallery-controls');
const galleryOriginal = projectDialog.querySelector('.gallery-original');
let projectOpener;
let activeImages = [];
let activeImage = 0;

function showImage(index) {
    if (!activeImages.length) return;
    activeImage = (index + activeImages.length) % activeImages.length;
    Array.from(gallery.children).forEach((figure, position) => { figure.hidden = position !== activeImage; });
    projectDialog.querySelector('.gallery-position').textContent = `${activeImage + 1} of ${activeImages.length}`;
    galleryOriginal.href = activeImages[activeImage].src;
    galleryOriginal.setAttribute('aria-label', `Open ${activeImages[activeImage].caption || 'screenshot'} at full size (opens in a new tab)`);
}
function openProject(card) {
    const details = projectDetails[Number(card.dataset.project)];
    if (!details || projectDialog.open) return;
    projectOpener = card.querySelector('.project-details-button');
    projectDialog.querySelector('#project-dialog-title').textContent = card.querySelector('.project-title').textContent;
    projectDialog.querySelector('#project-dialog-description').textContent = card.querySelector('.card-header > p').textContent;
    projectDialog.querySelector('.project-dialog-features').replaceChildren(...details.features.map(text => {
        const item = document.createElement('li');
        item.textContent = text;
        return item;
    }));
    projectDialog.querySelector('.project-dialog-technologies').replaceChildren(...Array.from(card.querySelectorAll('.techno-section li'), item => {
        const tag = document.createElement('li');
        tag.textContent = item.title;
        return tag;
    }));
    const link = projectDialog.querySelector('.project-dialog-link');
    const sourceLink = card.querySelector('a[href]');
    link.hidden = !sourceLink;
    if (sourceLink) link.href = sourceLink.href;
    else link.removeAttribute('href');
    activeImages = details.images;
    gallery.replaceChildren(...activeImages.map(({ src, alt, caption, width, height }, index) => {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        figure.hidden = index !== 0;
        img.src = src;
        img.alt = alt;
        img.width = width;
        img.height = height;
        img.loading = index === 0 ? 'eager' : 'lazy';
        img.decoding = 'async';
        figure.append(img);
        if (caption) {
            const label = document.createElement('figcaption');
            label.textContent = caption;
            figure.append(label);
        }
        return figure;
    }));
    gallery.hidden = activeImages.length === 0;
    galleryControls.hidden = activeImages.length < 2;
    galleryOriginal.hidden = activeImages.length === 0;
    showImage(0);
    projectDialog.showModal();
    document.body.classList.add('project-dialog-open');
    projectDialog.querySelector('.project-dialog-content').scrollTop = 0;
    closeProjectDialog.focus();
}

cards.forEach(card => {
    const button = card.querySelector('.project-details-button');
    button.setAttribute('aria-label', `View details for ${card.querySelector('.project-title').textContent}`);
    card.addEventListener('click', event => {
        if (event.target.closest('a[href]')) return;
        openProject(card);
    });
});
projectDialog.querySelector('.gallery-previous').addEventListener('click', () => showImage(activeImage - 1));
projectDialog.querySelector('.gallery-next').addEventListener('click', () => showImage(activeImage + 1));
projectDialog.addEventListener('keydown', event => {
    if (activeImages.length < 2) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        showImage(activeImage + (event.key === 'ArrowRight' ? 1 : -1));
    }
});
closeProjectDialog.addEventListener('click', () => projectDialog.close());
projectDialog.addEventListener('click', event => {
    const bounds = projectDialog.getBoundingClientRect();
    if (event.target === projectDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) projectDialog.close();
});
projectDialog.addEventListener('close', () => {
    document.body.classList.remove('project-dialog-open');
    projectOpener?.focus({ preventScroll: true });
});
