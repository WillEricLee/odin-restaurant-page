import founder from './images/founder.jpg';

const aboutPage = () => {
    const aboutPageContainer = document.createElement('div');
    aboutPageContainer.setAttribute('class', 'split-page-container');

    const founderImage = document.createElement('img');
    founderImage.setAttribute('src', founder);
    founderImage.setAttribute('id', 'about-image');

    const rightHalf = document.createElement('div');
    rightHalf.setAttribute('class', 'right-half');
    rightHalf.setAttribute('id', 'about-right-half');

    const welcome = document.createElement('h2');
    welcome.innerHTML = "Founded in 2030.";

    const description = document.createElement('p');
    description.innerHTML = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.";

    rightHalf.appendChild(welcome);
    rightHalf.appendChild(description);

    aboutPageContainer.appendChild(founderImage);
    aboutPageContainer.appendChild(rightHalf);

    document.querySelector('#content').appendChild(aboutPageContainer);
};

export default aboutPage;