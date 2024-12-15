let isLoading = false;

const stamps = [
    { 
        title: 'Марка України 2023',
        images: ['images (1).jpg'],
        description: 'Опис марки', 
        details: 'Деталі марки', 
    },
    {
        title: '1994 марка 3-й Стандарт Ж - порвана ліска №61',
        images: ['images (1).jpg', 'images (2).jpg', 'Без названия.jpg'],
        description: 'Марка з серії третього стандарту. Відомий дефект: порвана ліска.',
        details: 'Номер каталогу: №61. Рік випуску: 1994.',
    }
];

const coins = [
    { 
        title: 'Монета України 1996',
        images: ['images (2).jpg'],
        description: 'Опис монети', 
        details: 'Деталі монети', 
    },
    {
        title: 'Український математичний конкурс, Остроградський, 2002 року',
        images: ['images (1).jpg', 'images (2).jpg'],
        description: 'Медалі Національного банку України, присвячена математичному конкурсу Остроградського.',
        details: 'Стан: Proof. Рік випуску: 2002.',
    }
];

let currentIndex = 0;

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

function displayItems(items, containerId) {
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';
    isLoading = true;

    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    const loadImages = items.map((item, index) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve(); // Обробляємо помилку завантаження
            img.src = item.images[0];
        });
    });

    Promise.all(loadImages).then(() => {
        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'item-card';
            card.innerHTML = `
                <img src="${item.images[0]}" alt="${item.title}" loading="lazy">
                <h3>${item.title}</h3>
                <p class="item-preview">${item.description.substring(0, 50)}...</p>
            `;
            card.onclick = () => openModal(item, index, items);
            container.appendChild(card);
        });

        loader.style.display = 'none';
        isLoading = false;
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

    // Пок��зуємо результати пошуку
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
