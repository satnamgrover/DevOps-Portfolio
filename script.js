/* =========================================================
   SATNAM DEVOPS PORTFOLIO
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   01. PORTFOLIO CONFIGURATION
   =========================================================
   
   EDIT ONLY THESE VALUES.
   ========================================================= */

const portfolioConfig = {

    name: "Satnam",

    email: "YOUR_EMAIL@gmail.com",

    github: "https://github.com/YOUR_USERNAME",

    linkedin: "https://www.linkedin.com/in/YOUR_USERNAME",

    resume: "assets/resume.pdf"
};


/* =========================================================
   02. DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeNavigation();

    initializeScrollEffects();

    initializeRevealAnimation();

    initializeBackToTop();

    initializeHero3D();

    initializeTerminal();

    initializeSkillAnimation();

    initializeProjectInteraction();

    initializeDynamicLinks();

});


/* =========================================================
   03. MOBILE NAVIGATION
   ========================================================= */

function initializeNavigation() {

    const menuButton =
        document.querySelector(".menu-button");

    const navLinks =
        document.querySelector(".nav-links");

    const navItems =
        document.querySelectorAll(".nav-link");


    if (!menuButton || !navLinks) {
        return;
    }


    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        const isOpen =
            navLinks.classList.contains("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    navItems.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    document.addEventListener("click", event => {

        const clickedInsideNav =
            navLinks.contains(event.target);

        const clickedMenu =
            menuButton.contains(event.target);


        if (
            !clickedInsideNav &&
            !clickedMenu
        ) {

            navLinks.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}


/* =========================================================
   04. NAVBAR SCROLL EFFECT
   ========================================================= */

function initializeScrollEffects() {

    const navbar =
        document.querySelector(".navbar");

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    function updateNavbar() {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }


    function updateActiveSection() {

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");


            const target =
                link.getAttribute("href");


            if (
                target ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        () => {

            updateNavbar();

            updateActiveSection();

        },
        { passive: true }
    );


    updateNavbar();

    updateActiveSection();

}


/* =========================================================
   05. SCROLL REVEAL
   ========================================================= */

function initializeRevealAnimation() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    if (!elements.length) {
        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -50px 0px"
            }
        );


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================================
   06. BACK TO TOP
   ========================================================= */

function initializeBackToTop() {

    const button =
        document.querySelector(
            ".back-to-top"
        );


    if (!button) {
        return;
    }


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 700) {

                button.classList.add("show");

            } else {

                button.classList.remove("show");

            }

        },
        { passive: true }
    );


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   07. HERO 3D MOUSE MOVEMENT
   ========================================================= */

function initializeHero3D() {

    const scene =
        document.querySelector(".scene");

    const heroVisual =
        document.querySelector(".hero-visual");


    if (!scene || !heroVisual) {
        return;
    }


    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    const isTouchDevice =
        window.matchMedia(
            "(pointer: coarse)"
        ).matches;


    if (
        prefersReducedMotion ||
        isTouchDevice
    ) {

        return;

    }


    let targetX = 0;

    let targetY = 0;

    let currentX = 0;

    let currentY = 0;


    heroVisual.addEventListener(
        "pointermove",
        event => {

            const rect =
                heroVisual.getBoundingClientRect();


            const x =
                (
                    event.clientX -
                    rect.left
                ) / rect.width;


            const y =
                (
                    event.clientY -
                    rect.top
                ) / rect.height;


            targetX =
                (x - 0.5) * 14;


            targetY =
                (y - 0.5) * -14;

        }
    );


    heroVisual.addEventListener(
        "pointerleave",
        () => {

            targetX = 0;

            targetY = 0;

        }
    );


    function animateScene() {

        currentX +=
            (targetX - currentX) * 0.05;

        currentY +=
            (targetY - currentY) * 0.05;


        scene.style.transform =
            `
            rotateX(${currentY}deg)
            rotateY(${currentX}deg)
            translateY(-4px)
            `;


        requestAnimationFrame(
            animateScene
        );

    }


    animateScene();

}


/* =========================================================
   08. TERMINAL ANIMATION
   ========================================================= */

function initializeTerminal() {

    const terminal =
        document.querySelector(
            ".terminal-body"
        );


    if (!terminal) {
        return;
    }


    const dynamicOutput =
        document.querySelector(
            "[data-terminal-dynamic]"
        );


    if (!dynamicOutput) {
        return;
    }


    const messages = [

        "Git → Jenkins → Docker → Registry → Deploy",

        "Containerizing applications with Docker...",

        "Automating CI/CD pipelines...",

        "Deploying workloads to Kubernetes...",

        "Working with AWS ECR and EKS...",

        "Monitoring applications with Prometheus + Grafana..."

    ];


    let messageIndex = 0;

    let characterIndex = 0;

    let deleting = false;


    function typeMessage() {

        const currentMessage =
            messages[messageIndex];


        if (!deleting) {

            dynamicOutput.textContent =
                currentMessage.substring(
                    0,
                    characterIndex + 1
                );

            characterIndex++;


            if (
                characterIndex ===
                currentMessage.length
            ) {

                deleting = true;

                setTimeout(
                    typeMessage,
                    1800
                );

                return;

            }

        } else {

            dynamicOutput.textContent =
                currentMessage.substring(
                    0,
                    characterIndex - 1
                );

            characterIndex--;


            if (characterIndex === 0) {

                deleting = false;

                messageIndex =
                    (
                        messageIndex + 1
                    ) % messages.length;

            }

        }


        const speed =
            deleting ? 30 : 55;


        setTimeout(
            typeMessage,
            speed
        );

    }


    typeMessage();

}


/* =========================================================
   09. SKILL BAR ANIMATION
   ========================================================= */

function initializeSkillAnimation() {

    const skillCards =
        document.querySelectorAll(
            ".skill-card"
        );


    if (!skillCards.length) {
        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        !entry.isIntersecting
                    ) {

                        return;

                    }


                    const bar =
                        entry.target.querySelector(
                            ".skill-bar span"
                        );


                    if (!bar) {
                        return;
                    }


                    const level =
                        bar.style
                            .getPropertyValue(
                                "--level"
                            );


                    bar.style.setProperty(
                        "--level",
                        "0%"
                    );


                    requestAnimationFrame(
                        () => {

                            setTimeout(
                                () => {

                                    bar.style.setProperty(
                                        "--level",
                                        level
                                    );

                                },
                                150
                            );

                        }
                    );


                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.3
            }
        );


    skillCards.forEach(card => {

        observer.observe(card);

    });

}


/* =========================================================
   10. PROJECT HOVER INTERACTION
   ========================================================= */

function initializeProjectInteraction() {

    const projects =
        document.querySelectorAll(
            ".project-case"
        );


    if (!projects.length) {
        return;
    }


    const isTouchDevice =
        window.matchMedia(
            "(pointer: coarse)"
        ).matches;


    if (isTouchDevice) {
        return;
    }


    projects.forEach(project => {

        project.addEventListener(
            "mousemove",
            event => {

                const rect =
                    project.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) / rect.width;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) / rect.height;


                const rotateX =
                    (0.5 - y) * 2;


                const rotateY =
                    (x - 0.5) * 2;


                project.style.transform =
                    `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-2px)
                    `;

            }
        );


        project.addEventListener(
            "mouseleave",
            () => {

                project.style.transform =
                    "";

            }
        );

    });

}


/* =========================================================
   11. DYNAMIC CONTACT LINKS
   ========================================================= */

function initializeDynamicLinks() {

    const emailLinks =
        document.querySelectorAll(
            "[data-email]"
        );

    const githubLinks =
        document.querySelectorAll(
            "[data-github]"
        );

    const linkedinLinks =
        document.querySelectorAll(
            "[data-linkedin]"
        );

    const resumeLinks =
        document.querySelectorAll(
            "[data-resume]"
        );


    emailLinks.forEach(link => {

        link.href =
            `mailto:${portfolioConfig.email}`;

        if (
            link.dataset.emailText !==
            undefined
        ) {

            link.textContent =
                portfolioConfig.email;

        }

    });


    githubLinks.forEach(link => {

        link.href =
            portfolioConfig.github;

        link.target = "_blank";

        link.rel =
            "noopener noreferrer";

    });


    linkedinLinks.forEach(link => {

        link.href =
            portfolioConfig.linkedin;

        link.target = "_blank";

        link.rel =
            "noopener noreferrer";

    });


    resumeLinks.forEach(link => {

        link.href =
            portfolioConfig.resume;

    });


    const nameElements =
        document.querySelectorAll(
            "[data-name]"
        );


    nameElements.forEach(element => {

        element.textContent =
            portfolioConfig.name;

    });

}


/* =========================================================
   12. POINTER GLOW
   ========================================================= */

function initializePointerGlow() {

    const cards =
        document.querySelectorAll(
            ".skill-card, .language-card"
        );


    if (!cards.length) {
        return;
    }


    const isTouchDevice =
        window.matchMedia(
            "(pointer: coarse)"
        ).matches;


    if (isTouchDevice) {
        return;
    }


    cards.forEach(card => {

        card.addEventListener(
            "pointermove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                card.style.setProperty(
                    "--mouse-x",
                    `${x}px`
                );


                card.style.setProperty(
                    "--mouse-y",
                    `${y}px`
                );

            }
        );

    });

}


/* =========================================================
   13. COPY EMAIL
   ========================================================= */

function initializeEmailCopy() {

    const emailButtons =
        document.querySelectorAll(
            "[data-copy-email]"
        );


    emailButtons.forEach(button => {

        button.addEventListener(
            "click",
            async () => {

                try {

                    await navigator.clipboard.writeText(
                        portfolioConfig.email
                    );


                    const original =
                        button.textContent;


                    button.textContent =
                        "Copied";


                    setTimeout(
                        () => {

                            button.textContent =
                                original;

                        },
                        1500
                    );

                } catch (error) {

                    console.log(
                        "Clipboard unavailable."
                    );

                }

            }
        );

    });

}


/* =========================================================
   14. CURRENT YEAR
   ========================================================= */

function initializeCurrentYear() {

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );


    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });

}


/* =========================================================
   15. INITIALIZE OPTIONAL FEATURES
   ========================================================= */

initializePointerGlow();

initializeEmailCopy();

initializeCurrentYear();


/* =========================================================
   16. CONSOLE MESSAGE
   ========================================================= */

console.log(
`
╔══════════════════════════════════════╗
║        SATNAM // DEVOPS ENGINEER     ║
╠══════════════════════════════════════╣
║                                      ║
║  Git → CI/CD → Docker → Kubernetes   ║
║       → Cloud → Monitoring            ║
║                                      ║
║  Portfolio system initialized.       ║
║                                      ║
╚══════════════════════════════════════╝
`
);