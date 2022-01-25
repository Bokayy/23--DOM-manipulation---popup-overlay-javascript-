"use strict";

/* let index = 0;

function promijeniBoju(){
    const boje = ["red","green","blue","purple","brown","orange","yellow","#fff"];
    document.body.style.background = boje[index++];

    if (index > boje.length - 1) index = 0;
    console.log(typeof boje[7]);
} */

const modal = document.querySelector('.modal'); //sa getElementByClassName ne moras . stavljati
const overlay = document.querySelector('.overlay');
//const buttonCloseModal = document.querySelector('.close-modal'); //query selector pokazuje samo prvoga
const buttonCloseModal = document.querySelector('.close-modal');//console.log(buttonCloseModal);
const buttonsOpenModal = document.querySelectorAll('.show-modal');
/* for (let i = 0; i <buttonCloseModal.length; i++) {
    console.log(buttonCloseModal[i].textContent);
} */



for (let i = 0; i < buttonsOpenModal.length; i++) 
{
    buttonsOpenModal[i].addEventListener('click',function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    });
}

const closeModal = function () { 
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

buttonCloseModal.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);
