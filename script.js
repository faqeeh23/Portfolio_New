
// header border-bottom
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

