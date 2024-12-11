const stamps = [
    { 
        title: 'Марка України 2023', 
        images: ['5BE849D40090.jpg'],
        description: 'Опис марки', 
        details: 'Деталі марки', 
    },
    {
        title: '1994 марка 3-й Стандарт Ж - порвана ліска №61',
        images: ['5BE849D40090.jpg'],
        description: 'Опис короткий',
        details: 'Деталі короткі',
    },
];

const coins = [
    { 
        title: 'Монета України 1996',
        images: ['154583957.jpg', '13685583838600.jpg'],
        description: 'Опис монети', 
        details: 'Деталі монети', 
    },
    {
        title: 'Український математичний конкурс, Остроградський, 2002 року',
        images: ['5BE849D40090.jpg'],
        description: 'Медаль Національного банку України, присвячена математичному конкурсу Остроградського.',
        details: 'Стан: Proof. Рік випуску: 2002.',
    },
];

let currentIndex = 0;

function showSection(section) {
    document.getElementById('stamps-section').style.display = section === 'stamps' ? 'block' : 'none';
    document.getElementById('coins-section').style.display = section === 'coins' ? 'block' : 'none';

    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    document.querySelector(`nav a[onclick="showSection('${section}')"]`).classList.add('active');

    if (section === 'stamps') {
        displayItems(stamps, 'stamps-container');
    } else {
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

function openModal(item, index) {
    currentIndex = index;
    const itemImages = item.images;

    document.getElementById('item-title').textContent = item.title;
    document.getElementById('item-image').src = itemImages[currentIndex];
    document.getElementById('item-description').textContent = item.description;
    document.getElementById('item-details').textContent = item.details;

    // Показуємо/ховаємо кнопки навігації
    document.querySelector('.arrow.left').style.display = itemImages.length > 1 ? 'block' : 'none';
    document.querySelector('.arrow.right').style.display = itemImages.length > 1 ? 'block' : 'none';

    document.getElementById('modal').classList.add('show');
}

function closeModal() {
    document.getElementById('modal').classList.remove('show');
}

function changeImage(direction) {
    const itemImages = stamps[currentIndex].images;
    const totalImages = itemImages.length;

    currentIndex = (currentIndex + direction + totalImages) % totalImages;

    document.getElementById('item-image').src = itemImages[currentIndex];
}

showSection('stamps');
