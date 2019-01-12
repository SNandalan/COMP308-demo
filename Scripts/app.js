"use strict";
//self executing anonymous function
//IIFE -- Immediatly Invoked Function Expression
(function () {
    let myGlobalVariable = 0;

    let Start = function () {
        console.log(`App Started...${myGlobalVariable}`);
    }

    window.addEventListener("load", Start);
})();