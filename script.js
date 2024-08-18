function showSection(section, button) {
    const sections = document.getElementsByClassName('dataDiv');

    Array.from(sections).forEach((dataDiv) => {
        dataDiv.classList.remove('active');
    });

    document.getElementById(section + 'Data').classList.add('active');

    const buttons = document.querySelectorAll('.buttonHead');
    buttons.forEach((btn) => {
        btn.classList.remove('active');
    });

    button.classList.add('active');
}
function on() {
    document.getElementById("overlay").style.display = "flex";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('.LinksId a');

    function onScroll() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 70;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
});

function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById("myDropdown").classList.toggle("show");
}

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('.menuLinks a');

    function onScroll() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 70;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
});

gsap.to(".LinksId a", {
    opacity: 1,
    y: 0,
    duration: 0.2,
    stagger: 0.2,
});
gsap.to(".MyProfileBg", {
    opacity: 1,
    x: 0,
    duration: 0.8,
});


gsap.to(".profileData .homeAnimate", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.2,
});

gsap.fromTo(".progressContainer .percent98",
    { width: "0%" },
    {
        width: "98%",
        duration: 2,
        scrollTrigger: {
            trigger: ".progressContainer",
            scroller: "body",
        }
    }
);

gsap.fromTo(".progressContainer .percent99",
    { width: "0%" },
    {
        width: "99%",
        duration: 2,
        scrollTrigger: {
            trigger: ".progressContainer",
            scroller: "body",
        }
    }
);
gsap.fromTo(".progressContainer .percent95",
    { width: "0%" },
    {
        width: "95%",
        duration: 2,
        scrollTrigger: {
            trigger: ".progressContainer",
            scroller: "body",
        }
    }
);
gsap.fromTo(".progressContainer .percent97",
    { width: "0%" },
    {
        width: "97%",
        duration: 2,
        scrollTrigger: {
            trigger: ".progressContainer",
            scroller: "body",
        }
    }
);
gsap.fromTo(".progressContainer .percent96",
    { width: "0%" },
    {
        width: "98%",
        duration: 2,
        scrollTrigger: {
            trigger: ".progressContainer",
            scroller: "body",
        }
    }
);
gsap.fromTo(".progressContainer .percent90",
    { width: "0%" },
    {
        width: "90%",
        duration: 2,
        scrollTrigger: {
            trigger: ".progressContainer",
            scroller: "body",
        }
    }
);
gsap.fromTo(".progressContainer .percent85",
    { width: "0%" },
    {
        width: "85%",
        duration: 2,
        scrollTrigger: {
            trigger: ".progressContainer",
            scroller: "body",
        }
    }
);

gsap.fromTo(".progressContainer .percent88",
    { width: "0%" },
    {
        width: "88%",
        duration: 2,
        scrollTrigger: {
            trigger: ".progressContainer",
            scroller: "body",
        }
    }
);
const items = document.querySelectorAll(".noDATA");

gsap.from(".progressContainer .progressText", {
    textContent: 0,
    duration: 2,
    ease: Power1.easeIn,
    snap: { textContent: 1 },
    scrollTrigger: {
        trigger: ".progressContainer",
        scroller: "body",

    },
});
gsap.fromTo(".mainProjectContainer .pojectBg",
    {
        y: "30%",
        opacity: "0",
    },
    {
        y: "0%",
        opacity: "1",
        duration: 0.5,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".mainProjectContainer",
            scroller: "body",
        }
    }
);

gsap.fromTo(".buttonAboutMe .buttonHead",
    {
        x: "-70%",
        opacity: "0",
    },
    {
        x: "0%",
        opacity: "1",
        duration: 0.5,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".buttonAboutMe",
            scroller: "body",
        }
    }
);

gsap.fromTo(".formContainer .animateInput",
    {
        scale: "0",
        opacity: "0",
    },
    {
        scale: 1,
        opacity: "1",
        duration: 0.5,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".formContainer",
            scroller: "body",
        }
    }
);

gsap.fromTo(".adobeSkils .skillsDataHead",
    {
        y: "50%",
        opacity: "0",
    },
    {
        y: "0%",
        opacity: "1",
        duration: 0.5,
        scrollTrigger: {
            trigger: ".adobeSkils",
            scroller: "body",
        }
    }
);
function refresh() {
    window.location.reload();
}