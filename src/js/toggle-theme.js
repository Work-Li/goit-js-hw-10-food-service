
const toggleRef = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

onDefaultTheme();

toggleRef.addEventListener('change', onChangeTheme);

function onChangeTheme() {
    bodyEl.classList.toggle(Theme.DARK);
    if (bodyEl.classList.contains(Theme.DARK)) {
            localStorage.setItem('theme', Theme.DARK);
        } else {
            localStorage.setItem('theme', Theme.LIGHT);
        }
    // bodyEl.classList.toggle(Theme.LIGHT);

};


function onDefaultTheme() {
    if(!localStorage.length) {
        localStorage.setItem('theme', Theme.LIGHT);
        
    } 
        bodyEl.classList.toggle(Theme.LIGHT);

}