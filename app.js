"use strict";
window.onload = function() {
    // Preloader Js
    var loader = document.querySelector(".loader");
    if (loader.classList !== "loader-hidden") {
        loader.classList.add('loader-hidden');
        enableScroll();
        loader.addEventListener('transitionend', function(e) {
            loader.classList.add('loader-disable');
        }, {
        capture: false,
        once: true,
        passive: false
        });
    }
}
