const btnMenu = document.querySelector('[data-header="btn-menu"]')
const menu = document.querySelector('[data-header="menu"]')

function activeMenu() {
  menu.classList.toggle('ativo')
  btnMenu.classList.toggle('ativo')
}

btnMenu.addEventListener('click', activeMenu)