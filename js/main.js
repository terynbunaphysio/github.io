function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const updateYearsExperience = () => {
    const currentYear = new Date().getFullYear();
    const experienceSpans = document.querySelectorAll('.years-experience');
    
    experienceSpans.forEach(span => {
        const yearText = span.textContent.trim();
        const startYear = parseInt(yearText);
        
        if (!isNaN(startYear)) {
            const yearsExperience = currentYear - startYear;
            span.textContent = yearsExperience;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateYearsExperience();
    
    const nav = document.querySelector('.topnav');
    const header = document.querySelector('.header');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.boundingClientRect.bottom < 100) {
                    nav.classList.add('stuck');
                } else {
                    nav.classList.remove('stuck');
                }
            });
        },
        {
            // Watch for when header moves out of viewport
            threshold: [0],
            rootMargin: '-50px'
        }
    );

    observer.observe(header);
});