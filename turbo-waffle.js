// ==UserScript==
// @name         cc anti-cheat 2
// @namespace    http://tampermonkey.net/
// @version      2024-02-19
// @description  remove fill-solution button
// @author       egor
// @match        https://codecombat.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=codecombat.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeButton() {

        var fillSolutionButton = document.querySelector('.fill-solution');
        if (fillSolutionButton) {
            fillSolutionButton.parentNode.removeChild(fillSolutionButton);
        }

        var actionHelps = document.querySelectorAll('.action-help');
        actionHelps.forEach(function(actionHelp) {
        if (actionHelp.textContent.trim() === 'Replace current code with sample solution') {
            actionHelp.parentNode.removeChild(actionHelp);
        }
        });
    }

    setInterval(removeButton, 100);
})();
