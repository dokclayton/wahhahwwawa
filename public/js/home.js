const greeting = document.querySelector('.greeting');

window.onload = () => {
    if(!sessionStorage.name){
        location.href = '/login';
    } else{
        greeting.innerHTML = `hello ${sessionStorage.name}!`;
    }
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}

const fullName = localStorage.getItem('full-name');
const userName = localStorage.getItem('user-name');

document.getElementById('full-name').textContent = fullName;
document.getElementById('user-name').textContent = userName;

//For the sidebar pop-up
const navBar = document.querySelector('nav'),
      menuBtn = document.querySelectorAll('.menuIcon'),
      overlay = document.querySelector('.overlay');
      console.log(navBar, menuBtn, overlay);

menuBtn.forEach(menuBtns => {
    menuBtns.addEventListener('click', () => {
        navBar.classList.toggle('open');
    })
})

overlay.addEventListener('click', ()=> {
    navBar.classList.remove('open');
})