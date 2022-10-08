const btnMobile = document.getElementById('btn-mobile')
const hamburguer = document.getElementById('hamburguer')
const menuItems = document.getElementById('menu-itens')
const main = document.getElementById('main')

function toggleMenu(){
    hamburguer.classList.toggle('active')
    menuItems.classList.toggle('show')
    main.classList.toggle('noshow')
}

btnMobile.addEventListener('click',toggleMenu)