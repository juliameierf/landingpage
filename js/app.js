const topMenu = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const navItems = document.getElementsByClassName("menu__link");

const navBuilder = () => {
    let navCode = '';
    sections.forEach(section => {
        let sectionId = section.id; //store ids of sections
        let sectionDataNav = section.dataset.nav; //store datanav
        navCode += `<li><a class="menu__link ${sectionId}" href="#${sectionId}">${sectionDataNav}</a></li>`;
    });
    topMenu.innerHTML = navCode;
}

navBuilder();

function sectionActive () {
    for (const section of sections) {
        const boxPlace = section.getBoundingClientRect();

        if (boxPlace.top <= 150 && boxPlace.bottom >= 150) {
            const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.add("active");
            section.classList.add("your-active-class");
        } else {
            const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.remove("active");
            section.classList.remove("your-active-class");
            
            
        }
    }
}

document.addEventListener('scroll', function() {
    sectionActive();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "inline-block";
    } else {
        topButton.style.display = "none";
    }

}
