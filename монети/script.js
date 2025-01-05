let isLoading = false;
let currentIndex = 0;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const stamps = [
    { 
        title: 'Марка України 2023',
        images: ['images (1).jpg'],
        description: 'Поштова марка присвячена річниці Незалежності України', 
        details: 'Номінал: 10 грн. Рік випуску: 2023', 
    },
    {
        title: '1994 марка 3-й Стандарт Ж - порвана ліска №61',
        images: ['images (1).jpg', 'images (2).jpg', 'Без названия.jpg'],
        description: 'Марка з серії третього стандарту. Відомий дефект: порвана ліска.',
        details: 'Номер каталогу: №61. Рік випуску: 1994.',
    },
    {
        title: 'Марка "Квітуча Україна" 2021',
        images: ['images (2).jpg'],
        description: 'Художня марка із серії "Квітуча Україна", із зображенням традиційних українських квітів',
        details: 'Номінал: 15 грн. Рік випуску: 2021. Тираж: 100 000',
    },
    {
        title: 'Марка "Герої України" 2022',
        images: ['images (1).jpg', 'images (2).jpg'],
        description: 'Пам\'ятна марка на честь захисників острова Зміїний',
        details: 'Номінал: 23 грн. Рік випуску: 2022. Тираж: 1 000 000',
    },
    {
        title: 'Марка "Українське мистецтво" 2020',
        images: ['images (2).jpg'],
        description: 'Серія марок присвячена українському народному мистецтву, зображує петриківський розпис',
        details: 'Номінал: 12 грн. Рік випуску: 2020. Стан: ідеальний',
    }
];

const coins = [
    { 
        title: 'Монета України 1996',
        images: ['p1ei695r2g18vk7lj97fsjeki1d.jpg'],
        description: 'Пам\'ятна монета присвячена 5-й річниці Незалежності України', 
        details: 'Номінал: 2 грн. Рік випуску: 1996. Метал: нейзильбер', 
    },
    {
        title: 'Український математичний конкурс, Остроградський, 2002',
        images: ['699ba0d1f0d262aeac9a8222fd43bc3a2557e120.jpg', '085663dfcfc8323735f0b03e26d98db2ecf07b58.jpg'],
        description: 'Медаль Національного банку України, присвячена математичному конкурсу Остроградського',
        details: 'Стан: Proof. Рік випуску: 2002. Метал: срібло 925 проби',
    },
    {
        title: 'Монета "Козак Мамай" 2019',
        images: ['Без названия (1).jpg', 'Без названия (2).jpg'],
        description: 'Пам\'ятна монета із серії "Українська спадщина", присвячена легендарному козаку Мамаю',
        details: 'Номінал: 5 грн. Рік випуску: 2019. Метал: нейзильбер. Тираж: 40 000',
    },
    {
        title: 'Монета "Київська Русь" 2001',
        images: ['Coin_of_Ukraine_Kyiv_Rus_A.jpg', 'Coin_of_Ukraine_Kyiv_Rus_R.jpg'],
        description: 'Колекційна монета із серії "Історія України", присвячена періоду Київської Русі',
        details: 'Номінал: 20 грн. Рік випуску: 2001. Метал: срібло. Тираж: 2 500',
    },
    {
        title: 'Монета "100 років Академії наук" 2018',
        images: ['moneta-ukrainy-5-griven-100-let-akademii-nauk-2395-600x600.jpg', 'Без названия (3).jpg'],
        description: 'Ювілейна монета на честь 100-річчя Національної академії наук України',
        details: 'Номінал: 5 грн. Рік випуску: 2018. Метал: нейзильбер. Стан: UNC',
    }
];

function showSection(section) {
    const stampsSection = document.getElementById('stamps-section');
    const coinsSection = document.getElementById('coins-section');

    document.getElementById('stamps-container').innerHTML = '';
    document.getElementById('coins-container').innerHTML = '';

    stampsSection.style.display = section === 'stamps' ? 'block' : 'none';
    coinsSection.style.display = section === 'coins' ? 'block' : 'none';

    document.querySelectorAll('.section-title').forEach(title => title.classList.remove('active'));
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${section}`);
    });

    if (section === 'stamps') {
        displayItems(stamps, 'stamps-container');
    } else if (section === 'coins') {
        displayItems(coins, 'coins-container');
    }
}

function handleImageError(img) {
    img.onerror = () => {
        img.src = 'placeholder.jpg';
        img.alt = 'Зображення недоступне';
    };
}

function displayItems(items, containerId) {
    const container = document.getElementById(containerId);
    const type = containerId.includes('stamps') ? 'stamps' : 'coins';
    
    container.innerHTML = '';
    
    items.forEach((item, index) => {
        const isFavorite = favorites.some(f => f.id === index && f.type === type);
        const card = document.createElement('div');
        card.className = `item-card ${isFavorite ? 'favorite' : ''}`;
        card.setAttribute('data-id', index);
        card.setAttribute('data-type', type);
        
        card.innerHTML = `
            <button class="favorite-button" onclick="toggleFavorite(${index}, '${type}')">
                ${isFavorite ? '❤' : '♡'}
            </button>
            <img src="${item.images[0]}" alt="${item.title}" loading="lazy">
            <h3>${item.title}</h3>
            <p class="item-preview">${item.description.substring(0, 50)}...</p>
        `;
        
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('favorite-button')) {
                openModal(item, index, items);
            }
        });
        
        container.appendChild(card);
    });
}

function openModal(item, index, items) {
    currentIndex = index;
    const itemImages = item.images;
    const modal = document.getElementById('modal');
    const imageContainer = document.querySelector('.modal-image-container');
    
    // Очищаємо попередні елементи
    const oldCounter = imageContainer.querySelector('.image-counter');
    const oldHint = imageContainer.querySelector('.zoom-hint');
    if (oldCounter) oldCounter.remove();
    if (oldHint) oldHint.remove();

    document.getElementById('item-title').textContent = item.title;
    const image = document.getElementById('item-image');
    
    image.onload = () => {
        image.style.opacity = '1';
        // Додаємо підказку про можливість збільшення
        const hint = document.createElement('div');
        hint.className = 'zoom-hint';
        hint.textContent = 'Клікніть для збільшення';
        imageContainer.appendChild(hint);
        
        // Приховуємо підказку через 3 секунди
        setTimeout(() => {
            hint.style.opacity = '0';
            setTimeout(() => hint.remove(), 500);
        }, 3000);
    };
    
    image.style.opacity = '0';
    image.src = itemImages[currentIndex];
    
    document.getElementById('item-description').textContent = item.description;
    document.getElementById('item-details').textContent = item.details;

    const navigationButtons = document.getElementById('navigation-buttons');
    if (itemImages.length > 1) {
        navigationButtons.style.display = 'block';
        const counter = document.createElement('div');
        counter.className = 'image-counter';
        counter.textContent = `${currentIndex + 1}/${itemImages.length}`;
        imageContainer.appendChild(counter);
    } else {
        navigationButtons.style.display = 'none';
    }

    image.setAttribute('data-items', JSON.stringify(itemImages));
    modal.classList.add('show');
}

function closeModal() {
    document.getElementById('modal').classList.remove('show');
    document.querySelector('.modal-image-container').classList.remove('zoomed');
    const img = document.querySelector('.modal-image-container img');
    img.style.transform = '';
    translateX = 0;
    translateY = 0;
}

function changeImage(direction) {
    const itemImages = JSON.parse(document.getElementById('item-image').getAttribute('data-items'));
    const totalImages = itemImages.length;
    const image = document.getElementById('item-image');
    
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    
    image.classList.add('image-transition');
    image.src = itemImages[currentIndex];
    
    const counter = document.querySelector('.image-counter');
    if (counter) {
        counter.textContent = `${currentIndex + 1}/${totalImages}`;
    }
    
    setTimeout(() => {
        image.classList.remove('image-transition');
    }, 300);
}

document.querySelector('.modal-image-container').addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        this.classList.toggle('zoomed');
        if (this.classList.contains('zoomed')) {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.target.style.transformOrigin = `${x}px ${y}px`;
        } else {
            e.target.style.transformOrigin = 'center';
            e.target.style.transform = '';
        }
    }
});

let isDragging = false;
let startX, startY, translateX = 0, translateY = 0;

document.querySelector('.modal-image-container').addEventListener('mousedown', function(e) {
    if (this.classList.contains('zoomed')) {
        isDragging = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
    }
});

document.addEventListener('mousemove', function(e) {
    if (isDragging) {
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        const img = document.querySelector('.modal-image-container img');
        img.style.transform = `scale(1.5) translate(${translateX}px, ${translateY}px)`;
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});

// Додаємо функцію пошуку
function searchItems(query) {
    const searchQuery = query.toLowerCase();
    
    const filteredStamps = stamps.filter(item => 
        item.title.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery)
    );
    
    const filteredCoins = coins.filter(item => 
        item.title.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery)
    );

    // Показуємо результати пошуку
    if (document.getElementById('stamps-section').style.display === 'block') {
        displayItems(filteredStamps, 'stamps-container');
    } else {
        displayItems(filteredCoins, 'coins-container');
    }
}

// Додаємо функцію сортування
function sortItems(type) {
    const container = document.querySelector('.items-container[style*="block"]');
    const items = container.id === 'stamps-container' ? stamps : coins;
    
    const sortedItems = [...items].sort((a, b) => {
        if (type === 'title') {
            return a.title.localeCompare(b.title);
        } else if (type === 'year') {
            const yearA = a.details.match(/\d{4}/) || ['0'];
            const yearB = b.details.match(/\d{4}/) || ['0'];
            return yearA[0] - yearB[0];
        }
    });

    displayItems(sortedItems, container.id);
}

function updateFavoritesBadge() {
    const badge = document.getElementById('favoritesBadge');
    badge.textContent = favorites.length;
}

function toggleFavorite(itemId, type) {
    event.stopPropagation();
    const favoriteIndex = favorites.findIndex(f => f.id === itemId && f.type === type);
    
    if (favoriteIndex === -1) {
        favorites.push({ id: itemId, type });
    } else {
        favorites.splice(favoriteIndex, 1);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesBadge();
    
    const card = document.querySelector(`.item-card[data-id="${itemId}"][data-type="${type}"]`);
    if (card) {
        card.classList.toggle('favorite');
        const favoriteButton = card.querySelector('.favorite-button');
        favoriteButton.innerHTML = card.classList.contains('favorite') ? '❤' : '♡';
        
        if (document.querySelector('.item-card.highlight')) {
            card.classList.toggle('highlight');
        }
    }
}

// Додаємо функції для редактора
function openEditor() {
    document.getElementById('editorModal').style.display = 'flex';
}

function closeEditor() {
    document.getElementById('editorModal').style.display = 'none';
}

document.getElementById('addButton').onclick = openEditor;

document.getElementById('editorForm').onsubmit = function(e) {
    e.preventDefault();
    
    const newItem = {
        title: document.getElementById('itemTitle').value,
        description: document.getElementById('itemDescription').value,
        details: document.getElementById('itemDetails').value,
        images: ['placeholder.jpg'] // В реальному додатку тут буде завантаження зображень
    };
    
    const type = document.getElementById('itemType').value;
    if (type === 'stamps') {
        stamps.push(newItem);
    } else {
        coins.push(newItem);
    }
    
    closeEditor();
    showSection(type);
};

// Ініціалізація
updateFavoritesBadge();

document.addEventListener('DOMContentLoaded', () => {
    // Додаємо поле пошуку та сортування
    const controls = document.createElement('div');
    controls.className = 'controls';
    controls.innerHTML = `
        <div class="search-container">
            <input type="text" id="search" placeholder="Пошук..." aria-label="Пошук">
        </div>
        <div class="sort-container">
            <select id="sort" aria-label="Сортування">
                <option value="">Сортування</option>
                <option value="title">За назвою</option>
                <option value="year">За роком</option>
            </select>
        </div>
    `;
    document.querySelector('main').prepend(controls);

    // Додаємо обробники подій для пошуку та сортування
    document.getElementById('search').addEventListener('input', (e) => {
        searchItems(e.target.value);
    });

    document.getElementById('sort').addEventListener('change', (e) => {
        sortItems(e.target.value);
    });

    // Спочатку показуємо марки
    showSection('stamps');

    // Додаємо обробники подій один раз
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('href').substring(1);
            showSection(section);
            document.querySelector(`#${section}-section`).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Обробники для модального вікна
    document.getElementById('modal').addEventListener('click', (event) => {
        if (event.target === document.getElementById('modal')) {
            closeModal();
        }
    });

    // Клавіатурна навігація
    document.addEventListener('keydown', (event) => {
        const modal = document.getElementById('modal');
        const navigationButtons = document.getElementById('navigation-buttons');
        
        if (event.key === 'Escape') {
            closeModal();
        } else if (modal.classList.contains('show') && navigationButtons.style.display === 'block') {
            if (event.key === 'ArrowLeft') {
                changeImage(-1);
            } else if (event.key === 'ArrowRight') {
                changeImage(1);
            }
        }
    });

    // Прокрутка зображень колесом миші
    document.getElementById('modal').addEventListener('wheel', (event) => {
        const navigationButtons = document.getElementById('navigation-buttons');
        if (navigationButtons.style.display === 'block') {
            event.preventDefault();
            const direction = event.deltaY > 0 ? 1 : -1;
            changeImage(direction);
        }
    });
});

// Додаємо функцію для підсвічування вибраних елементів
function toggleFavoritesHighlight() {
    const cards = document.querySelectorAll('.item-card');
    const containers = document.querySelectorAll('.items-container');
    const isHighlighting = document.querySelector('.item-card.highlight');
    
    if (isHighlighting) {
        cards.forEach(card => card.classList.remove('highlight'));
        containers.forEach(container => container.classList.remove('highlighting'));
    } else {
        cards.forEach(card => {
            if (card.classList.contains('favorite')) {
                card.classList.add('highlight');
            }
        });
        containers.forEach(container => container.classList.add('highlighting'));
    }
}
// Додаємо обробник для кнопки вибраних елементів
document.getElementById('favoritesButton').onclick = toggleFavoritesHighlight;
