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


//remove "naknadna" function for this more complex version to work
/* for (let i = 0; i < buttonsOpenModal.length; i++) 
{
    buttonsOpenModal[i].addEventListener('click',function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    });
} */
const openModal = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const closeModal = function () { 
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

//naknadna
for (let i = 0; i < buttonsOpenModal.length; i++) {
    buttonsOpenModal[i].addEventListener('click',openModal);
}

buttonCloseModal.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);

/* 26.1.2022 - predavanje dan nakon */

//escape key functionality
/* document.addEventListener("keydown", function(event)
{
    if (event.key === "Escape")
    {
        if (modal.classList.contains("hidden"))
        {
            closeModal();
        }
    }

    /*     console.log(event);
    console.log(event.key); */
//}); */

//escape key functionality - less code edition
document.addEventListener("keydown", function(event) {
    if(event.key === "Escape" && !modal.classList.contains("hidden")){
        closeModal();
    }
    //we close the popup by ADDING the "hidden" class to all modal classes
    //therefore we must use a negation. The code is kinda confusing.
});