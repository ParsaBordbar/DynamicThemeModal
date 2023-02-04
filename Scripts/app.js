const avatarElm = document.querySelector('.big-avatar-pic');
const x = document.querySelector('.x');
const modalBtn = document.querySelector('.btn');
const inputs = document.querySelectorAll('input');
const modalParent = document.getElementById('modalParent');
const namePosition = document.getElementById('namePosition')
const userName = document.getElementById('userName')
const saveBtn = document.getElementById('saveBtn');
const mainColorInout = document.getElementById('mainColorInout');
const secondaryColorInput = document.getElementById('secondaryColorInput');


//Getting Var from Css
const r = document.querySelector(':root');


const avatarSelector = () =>{
    inputs.forEach((i)=>{
        i.addEventListener('click', (e)=>{
            avatar.src = e.target.previousElementSibling.src;
        })
    })
}

const showModal = () =>{
    modalParent.style.top = '0%';
}

const hideModal = () => {
    modalParent.style.top = "-100%";
}

const hideModalWithEsc = (event) => {
    if (event.keyCode === 27) {
        modalParent.style.top = '-100%';
        sectionEl.style.filter = "none";
    }
}

const hideModalClickOutSide = () =>{
    document.getElementById('modalParent').addEventListener('click',(e)=>{
        if(e.srcElement === document.getElementById('modalParent')){
            document.getElementById("modalParent").style.top = '-100%';
        }
    });
}

const saveFunc = () => {
    namePosition.innerHTML = userName.value;
    r.style.setProperty('--theme-color',mainColorInout.value);
    r.style.setProperty('--secondary-color',secondaryColorInput.value);
    hideModal();
  }

avatarSelector();
hideModalClickOutSide();
modalBtn.addEventListener('click', showModal);
x.addEventListener('click', hideModal);
document.body.addEventListener('keyup', hideModalWithEsc)
saveBtn.addEventListener('click', saveFunc);