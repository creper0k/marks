const stamps = [
    { title: 'Марка України 2023', image: '154583957.jpg', description: 'Опис марки', details: 'Деталі марки' },
    { 
        title: '1994 марка 3-й Стандарт Ж - порвана ліска №61', 
        image: '154583957.jpg', 
        description: 'Марка з серії третього стандарту. Відомий дефект: порвана ліска.', 
        details: 'Номер каталогу: №61. Рік випуску: 1994.' 
    },
    { 
        title: '1996 марка 150-річчя мандрівника Миклухо-Маклая 1-й випуск №111', 
        image: '154583957.jpg', 
        description: 'Присвячена 150-річчю мандрівника Миклухо-Маклая.', 
        details: 'Номер каталогу: №111. Рік випуску: 1996.' 
    },
    { 
        title: '2007 блок Космос Перший супутник Корольов (Ґудзик) №859 (бл 63)', 
        image: '154583957.jpg', 
        description: 'Блок із серії "Космос". Присвячений першому супутнику.', 
        details: 'Номер каталогу: №859 (блок 63). Рік випуску: 2007.' 
    }
];

const coins = [
    { title: 'Монета України 1996', image: '154583957.jpg', description: 'Опис монети', details: 'Деталі монети' },
    { 
        title: 'Український математичний конкурс, Остроградський, 2002 року', 
        image: '154583957.jpg', 
        description: 'Медаль Національного банку України, присвячена математичному конкурсу Остроградського.', 
        details: 'Стан: Proof. Рік випуску: 2002.' 
    },
    { 
        title: 'Український математичний конкурс, Боголюбов, 2009 року', 
        image: '154583957.jpg', 
        description: 'Медаль Національного банку України, присвячена математичному конкурсу Боголюбова.', 
        details: 'Стан: Proof. Рік випуску: 2009.' 
    },
    { 
        title: 'Настільна медаль 2012 року «Odessa Law Academy»', 
        image: '154583957.jpg', 
        description: 'Медаль, присвячена 165-річчю Одеської юридичної школи.', 
        details: 'Рік випуску: 2012.' 
    }
];


// Зміни в функції `showSection`
function showSection(section) {
    const stampsSection = document.getElementById('stamps-section');
    const coinsSection = document.getElementById('coins-section');

    // Відображення відповідної секції
    stampsSection.style.display = section === 'stamps' ? 'block' : 'none';
    coinsSection.style.display = section === 'coins' ? 'block' : 'none';

    // Анімація заголовків
    document.querySelectorAll('.section-title').forEach(title => {
        title.classList.remove('active');
    });
    const activeTitle = section === 'stamps' 
        ? stampsSection.querySelector('.section-title')
        : coinsSection.querySelector('.section-title');
    activeTitle.classList.add('active');

    // Відображення відповідних елементів
    if (section === 'stamps') {
        displayItems(stamps, 'stamps-container');
    } else if (section === 'coins') {
        displayItems(coins, 'coins-container');
    }
}

// Зміни в функції `displayItems`
function displayItems(items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Очищення контейнера
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
        `;
        card.onclick = () => openModal(item);
        container.appendChild(card);
    });
}

function openModal(item) {
    document.getElementById('item-title').textContent = item.title;
    document.getElementById('item-image').src = item.image;
    document.getElementById('item-description').textContent = item.description;
    document.getElementById('item-details').textContent = item.details;
    document.getElementById('modal').classList.add('show');
}

function closeModal() {
    document.getElementById('modal').classList.remove('show');
}

showSection('stamps');
