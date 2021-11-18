const swiper = new Swiper('.hero-swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
});;
document.getElementById('burger').addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('menu').classList.add('active');
})

document.getElementById('close-menu').addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('menu').classList.remove('active');
})

document.getElementById('open-search-form').addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('search-form').classList.add('active');
})

document.getElementById('close-search-form').addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('search-form').classList.remove('active');
})

let dropdownId;

document.querySelectorAll('.bottom-nav__link').forEach(function (dropdownButton) {
  dropdownButton.addEventListener('click', function (event) {
    dropdownId = event.currentTarget.dataset.dropdownparentid;

    document.querySelectorAll('.dropdown-menu').forEach(function (dropdown) {
      dropdown.classList.remove('active')
    })
    document.querySelectorAll('.bottom-nav__link').forEach(function (dropdown) {
      dropdown.classList.remove('active')
    })
    document.querySelectorAll('.dropdown-svg').forEach(function (dropdown) {
      dropdown.classList.remove('bottom-menu-active-svg')
    })
    document.querySelector(`[data-dropdownChildId="${dropdownId}"]`).classList.add('active')
    document.querySelector(`[data-dropdownSvgId="${dropdownId}"]`).classList.add('bottom-menu-active-svg')
    document.querySelector(`[data-dropdownParentId="${dropdownId}"]`).classList.add('active')
  })
});

window.addEventListener('click', event => { // при клике в любом месте окна браузера
  const target = event.target // находим элемент, на котором был клик
  if (!target.closest('.dropdown-menu') && !target.closest('.bottom-nav__link')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
    document.querySelector(`[data-dropdownChildId="${dropdownId}"]`).classList.remove('active')
    document.querySelector(`[data-dropdownSvgId="${dropdownId}"]`).classList.remove('bottom-menu-active-svg')
    document.querySelector(`[data-dropdownParentId="${dropdownId}"]`).classList.remove('active')
  }
})

if (window.innerWidth  >= 1024) {
  document.getElementById('search-form').addEventListener('focusout', (event) => {
    document.getElementById('search-form').classList.remove('active');
  })
};