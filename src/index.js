import './global-assets/style.css';
import { default as navObj} from './components/navbar/navbar';
import homeObj from './components/home/home.js';
import menu from './components/menu/menu.js';
import { createAbout as about } from './components/about/about.js';

const nav = navObj.navDomElem;
const navBtns = navObj.navBtns;
const home = homeObj.homeContainer;
const homeBtns = homeObj.homeBtns;

const headerContainer = document.querySelector('header .container');
const contentDiv = document.querySelector('div#content');

// Initial render
contentDiv.appendChild(home); 
headerContainer.appendChild(nav);

const btnsArr = [...homeBtns, ...navBtns];

btnsArr.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (contentDiv.firstElementChild) loadModule(btn.dataset.module);
    });
})

function loadModule(module) {
    contentDiv.replaceChildren();
    switch(module) {
        case 'home': 
            contentDiv.appendChild(home);
            break;
        case 'menu':
            contentDiv.appendChild(menu);
            break;
        case 'about':
            contentDiv.append(about);
        default:
            console.log('Invalid IDD');
    }
}


