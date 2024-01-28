// ==UserScript==
// @name         cc anti-cheat
// @namespace    http://tampermonkey.net/
// @version      2024-01-28
// @description  remove fill-solution button
// @author       egor
// @match        https://codecombat.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=codecombat.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeButton() {
        var fillSolutionButton = document.getElementById('fill-solution');
        if (fillSolutionButton) {
            fillSolutionButton.parentNode.removeChild(fillSolutionButton);
        }
    }

    setInterval(removeButton, 100);
})();
