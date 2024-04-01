const menuPage = () => {
    const menuContent = document.createElement('div');

    //making the menu sections
    const starterSection = document.createElement('div');
    const pastaSection = document.createElement('div');
    const dessertSection = document.createElement('div');

    //making the headers
    const starterHeader = document.createElement('h1');
    starterHeader.innerHTML = "Starters"
    const pastaHeader = document.createElement('h1');
    pastaHeader.innerHTML = "Pasta"
    const dessertHeader = document.createElement('h1');
    dessertHeader.innerHTML = "Dessert"

    //STARTERS-----------------------------

    //create pomodoro
    const pomodoro = document.createElement('div')
    pomodoro.setAttribute('class', 'menu-item');
    const pomodoroName = document.createElement('h2');
    pomodoroName.setAttribute('class', 'name');
    pomodoroName.innerHTML = 'Bruschetta Pomodoro';
    const pomodoroDescription = document.createElement('p');
    pomodoroDescription.setAttribute('class', 'description');
    pomodoroDescription.innerHTML = 'Toasted ciabatta bread with fresh diced tomatoes, garlic and basil with a drizzle of extra virgin olive oil';
    const pomodoroPrice = document.createElement('p');
    pomodoroPrice.setAttribute('class', 'price');
    pomodoroPrice.innerHTML = '$10.95';
    pomodoro.appendChild(pomodoroName);
    pomodoro.appendChild(pomodoroDescription);
    pomodoro.appendChild(pomodoroPrice);

    //create caprese
    const caprese = document.createElement('div');
    caprese.setAttribute('class', 'menu-item');
    const capreseName = document.createElement('h2');
    capreseName.setAttribute('class', 'name');
    capreseName.innerHTML = 'Caprese';
    const capreseDescription = document.createElement('p');
    capreseDescription.setAttribute('class', 'description');
    capreseDescription.innerHTML = 'Fresh buffalo mozzarella over fresh sliced tomatoes, artichoke hearts, roasted red peppers, and kalamata olives with basil and extra virgin olive oil.';
    const capresePrice = document.createElement('p');
    capreseDescription.setAttribute('class', 'price');
    capresePrice.innerHTML = '$17.95';
    caprese.appendChild(capreseName);
    caprese.appendChild(capreseDescription);
    caprese.appendChild(capresePrice);

    //add to section
    starterSection.appendChild(starterHeader);
    starterSection.appendChild(pomodoro);
    starterSection.appendChild(caprese);

    //PASTA---------------------------------------

    //create spaghetti
    const spaghetti = document.createElement('div');
    spaghetti.setAttribute('class', 'menu-item');
    const spaghettiName = document.createElement('h2');
    spaghettiName.setAttribute('class', 'name');
    spaghettiName.innerHTML = 'Spaghetti Bolognese';
    const spaghettiDescription = document.createElement('p');
    spaghettiDescription.setAttribute('class', 'description');
    spaghettiDescription.innerHTML = 'Spaghetti tossed in our delicious meat sauce.';
    const spaghettiPrice = document.createElement('p');
    spaghettiPrice.setAttribute('class', 'price');
    spaghettiPrice.innerHTML = '$18.95';
    spaghetti.appendChild(spaghettiName);
    spaghetti.appendChild(spaghettiDescription);
    spaghetti.appendChild(spaghettiPrice);

    //create campagnola
    const campagnola = document.createElement('div');
    campagnola.setAttribute('class', 'menu-item');
    const campagnolaName = document.createElement('h2');
    campagnolaName.setAttribute('class', 'name');
    campagnolaName.innerHTML = 'Capellini Campagnola';
    const campagnolaDescription = document.createElement('p');
    campagnolaDescription.setAttribute('class', 'description');
    campagnolaDescription.innerHTML = 'Angel hair pasta tossed with ground sausage red and green peppers onions and mushrooms sautéed in a tomato cream sauce.';
    const campagnolaPrice = document.createElement('p');
    campagnolaPrice.setAttribute('class', 'price');
    campagnolaPrice.innerHTML = '$19.95';
    campagnola.appendChild(campagnolaName);
    campagnola.appendChild(campagnolaDescription);
    campagnola.appendChild(campagnolaPrice);

    //create fettuccine
    const fettuccine = document.createElement('div');
    fettuccine.setAttribute('class', 'menu-item');
    const fettuccineName = document.createElement('h2');
    fettuccineName.setAttribute('class', 'name');
    fettuccineName.innerHTML = 'Fettuccine Aurora';
    const fettuccineDescription = document.createElement('p');
    fettuccineDescription.setAttribute('class', 'description');
    fettuccineDescription.innerHTML = 'House made fettuccine in a tomato cream sauce with peas and sliced mushrooms.';
    const fettuccinePrice = document.createElement('p');
    fettuccinePrice.setAttribute('class', 'price');
    fettuccinePrice.innerHTML = '$18.95';
    fettuccine.appendChild(fettuccineName);
    fettuccine.appendChild(fettuccineDescription);
    fettuccine.appendChild(fettuccinePrice);

    //create ravioli
    const ravioli = document.createElement('div');
    ravioli.setAttribute('class', 'menu-item');
    const ravioliName = document.createElement('h2');
    ravioliName.setAttribute('class', 'name');
    ravioliName.innerHTML = 'Ravioli di Zucca';
    const ravioliDescription = document.createElement('p');
    ravioliDescription.setAttribute('class', 'description');
    ravioliDescription.innerHTML = 'Butternut squash filled ravioli in our delicious four cheese sauce parmigiano, fontina, gorgonzola, and pecorino.';
    const ravioliPrice = document.createElement('p');
    ravioliPrice.setAttribute('class', 'price');
    ravioliPrice.innerHTML = '$19.95';
    ravioli.appendChild(ravioliName);
    ravioli.appendChild(ravioliDescription);
    ravioli.appendChild(ravioliPrice);

    starterSection.appendChild(pastaHeader);
    starterSection.appendChild(spaghetti);
    starterSection.appendChild(campagnola);
    starterSection.appendChild(fettuccine);
    starterSection.appendChild(ravioli);

    //DESSERTS---------------------------------------

    //create panna cotta
    const pannaCotta = document.createElement('div');
    pannaCotta.setAttribute('class', 'menu-item');
    const pannaCottaName = document.createElement('h2');
    pannaCottaName.setAttribute('class', 'name');
    pannaCottaName.innerHTML = 'Panna Cotta';
    const pannaCottaDescription = document.createElement('p');
    pannaCottaDescription.setAttribute('class', 'description');
    pannaCottaDescription.innerHTML = 'Light creamy custard garnished with a blend of berries and raspberry liqueur.';
    const pannaCottaPrice = document.createElement('p');
    pannaCottaPrice.setAttribute('class', 'price');
    pannaCottaPrice.innerHTML = '$8.95';
    pannaCotta.appendChild(pannaCottaName);
    pannaCotta.appendChild(pannaCottaDescription);
    pannaCotta.appendChild(pannaCottaPrice);

    //create panna cotta
    const tiramisu = document.createElement('div');
    tiramisu.setAttribute('class', 'menu-item');
    const tiramisuName = document.createElement('h2');
    tiramisuName.setAttribute('class', 'name');
    tiramisuName.innerHTML = 'Tiramisu';
    const tiramisuDescription = document.createElement('p');
    tiramisuDescription.setAttribute('class', 'description');
    tiramisuDescription.innerHTML = 'Mascarpone cream blended with fine Italian Liqueur over sponge cake covered by a layer of espresso, lady fingers, and dusted with cocoa powder.';
    const tiramisuPrice = document.createElement('p');
    tiramisuPrice.setAttribute('class', 'price');
    tiramisuPrice.innerHTML = '$9.95';
    tiramisu.appendChild(tiramisuName);
    tiramisu.appendChild(tiramisuDescription);
    tiramisu.appendChild(tiramisuPrice);

    starterSection.appendChild(dessertHeader);
    starterSection.appendChild(pannaCotta);
    starterSection.appendChild(tiramisu);

    //append all
    menuContent.appendChild(starterSection);
    menuContent.appendChild(pastaSection);
    menuContent.appendChild(dessertSection);

    document.querySelector('#content').appendChild(menuContent);
};

export default menuPage;