import homePage from './homepage.js';
import menuPage from './menupage.js';
import aboutPage from './aboutpage.js';
import './style.css';

const content = document.querySelector('#content');

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector('.menu');
const aboutButton = document.querySelector('.about');

homeButton.onclick = () => {
    content.innerHTML = "";
    homePage();
};
menuButton.onclick = () => {
    content.innerHTML = "";
    menuPage();
};
aboutButton.onclick = () => {
    content.innerHTML = "";
    aboutPage();
};


console.log('test');

homePage();