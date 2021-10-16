
const toggleRef = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

onLoading();

toggleRef.addEventListener('change', onChangeTheme);

function onLoading() {
    if(!localStorage.length) {
        localStorage.setItem('theme', Theme.LIGHT); 
        bodyEl.classList.add(Theme.LIGHT);
           
    } else {
        bodyEl.classList.add(localStorage.getItem('theme'));
    }
 
};

function onChangeTheme() {
    bodyEl.classList.toggle(Theme.DARK);
    bodyEl.classList.toggle(Theme.LIGHT);
    localStorage.setItem('theme', bodyEl.className);
};

if (localStorage.getItem('theme') === Theme.DARK) {
    toggleRef.setAttribute('checked', true);
};
