const menu = document.querySelector('.menu');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const hamburgerMenu = document.querySelector('.menu__mobile');

document.addEventListener('click', (evt) => {

  if (
    evt.target !== hamburgerBtn
    && !hamburgerMenu.classList.contains('hidden')
    && evt.target !== hamburgerMenu
  ) {
    hamburgerMenu.classList.toggle('hidden');
  }

});

hamburgerBtn.onclick = function() {
  hamburgerMenu.classList.toggle('hidden');
  hamburgerBtn.classList.toggle('clicked');
}
