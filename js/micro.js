/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


var filterKnop = document.querySelector('.filter');
var sorterenKnop = document.querySelector('.sorteren');
//console.log(filterKnop);

var formulier = document.querySelector('.filterform');
var sorterenOpen = document.querySelector('.sortform');

//console.log(formulier);

function openFilter() { formulier.classList.toggle('active');

}

filterKnop.addEventListener('click', openFilter);



function openSorteren(){
sorterenOpen.classList.toggle('active');
}

sorterenKnop.addEventListener('click', openSorteren);
