const applicationsBtnElement = document.getElementById('applications');
const mainPageElement = document.getElementById('main-page');
const applicationsPageElement = document.getElementById('applications-page');
const sideMenuElement = document.getElementById('side-menu');
const buttonMenuElement = document.getElementById('button-menu');
const backgroundElement = document.getElementById('main-page__dark-background');
const SettingsBtnElement = document.getElementById('footer__info-settings');
const settingsMenuElement = document.getElementById('footer__settings-menu')

function handleClickApplicationsBtnElement(event) {
  event.preventDefault();
  event.stopPropagation();

  applicationsPageElement.classList.toggle('show-block-js')
}

function handleClickButtonSideMenu(event) {
  event.preventDefault();
  event.stopPropagation();

  sideMenuElement.classList.add("side-menu--show-js");
  backgroundElement.classList.add('main-page__dark-background--show');
}

function handleClickSettingsBtnElement(event) {
  event.stopPropagation();
  settingsMenuElement.classList.toggle('footer__settings-menu--hidden');
}

function handleClickOnMainPage (event) {
  const applicationsPageTargetElement = event.target.closest('.applications-page');
  const settingsMenuTargetElement = event.target.closest('.footer__settings-menu');
  const backgroundTargetElement = event.target.closest('#main-page__dark-background');

  if (!applicationsPageTargetElement) {
    applicationsPageElement.classList.remove('show-block-js');
  }

  if (!settingsMenuTargetElement) {
    settingsMenuElement.classList.add('footer__settings-menu--hidden');
  }

  if (backgroundTargetElement) {
    backgroundElement.classList.remove('main-page__dark-background--show');
    sideMenuElement.classList.remove("side-menu--show-js");
  }
}

mainPageElement.addEventListener('click', handleClickOnMainPage);
buttonMenuElement.addEventListener('click', handleClickButtonSideMenu);
applicationsBtnElement.addEventListener('click', handleClickApplicationsBtnElement);
SettingsBtnElement.addEventListener('click', handleClickSettingsBtnElement);



