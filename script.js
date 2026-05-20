/* ==========================================================================
   PRANJAY GULERIA PORTFOLIO — INTERACTION & ANIMATION LOGIC
   Uses GSAP & ScrollTrigger for high-fidelity animations
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Accessibility: Detect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        document.body.classList.add('no-animations');
        // Instantly show all reveal elements
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            el.style.opacity = "1";
            el.style.transform = "none";
        });
        document.querySelectorAll('.skill-bar-inner').forEach(bar => {
            bar.style.width = bar.getAttribute('data-target');
        });
        return; // Skip complex animation initialization
    }

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // 2. Custom Cursor with Trailing Ring (Desktop Only)
    const cursorDot = document.querySelector(".custom-cursor-dot");
    const cursorRing = document.querySelector(".custom-cursor-ring");

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice && cursorDot && cursorRing) {
        // Show cursor elements
        cursorDot.style.display = "block";
        cursorRing.style.display = "block";
        document.body.style.cursor = "none"; // Hide default cursor

        // Cursor quick setters for extreme performance
        const setCursorX = gsap.quickSetter(cursorDot, "left", "px");
        const setCursorY = gsap.quickSetter(cursorDot, "top", "px");
        const setRingX = gsap.quickSetter(cursorRing, "left", "px");
        const setRingY = gsap.quickSetter(cursorRing, "top", "px");

        let mouse = { x: 0, y: 0 };
        window.addEventListener("mousemove", (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            setCursorX(mouse.x);
            setCursorY(mouse.y);
            
            // Update CSS variables for interactive background glow
            document.documentElement.style.setProperty('--mouse-x', `${mouse.x}px`);
            document.documentElement.style.setProperty('--mouse-y', `${mouse.y}px`);
        });

        // Sluggish trailing effect for the outer ring using GSAP ticker
        gsap.ticker.add(() => {
            const dt = 1.0 - Math.exp(-gsap.ticker.deltaRatio() * 0.15);
            
            // Get current ring positions
            const currentX = parseFloat(cursorRing.style.left) || 0;
            const currentY = parseFloat(cursorRing.style.top) || 0;
            
            // Interpolate towards mouse position
            const targetX = currentX + (mouse.x - currentX) * dt;
            const targetY = currentY + (mouse.y - currentY) * dt;
            
            setRingX(targetX);
            setRingY(targetY);
        });

        // Hover listeners for links and interactive items
        const hoverables = document.querySelectorAll("a, button, .card, .magnetic, .timeline-item");
        hoverables.forEach((el) => {
            el.addEventListener("mouseenter", () => {
                // Determine if accent secondary or primary hover should be used
                if (el.classList.contains("btn-primary") || el.closest(".skills-block:nth-child(2)")) {
                    // Accent secondary (warm orange) cursor for secondary elements if needed, otherwise primary
                    if (el.closest(".skills-block:nth-child(2)")) {
                        document.body.classList.add("cursor-secondary-hover");
                    } else {
                        document.body.classList.add("cursor-hover");
                    }
                } else {
                    document.body.classList.add("cursor-hover");
                }
            });
            el.addEventListener("mouseleave", () => {
                document.body.classList.remove("cursor-hover");
                document.body.classList.remove("cursor-secondary-hover");
            });
        });
    }

    // 3. Hero Section Typing Simulation
    const terminalSubline = document.getElementById("terminalSubline");
    if (terminalSubline) {
        const lines = terminalSubline.querySelectorAll(".terminal-line");
        
        const typeLine = (lineIndex) => {
            if (lineIndex >= lines.length) return;
            const line = lines[lineIndex];
            const fullText = line.innerHTML;
            line.innerHTML = `<span class="terminal-prompt">&gt;</span> `;
            line.classList.add("typing");
            
            // Extract the actual text content after the prompt
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = fullText;
            const promptNode = tempDiv.querySelector(".terminal-prompt");
            if (promptNode) tempDiv.removeChild(promptNode);
            const textToType = tempDiv.textContent || tempDiv.innerText;

            let charIndex = 0;
            const typeChar = () => {
                if (charIndex < textToType.length) {
                    line.innerHTML += textToType.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeChar, 25 + Math.random() * 20); // Dynamic natural typing speed
                } else {
                    line.classList.remove("typing");
                    if (lineIndex === lines.length - 1) {
                        line.classList.add("blink-last");
                    } else {
                        // Start typing next line after a small pause
                        setTimeout(() => {
                            typeLine(lineIndex + 1);
                        }, 400);
                    }
                }
            };
            typeChar();
        };

        // Start typing first line after a brief delay
        setTimeout(() => {
            typeLine(0);
        }, 800);
    }

    // 4. Header Scroll State & Section Highlighting
    const siteHeader = document.getElementById("siteHeader");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        // Sticky Header Backdrop Blur Reveal
        if (window.scrollY > 60) {
            siteHeader.classList.add("scrolled");
        } else {
            siteHeader.classList.remove("scrolled");
        }

        // Active Section Navigation Tracking
        let currentSectionId = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 150) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });

    // 5. Mobile Hamburger Navigation Overlay
    const menuToggleBtn = document.getElementById("menuToggleBtn");
    const closeMenuBtn = document.getElementById("closeMenuBtn");
    const mobileNav = document.getElementById("mobileNav");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    if (menuToggleBtn && mobileNav) {
        menuToggleBtn.addEventListener("click", () => {
            mobileNav.classList.add("open");
            document.body.style.overflow = "hidden"; // Prevent background scroll
        });

        const closeMenu = () => {
            mobileNav.classList.remove("open");
            document.body.style.overflow = "auto";
        };

        if (closeMenuBtn) closeMenuBtn.addEventListener("click", closeMenu);
        mobileLinks.forEach(link => link.addEventListener("click", closeMenu));
    }

    // 6. GSAP ScrollTrigger Section Reveals (Slide up + Fade)
    const revealElements = document.querySelectorAll(".scroll-reveal");
    revealElements.forEach((el) => {
        gsap.fromTo(el, 
            {
                opacity: 0,
                y: 40
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 88%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // 7. Parallax Effect for Background Section Numbers
    const bgNumbers = document.querySelectorAll(".bg-section-number");
    bgNumbers.forEach((num) => {
        gsap.to(num, {
            y: -100,
            ease: "none",
            scrollTrigger: {
                trigger: num.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5
            }
        });
    });

    // Parallax quote marks in Testimonial
    const bgQuoteMark = document.querySelector(".bg-quote-mark");
    if (bgQuoteMark) {
        gsap.to(bgQuoteMark, {
            y: -50,
            ease: "none",
            scrollTrigger: {
                trigger: bgQuoteMark.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5
            }
        });
    }

    // 8. Experience Timeline SVG path drawing on scroll
    const timelineActivePath = document.querySelector(".timeline-line-active");
    const timelineContainer = document.querySelector(".timeline-container");
    
    if (timelineActivePath && timelineContainer) {
        const pathLength = timelineActivePath.getTotalLength();
        
        // Initialize path to be hidden (fully offset)
        timelineActivePath.style.strokeDasharray = pathLength;
        timelineActivePath.style.strokeDashoffset = pathLength;

        // Draw line dynamically with scroll
        gsap.to(timelineActivePath, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: timelineContainer,
                start: "top 30%",
                end: "bottom 70%",
                scrub: true
            }
        });
    }

    // 9. Skills Progress Bars Fill Trigger
    const skillBars = document.querySelectorAll(".skill-bar-inner");
    if (skillBars.length > 0) {
        ScrollTrigger.create({
            trigger: ".skills-section",
            start: "top 75%",
            onEnter: () => {
                skillBars.forEach(bar => {
                    const targetPercent = bar.getAttribute("data-target");
                    bar.style.width = targetPercent;
                });
            }
        });
    }

    // 10. Magnetic Hover Effect for Buttons
    const magneticBtns = document.querySelectorAll(".magnetic");
    if (!isTouchDevice) {
        magneticBtns.forEach((btn) => {
            btn.addEventListener("mousemove", (e) => {
                const rect = btn.getBoundingClientRect();
                // Find relative offset from center of button
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                // Pull button slightly towards mouse
                gsap.to(btn, {
                    x: x * 0.35,
                    y: y * 0.35,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            btn.addEventListener("mouseleave", () => {
                // Return button to origin with elastic bounce
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        });
    }
});
