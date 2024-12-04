const stamps = [
    { 
        title: 'Марка України 2023', 
        images: ['154583957.jpg'], // одне зображення
        description: 'Опис марки', 
        details: 'Деталі марки', 
    },
    {
        title: '1994 марка 3-й Стандарт Ж - порвана ліска №61',
        images: ['5BE849D40090.jpg', 'thumb_558154_products_big.jpg'], // два зображення
        description: 'Марка з серії третього стандарту. Відомий дефект: порвана ліска.',
        details: 'Номер каталогу: №61. Рік випуску: 1994.',
    },
];

const coins = [
    { 
        title: 'Монета України 1996',
        images: ['154583957.jpg'],
        description: 'Опис монети', 
        details: 'Деталі монети', 
    },
    {
        title: 'Український математичний конкурс, Остроградський, 2002 року',
        images: ['thumb_558154_products_big.jpg'],
        description: 'Медаль Національного банку України, присвячена математичному конкурсу Остроградського.',
        details: 'Стан: Proof. Рік випуску: 2002.',
    },
];

let currentIndex = 0;

function showSection(section) {
    const stampsSection = document.getElementById('stamps-section');
    const coinsSection = document.getElementById('coins-section');

    stampsSection.style.display = section === 'stamps' ? 'block' : 'none';
    coinsSection.style.display = section === 'coins' ? 'block' : 'none';

    document.querySelectorAll('.section-title').forEach(title => title.classList.remove('active'));
    const activeTitle = section === 'stamps'
        ? stampsSection.querySelector('.section-title')
        : coinsSection.querySelector('.section-title');
    activeTitle.classList.add('active');

    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    document.querySelector(`nav a[onclick="showSection('${section}')"]`).classList.add('active');

    if (section === 'stamps') {
        displayItems(stamps, 'stamps-container');
    } else if (section === 'coins') {
        displayItems(coins, 'coins-container');
    }
}

function displayItems(items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <img src="${item.images[0]}" alt="${item.title}">
            <h3>${item.title}</h3>
        `;
        card.onclick = () => openModal(item, index, items);
        container.appendChild(card);
    });
}

function openModal(item, index, items) {
    currentIndex = index;
    const itemImages = item.images; // отримуємо зображення

    // Оновлюємо вміст модального вікна
    document.getElementById('item-title').textContent = item.title;
    document.getElementById('item-image').src = itemImages[currentIndex];
    document.getElementById('item-description').textContent = item.description;
    document.getElementById('item-details').textContent = item.details;

    // Якщо зображень більше однієї, показуємо кнопки для перемикання
    const navigationButtons = document.getElementById('navigation-buttons');
    if (itemImages.length > 1) {
        navigationButtons.style.display = 'block';
    } else {
        navigationButtons.style.display = 'none';
    }

    // Додаємо всі зображення в data атрибут для використання при перемиканні
    document.getElementById('item-image').setAttribute('data-items', JSON.stringify(itemImages));

    // Відкриваємо модальне вікно
    document.getElementById('modal').classList.add('show');
}

function closeModal() {
    document.getElementById('modal').classList.remove('show');
}

function changeImage(direction) {
    const itemImages = JSON.parse(document.getElementById('item-image').getAttribute('data-items'));
    const totalImages = itemImages.length;

    // Оновлюємо індекс зображення
    currentIndex = (currentIndex + direction + totalImages) % totalImages;

    // Оновлюємо зображення в модальному вікні
    document.getElementById('item-image').src = itemImages[currentIndex];
}

// Спочатку показуємо марку
showSection('stamps');

// Додаємо подію для закриття модального вікна при натисканні на задній фон
document.getElementById('modal').addEventListener('click', (event) => {
    if (event.target === document.getElementById('modal')) {
        closeModal();
    }
});
