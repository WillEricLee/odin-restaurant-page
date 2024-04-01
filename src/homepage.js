import pasta from './images/pasta.jpg';

const homePage = () => {
    const homePageContainer = document.createElement('div');
    homePageContainer.setAttribute('class', 'split-page-container');

    const foodImage = document.createElement('img');
    foodImage.setAttribute('src', pasta);
    foodImage.setAttribute('id', 'home-image');

    const rightHalf = document.createElement('div');
    rightHalf.setAttribute('class', 'right-half');
    rightHalf.setAttribute('id', 'home-right-half');

    const welcome = document.createElement('h2');
    welcome.innerHTML = "Welcome to Odin Restaurant.";

    const description = document.createElement('p');
    description.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

    rightHalf.appendChild(welcome);
    rightHalf.appendChild(description);

    homePageContainer.appendChild(foodImage);
    homePageContainer.appendChild(rightHalf);

    document.querySelector('#content').appendChild(homePageContainer);
};

export default homePage;