import './navbar.css';

const createNav = (function () {
    const navDomElem = document.createElement('nav');
    const navBtns = [];

    const createButton = (id) => {
        const btn = document.createElement('button');
        btn.textContent = id.charAt(0).toUpperCase() + id.slice(1);
        btn.id = id + '-btn';
        btn.dataset.module = id;
        navBtns.push(btn);
        btn.classList.add('btn')
        navDomElem.appendChild(btn);
        return btn;
    }

    const home = createButton('home');
    const menu = createButton('menu');
    const about = createButton('about');

    return { navDomElem, navBtns };
})();

export default createNav;