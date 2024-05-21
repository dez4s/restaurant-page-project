import './about.css'

export const createAbout = (function () {
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('container');
    aboutContainer.id = 'about-container';

    const iframe = document.createElement('iframe');
    iframe.src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6534.1229887530435!2d-106.9535741669526!3d35.030191468882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8722132322b08f97%3A0x870e7250cd441aa7!2sRoute%2066%20Travel%20Center!5e0!3m2!1sen!2sro!4v1716241408150!5m2!1sen!2sro";

    iframe.style.border = "0";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    aboutContainer.appendChild(iframe);

    const createPara = (text) => {
        const p = document.createElement('p');
        p.textContent = text;
        return p;
    };

    aboutContainer.appendChild(createPara(' Address: I-40, Albuquerque, NM 87121, USA via Route 66'));
    aboutContainer.appendChild(createPara('In order to make a reservation call at the number below. Open 24/7'));
    aboutContainer.appendChild(createPara('Telephone number: 505-123-4567'));

    return aboutContainer;
})();

