const homePage = () => {

    const rightHalf = document.createElement('div');
    rightHalf.setAttribute('class', 'right-half');

    const header = document.createElement('h2');
    header.innerHTML = "Welcome to Odin Restaurant.";

    const description = document.createElement('p');
    description.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

    rightHalf.appendChild(header);
    rightHalf.appendChild(description);

};

export default homePage;