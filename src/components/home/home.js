import './home.css';

function createHome() {
    let homeBtns = [];
    
    const homeContainer = document.createElement('div');
    homeContainer.id = 'home-container';
    homeContainer.classList.add('container');

    const introContainer = document.createElement('div');
    introContainer.classList.add('intro-container');
    homeContainer.appendChild(introContainer);

    const createParagraph = (text) => {
        const para = document.createElement('p');
        para.textContent = text;
        return para;
    } 

    introContainer.appendChild(createParagraph('See what your next favorite restaurant has to offer. Eat fresh. Feel better.'));

    const createButton = (id, text, module) => {
        const btn = document.createElement('button');
        btn.id = id;
        btn.dataset.module = module;
        btn.textContent = text;
        homeBtns.push(btn);
        return btn;
    }

    const reserveContainer = document.createElement('div');
    reserveContainer.classList.add('reserve-container');
    reserveContainer.appendChild(createParagraph('Reserve your table today and let us elevate your dining experience to new heights.'));
  
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    btnContainer.appendChild(createButton('reserve-btn', 'Reserve dining', 'about'));
    btnContainer.appendChild(createButton('view-btn', 'View menu', 'menu'));
    reserveContainer.appendChild(btnContainer);

    introContainer.appendChild(reserveContainer);

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    textContainer.appendChild(createParagraph('Welcome to FOOD PLACE, where every dish tells a story and every flavor leaves a lasting impression. Step into a culinary adventure crafted with passion and served with excellence.'));
    textContainer.appendChild(createParagraph('Indulge your senses in our eclectic menu, curated to tantalize taste buds and ignite gastronomic delights. From sizzling appetizers to decadent desserts, each dish is a masterpiece, meticulously prepared to captivate your palate.'));
    textContainer.appendChild(createParagraph('Experience the perfect blend of ambiance and flavor as you dine amidst the cozy elegance of our restaurant. Whether it\'s a romantic dinner for two or a lively gathering with friends and family, FOOD PLACE sets the stage for unforgettable moments.'));
    textContainer.appendChild(createParagraph('Join us and embark on a journey of culinary discovery, where every visit promises an exceptional dining experience. Reserve your table today and let us elevate your dining experience to new heights.'));
    homeContainer.appendChild(textContainer);

    return { homeContainer, homeBtns };
}


export default createHome();