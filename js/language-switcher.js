

  const menuItems = document.querySelectorAll('.menu li');
  const scroll = new SmoothScroll();


  function switchLanguage(lang) {
    // Получаем переводы для выбранного языка
    const translation = translations[lang];
    // Изменяем текст элементов страницы
    document.querySelector('#info h2').textContent = translation.infoTitle;
    document.querySelector('#info h1').textContent = translation.name;
    document.querySelectorAll('#info p')[0].textContent = translation.objective1;
    document.querySelectorAll('#info p')[1].textContent = translation.objective2;
    document.querySelectorAll('#menu li')[0].textContent = translation.menu1;
    document.querySelectorAll('#menu li')[1].textContent = translation.menu2;
    document.querySelectorAll('#menu li')[2].textContent = translation.menu3;
    document.querySelectorAll('#menu li')[3].textContent = translation.menu4;
    document.querySelector('#skills h2').textContent = translation.skillsTitle
    document.querySelectorAll('#skills li')[0].innerHTML = translation.skill1;
    document.querySelectorAll('#skills li')[1].innerHTML = translation.skill2;
    document.querySelectorAll('#skills li')[2].innerHTML = translation.skill3;
    document.querySelectorAll('#skills li')[3].innerHTML = translation.skill4;
    document.querySelectorAll('#skills li')[4].innerHTML = translation.skill5;
    document.querySelectorAll('#skills li')[5].innerHTML = translation.skill6;
    document.querySelectorAll('#skills li')[6].innerHTML = translation.skill7;
    document.querySelectorAll('#skills li')[7].innerHTML = translation.skill8;
    document.querySelector('#education h2').textContent = translation.educationTitle;
    document.querySelector('#education p').innerHTML = translation.educationInstitution;
    document.querySelector('#contacts h2').textContent = translation.contactsTitle;
    document.querySelector('#contacts p').childNodes[0].nodeValue = translation.phoneLabel + ' ';
  }

  function scrollInfo(str) {
    scroll.animateScroll(document.querySelector(str));
  }

// Функция для подсветки элемента меню
function highlightMenuItem(sectionId) {
  // Удаляем класс 'active' у всех элементов меню
  menuItems.forEach(item => item.classList.remove('active'));

  // Добавляем класс 'active' к соответствующему элементу меню
  const menuItem = document.querySelector(`.menu li[data-section="${sectionId}"]`);
  if (menuItem) {
    menuItem.classList.add('active');
  }
}

// Обработчик события 'scroll' для окна
window.addEventListener('scroll', () => {
  // Получаем текущую позицию прокрутки
  const scrollPosition = window.scrollY;

  // Определяем текущий раздел на экране
  let currentSection = 'info';
  if (scrollPosition >= document.querySelector('#contacts').offsetTop) {
    currentSection = 'contacts';
  } else if (scrollPosition >= document.querySelector('#education').offsetTop) {
    currentSection = 'education';
  } else if (scrollPosition >= document.querySelector('#skills').offsetTop) {
    currentSection = 'skills';
  }

  // Подсвечиваем соответствующий элемент меню
  highlightMenuItem(currentSection);
});

// Добавляем обработчики события 'click' для элементов меню
menuItems.forEach(item => {
  item.addEventListener('click', event => {
    // Отменяем стандартное поведение ссылки
    event.preventDefault();

    // Получаем id раздела, соответствующего выбранному элементу меню
    const sectionId = item.dataset.section;

    // Плавно прокручиваем страницу до выбранного раздела
    scroll.animateScroll(document.querySelector(`#${sectionId}`));

    // Подсвечиваем выбранный элемент меню
    highlightMenuItem(item.dataset.section);
  });
});