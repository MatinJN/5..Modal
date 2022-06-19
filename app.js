let openModal = document.getElementById('open');
let modal = document.querySelector('.modal');
let close = document.getElementById('close');
let h2 = document.getElementById('h2');
let background = document.querySelector('.welcome')


let Aclick = document.getElementById('c-me')

openModal.addEventListener('click', () => {
    modal.style.display = "flex";
})


close.addEventListener('click', () => {
    modal.style.display = "none";
})

document.body.onkeydown = function (e) {
    if (e.keyCode === 13) {
        let color = '#'
        color += Math.random().toString(16).slice(2,8);
        background.style.backgroundColor = color;
        h2.innerHTML = `Color Code:   ${color} `;
    }
}

Aclick.addEventListener('click', () => {
    let inputName = document.getElementById('inputN').value;
    let inputEmail = document.getElementById('inputE').value
    let inputpas = document.getElementById('inputP').value
    let regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regpassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;



    if (inputName.length >= 4 && inputName.charAt(0)===inputName.charAt(0).toUpperCase()){  
    
        alert('Name duz yazildi')

    }
    else{
        alert('name en az 4 herfden ibaret olmalidir ve ilk herf boyuk olmalidir')
    }

    if (inputEmail.match(regemail)) {
        alert('mail duzgun yazildi')
    }
    else{
        alert('mail sehv yazildl')
    }

    if (inputpas.match(regpassword)) {
        alert('password duzgun yazildi')
    }
    else{
        alert('password en az 1 herf OSSUN 1reqem OSSUN 1simvoldan ibaret OSSUN uzunluqu 8 OSSUN ')
    }
} )


































// let btn =document.getElementById('btn')

// btn.onclick = function () {

//     let  div = document.createElement('div');
//     let container = document.querySelector('.container')
//     container.appendChild(div);
//     div.setAttribute('class','list')
//     let h1 = document.createElement('h1');
//     div.appendChild(h1);
//     let icon = document.createElement('i');
//     div.appendChild(icon);
//     icon.setAttribute('class','fa-solid fa-trash-can')
//     let inputVal = document.getElementById('input').value;
//     h1.innerHTML = inputVal;

//     icon.onclick = function () {
//         icon.parentElement.remove();
//     }

// }

// window.oncontextmenu = function(){
//     return false;
// }