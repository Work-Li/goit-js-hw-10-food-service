import menuCardTpl from '../template/menu-card.hbs';
import menu from './menu.json'

const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMenu(menu);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);


function createMenu(menu) {
    return menuCardTpl(menu);
};
