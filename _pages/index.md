---
permalink: /
layout: default
---

<script>
    // Redirect a few popular pages' old URLs towards the new ones
    var redirections = {
        '#pay': '/pay',
        '#calendar': '/calendar',
        '#donate': '/donate',
        '#join': '/join',
        '#mailing-lists': '/mailing-lists',
        '#rental': '/rentals'
    }
    if (redirections[window.location.hash]) {
        window.location = redirections[window.location.hash]
    }

    // Decide early whether to use the static poster fallback instead of video
    (function() {
        try {
            var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            var useFallback = false;
            if (conn) {
                // saveData users or very slow connections -> use fallback
                if (conn.saveData) useFallback = true;
                var slowTypes = ['slow-2g','2g'];
                if (conn.effectiveType && slowTypes.indexOf(conn.effectiveType) !== -1) useFallback = true;
                if (conn.downlink && conn.downlink < 0.8) useFallback = true;
            }
            // If we already decided fallback, apply a class so CSS can hide the video early
            if (useFallback) document.documentElement.classList.add('use-fallback');
            // Also add a small timeout: if the video hasn't loaded metadata within 2500ms, switch to fallback
            window.addEventListener('load', function() {
                try {
                    var vid = document.querySelector('.home-background-media');
                    if (!vid) return;
                    var switched = false;
                    var timeout = setTimeout(function() {
                        if (!switched && (!vid.readyState || vid.readyState < 1)) {
                            document.documentElement.classList.add('use-fallback');
                            switched = true;
                        }
                    }, 2500);
                    vid.addEventListener('loadedmetadata', function() { clearTimeout(timeout); });
                    vid.addEventListener('error', function() { document.documentElement.classList.add('use-fallback'); clearTimeout(timeout); });
                } catch (e) {}
            });
        } catch (e) {}
    })();

    function toggleCalendar() {
        const panel = document.querySelector('.home-calendar-panel');
        const button = document.querySelector('.home-calendar-toggle');
        panel.classList.toggle('collapsed');
        const isCollapsed = panel.classList.contains('collapsed');
        button.textContent = isCollapsed ? 'Calendar ▶' : 'Calendar ▼';
        button.setAttribute('aria-expanded', !isCollapsed);
    }

    function updateArrowVisibility() {
        const arrow = document.querySelector('.home-scroll-arrow');
        if (!arrow) return;
        // hide arrow when user is roughly 20% into the last section (not just absolute bottom)
        const lastSection = document.getElementById('home-details');
        if (lastSection) {
            const rect = lastSection.getBoundingClientRect();
            const lastTop = window.scrollY + rect.top; // document Y of last section top
            // compute hide threshold: when page scroll reaches lastTop minus 20% of viewport
            const hideAt = lastTop - (window.innerHeight * 0.2);
            if (window.scrollY >= hideAt) {
                arrow.classList.add('hidden');
                return;
            }
        }

        // fallback: hide when within 150px of page bottom
        const fallbackThreshold = 150;
        const scrolledNearBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - fallbackThreshold);
        if (scrolledNearBottom) arrow.classList.add('hidden'); else arrow.classList.remove('hidden');
    }

    // run on load, scroll, and resize
    window.addEventListener('load', updateArrowVisibility);
    window.addEventListener('scroll', updateArrowVisibility, {passive: true});
    window.addEventListener('resize', updateArrowVisibility);

    // hide arrow shortly after clicking it (smooth scroll may be in effect)
    document.addEventListener('click', function (e) {
        const target = e.target.closest && e.target.closest('.home-scroll-arrow');
        if (target) setTimeout(updateArrowVisibility, 450);
    });

    // On every non-hash load, scroll down half a viewport to avoid the large header.
    window.addEventListener('load', function () {
        try {
            if (window.location.hash) return; // respect anchors
            // Desktop default ~45% viewport; reduce on smaller screens for better UX
            var fraction = 0.45;
            if (window.innerWidth <= 768) {
                // Mobile: scroll much less so header and hero remain visible
                fraction = 0.25;
            } else if (window.innerWidth <= 992) {
                // Tablet/smaller laptops: slightly less than desktop
                fraction = 0.30;
            }
            const startY = Math.round(window.innerHeight * fraction);
            window.scrollTo({ top: startY, left: 0, behavior: 'auto' });
        } catch (e) {
            // silent fallback
        }
    });
</script>

<style>
    .home-background-media {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -2;
    }

    .home-background-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.32);
        z-index: -1;
    }

    .home-background-fallback {
        position: fixed;
        inset: 0;
        background-image: url('/images/main_page/mitoc_winter_Florian_2024.jpg');
        background-size: cover;
        background-position: center;
        z-index: -3; /* behind video (z -2) and overlay (z -1) */
    }

    /* When `.use-fallback` is set, hide the video and bring the fallback up */
    .use-fallback .home-background-media { display: none !important; }
    .use-fallback .home-background-fallback { z-index: -2; }

    .home-calendar-panel {
        position: fixed;
        top: 88px;
        left: 36px;
        width: 360px;
        max-width: calc(100vw - 48px);
        border: 1px solid rgba(255, 255, 255, 0.35);
        border-radius: 12px;
        overflow: visible;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
        z-index: 2;
        transition: height 0.3s ease;
    }

    .home-calendar-toggle {
        position: absolute;
        top: 6px;
        left: 50%;
        transform: translateX(-50%) translateY(-30%);
        background: none;
        color: white;
        border: none;
        padding: 6px 10px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
        white-space: nowrap;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        z-index: 3;
        transition: color 0.25s ease, transform 0.25s ease, border 0.25s ease;
    }

    .home-calendar-toggle:hover {
        opacity: 0.9;
    }

    .home-calendar-panel.collapsed .home-calendar-toggle {
        color: white;
        border: 1px solid rgba(255,255,255,0.95);
        border-radius: 6px;
        /* keep centered within panel when collapsed and nudged up */
        transform: translateX(-40%) translateY(-10%);
    }

    .home-calendar-panel:not(.collapsed) .home-calendar-toggle {
        color: #000;
        border: none;
        /* keep the label lifted by the same amount when expanded */
        transform: translateX(-40%) translateY(-10%);
    }

    .home-calendar-frame {
        display: block;
        border: 0;
        width: 100%;
        height: 240px;
        transition: height 0.3s ease;
    }

    .home-calendar-panel.collapsed .home-calendar-frame {
        height: 0;
        visibility: hidden;
    }

    /* Expanded sizes */
    .home-calendar-panel:not(.collapsed) .home-calendar-frame {
        height: 360px;
    }

    @media (max-width: 992px) {
        .home-calendar-panel:not(.collapsed) .home-calendar-frame {
            height: 320px;
        }
    }

    @media (max-width: 768px) {
        .home-calendar-panel:not(.collapsed) .home-calendar-frame {
            height: 300px;
        }
    }

    .home-calendar-panel.collapsed {
        height: 36px !important;
        border: none !important;
        box-shadow: none !important;
        background: transparent !important;
    }

    .home-scroll-content {
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-top: 40vh;
        padding-left: 20px;
        padding-right: 20px;
        min-height: auto;
    }

    .home-scroll-content.first-section {
        min-height: 100vh;
    }

    .home-scroll-content.second-section {
        min-height: 100vh;
        padding-top: 60px;
        padding-bottom: 60px;
    }

    .home-hero-block {
        max-width: 980px;
        text-align: center;
    }

    .home-hero-text {
        margin: 0;
        color: #ffffff;
        font-size: 46px;
        line-height: 1.2;
        font-weight: 700;
        text-shadow: 0 4px 24px rgba(0, 0, 0, 0.45);
    }

    .home-cta-text {
        margin-top: 28px;
        color: #ffffff;
        font-size: 30px;
        line-height: 1.3;
        font-weight: 500;
        text-shadow: 0 3px 20px rgba(0, 0, 0, 0.4);
    }

    .home-cta-text a {
        color: #ffffff;
        text-decoration: underline;
        transition: opacity 0.2s ease;
    }

    .home-cta-text a:hover {
        opacity: 0.85;
    }

    .home-body-text {
        max-width: 900px;
        margin-top: 48px;
        color: #ffffff;
        font-size: 24px;
        line-height: 1.6;
        font-weight: 400;
        text-shadow: 0 2px 16px rgba(0, 0, 0, 0.4);
        text-align: center;
    }

    .home-body-text a {
        color: #ffffff;
        text-decoration: underline;
        transition: opacity 0.2s ease;
    }

    .home-body-text a:hover {
        opacity: 0.85;
    }

    .home-scroll-arrow {
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);
        color: #ffffff;
        font-size: 42px;
        text-decoration: none;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        animation: home-arrow-bounce 1.5s infinite;
        z-index: 2;
    }

    .home-scroll-arrow.hidden {
        opacity: 0;
        pointer-events: none;
        transform: translateX(-50%) translateY(8px);
        animation: none;
        transition: opacity 0.28s ease, transform 0.28s ease;
    }

    @keyframes home-arrow-bounce {
        0% {
            transform: translateX(-50%) translateY(0);
        }
        50% {
            transform: translateX(-50%) translateY(8px);
        }
        100% {
            transform: translateX(-50%) translateY(0);
        }
    }

    @media (max-width: 992px) {
        .home-calendar-panel {
            top: 72px;
            width: 320px;
        }

        .home-calendar-frame {
            height: 213px;
        }

        .home-scroll-content.first-section {
            padding-top: 46vh;
        }
    }

    @media (max-width: 768px) {
        .home-calendar-panel {
            position: relative;
            top: auto;
            left: auto;
            margin: 92px auto 0;
            width: calc(100vw - 30px);
            max-width: 420px;
        }

        .home-calendar-frame {
            height: 200px;
        }

        .home-scroll-content.first-section {
            padding-top: 14vh;
        }

        .home-scroll-content.second-section {
            padding-top: 40px;
        }

        .home-hero-text {
            font-size: 32px;
        }

        .home-cta-text {
            font-size: 23px;
        }

        .home-body-text {
            font-size: 18px;
            margin-top: 32px;
        }
    }
</style>

<div class="home-background-fallback" aria-hidden="true"></div>
<video class="home-background-media" autoplay muted loop playsinline preload="metadata" poster="/images/main_page/mitoc_winter_Florian_2024.jpg" aria-hidden="true">
    <source src="/images/main_page/mitoc_winter_ashay.webm" type="video/webm">
    <source src="/images/main_page/mitoc_winter_ashay.mp4" type="video/mp4">
</video>
<div class="home-background-overlay" aria-hidden="true"></div>

<div class="home-calendar-panel collapsed" aria-label="MITOC events calendar">
    <button class="home-calendar-toggle" onclick="toggleCalendar()" aria-expanded="false" aria-label="Toggle calendar">Calendar ▶</button>
    <iframe class="home-calendar-frame" src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=400&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=nf2filjvmi1s2kipeo5pahr56c@group.calendar.google.com&amp;color=%23125A12&amp;ctz=America%2FNew_York" scrolling="no"></iframe>
</div>

<div class="home-scroll-content first-section" id="home-intro">
    <div class="home-hero-block">
        <h1 class="home-hero-text">The MIT Outing Club (MITOC) is dedicated to helping the MIT and Cambridge community enjoy the great outdoors.</h1>
        <p class="home-cta-text"><a href="/mailing-lists">Join our email lists</a>, <a href="/join">become a member</a>, <a href="https://mitoc-trips.mit.edu/trips/">sign up for trips</a>, or <a href="/rentals">rent gear</a>.</p>
    </div>
</div>

<a class="home-scroll-arrow" href="#home-details" aria-label="Scroll down">&#8595;</a>

<div class="home-scroll-content second-section" id="home-details">
    <div class="home-hero-block">
        <p class="home-body-text">If you're new to MITOC, you should start by joining some of our <a href="/mailing-lists">mailing lists</a>, which are used to announce club events and organize informal trips. Our <a href="/calendar">calendar</a> and <a href="https://mitoc-trips.mit.edu/trips/">trip signup</a> are also good places to find upcoming MITOC events.</p>
        <p class="home-body-text">If you're interested in renting gear from MITOC, please read the <a href="/rentals">gear rental information</a> before coming to office hours.</p>
        <p class="home-body-text">If you want to sign up for a MITOC-organized trip or rent gear from us, you'll have to <a href="/join">become a member</a>.</p>
    </div>
</div>

