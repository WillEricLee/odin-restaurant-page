const homePage = () => {

    const foodImage = document.createElement('img');
    foodImage.setAttribute('src', './images/pasta.png');

    const rightHalf = document.createElement('div');
    rightHalf.setAttribute('class', 'right-half');

    const welcome = document.createElement('h2');
    welcome.innerHTML = "Welcome to Odin Restaurant.";

    const description = document.createElement('p');
    description.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

    rightHalf.appendChild(welcome);
    rightHalf.appendChild(description);

    document.body.appendChild(foodImage);
    document.body.appendChild(rightHalf);
};

export default homePage;