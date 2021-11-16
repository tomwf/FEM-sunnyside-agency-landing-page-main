const menu = document.querySelector('.menu');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const hamburgerMenu = document.querySelector('.menu__mobile');

document.addEventListener('click', (evt) => {

  if (
    evt.target !== hamburgerBtn
    && !menu.classList.contains('hidden')
    && evt.target !== hamburgerMenu
    && evt.target !== menu
  ) {
    menu.classList.toggle('hidden');
  }

});

hamburgerBtn.onclick = function() {
  menu.classList.toggle('hidden');
}
