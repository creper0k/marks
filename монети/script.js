// Масиви даних
const stamps = [
    { 
        id: 1,
        title: 'Марка України 2023',
        images: ['images (1).jpg'],
        description: 'Поштова марка присвячена річниці Незалежності України', 
        details: 'Номінал: 10 грн. Рік випуску: 2023', 
    },
    {
        id: 2,
        title: '1994 марка 3-й Стандарт Ж - порвана ліска №61',
        images: ['images (1).jpg', 'images (2).jpg', 'Без названия.jpg'],
        description: 'Марка з серії третього стандарту. Відомий дефект: порвана ліска.',
        details: 'Номер каталогу: №61. Рік випуску: 1994.',
    },
    {
        id: 3,
        title: 'Марка "Квітуча Україна" 2021',
        images: ['images (2).jpg'],
        description: 'Художня марка із серії "Квітуча Україна", із зображенням традиційних українських квітів',
        details: 'Номінал: 15 грн. Рік випуску: 2021. Тираж: 100 000',
    },
    {
        id: 4,
        title: 'Марка "Герої України" 2022',
        images: ['images (1).jpg', 'images (2).jpg'],
        description: 'Пам\'ятна марка на честь захисників острова Зміїний',
        details: 'Номінал: 23 грн. Рік випуску: 2022. Тираж: 1 000 000',
    },
    {
        id: 5,
        title: 'Марка "Українське мистецтво" 2020',
        images: ['images (2).jpg'],
        description: 'Серія марок присвячена українському народному мистецтву, зображує петриківський розпис',
        details: 'Номінал: 12 грн. Рік випуску: 2020. Стан: ідеальний',
    },
    {
        id: 6,
        title: 'Марка "Різдво в Україні" 2023',
        images: ['images (1).jpg'],
        description: 'Святкова марка із зображенням різдвяних традицій України',
        details: 'Номінал: 18 грн. Рік випуску: 2023. Тираж: 50 000',
    },
    {
        id: 7,
        title: 'Марка "Карпати" 2022',
        images: ['images (2).jpg', 'images (1).jpg'],
        description: 'Серія марок присвячена природі Карпатських гір',
        details: 'Номінал: 15 грн. Рік випуску: 2022. Тираж: 80 000',
    },
    {
        id: 8,
        title: 'Марка "Космос України" 2021',
        images: ['images (1).jpg'],
        description: 'Марка присвячена досягненням України в космічній галузі',
        details: 'Номінал: 20 грн. Рік випуску: 2021. Спеціальне видання',
    }
];

const coins = [
    { 
        id: 1,
        title: 'Монета України 1996',
        images: ['images (2).jpg'],
        description: 'Пам\'ятна монета присвячена 5-й річниці Незалежності України', 
        details: 'Номінал: 2 грн. Рік випуску: 1996. Метал: нейзильбер', 
    },
    {
        id: 2,
        title: 'Український математичний конкурс, Остроградський, 2002',
        images: ['085663dfcfc8323735f0b03e26d98db2ecf07b58.jpg', '699ba0d1f0d262aeac9a8222fd43bc3a2557e120.jpg'],
        description: 'Медаль Національного банку України, присвячена математичному конкурсу Остроградського',
        details: 'Стан: Proof. Рік випуску: 2002. Метал: срібло 925 проби',
    },
    {
        id: 3,
        title: 'Монета "Козак Мамай" 2019',
        images: ['images (1).jpg'],
        description: 'Пам\'ятна монета із серії "Українська спадщина", присвячена легендарному козаку Мамаю',
        details: 'Номінал: 5 грн. Рік випуску: 2019. Метал: нейзильбер. Тираж: 40 000',
    },
    {
        id: 4,
        title: 'Монета "Київська Русь" 2018',
        images: ['images (2).jpg', 'images (1).jpg'],
        description: 'Колекційна монета із серії "Історія України", присвячена періоду Київської Русі',
        details: 'Номінал: 20 грн. Рік випуску: 2018. Метал: срібло. Тираж: 2 500',
    },
    {
        id: 5,
        title: 'Монета "100 років Академії наук" 2018',
        images: ['images (1).jpg'],
        description: 'Ювілейна монета на честь 100-річчя Національної академії наук України',
        details: 'Номінал: 5 грн. Рік випуску: 2018. Метал: нейзильбер. Стан: UNC',
    },
    {
        id: 6,
        title: 'Монета "Щедрик" 2022',
        images: ['images (2).jpg', 'images (1).jpg'],
        description: 'Пам\'ятна монета на честь 100-річчя першого виконання "Щедрика" за кордоном',
        details: 'Номінал: 10 грн. Рік випуску: 2022. Метал: срібло. Тираж: 3 000',
    },
    {
        id: 7,
        title: 'Монета "Чорнобиль" 2021',
        images: ['images (1).jpg'],
        description: 'Пам\'ятна монета до 35-річчя Чорнобильської катастрофи',
        details: 'Номінал: 5 грн. Рік випуску: 2021. Метал: нейзильбер. Тираж: 30 000',
    },
    {
        id: 8,
        title: 'Монета "Українська Писанка" 2023',
        images: ['images (2).jpg'],
        description: 'Колекційна монета із серії "Українські традиції"',
        details: 'Номінал: 25 грн. Рік випуску: 2023. Метал: срібло. Тираж: 2 000',
    }
];

// Глобальні змінні
let isLoading = false;
let currentIndex = 0;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Функції для роботи з інтерфейсом
function showSection(section) {
    // Видаляємо 'stamps-' або 'coins-' з section, якщо вони є
    section = section.replace('stamps-', '').replace('coins-', '');
    
    const stampsSection = document.getElementById('stamps-section');
    const coinsSection = document.getElementById('coins-section');
    const links = document.querySelectorAll('nav a');

    // Оновлюємо відображення секцій
    stampsSection.style.display = section === 'stamps' ? 'block' : 'none';
    coinsSection.style.display = section === 'coins' ? 'block' : 'none';

    // Оновлюємо активне посилання
    links.forEach(link => {
        const href = link.getAttribute('href').replace('#', '');
        link.classList.toggle('active', href === section);
    });

    // Відображаємо відповідні елементи
    if (section === 'stamps') {
        displayItems(stamps, 'stamps-container');
    } else if (section === 'coins') {
        displayItems(coins, 'coins-container');
    }
}

function displayItems(items, containerId) {
    const container = document.getElementById(containerId);
    const type = containerId.includes('stamps') ? 'stamps' : 'coins';
    const fragment = document.createDocumentFragment();
    
    container.innerHTML = '';
    
    items.forEach((item, index) => {
        const isFavorite = favorites.some(f => f.id === index && f.type === type);
        const card = createItemCard(item, index, type, isFavorite);
        fragment.appendChild(card);
    });
    
    container.appendChild(fragment);
}

function createItemCard(item, index, type, isFavorite) {
    const card = document.createElement('div');
    card.className = `item-card ${isFavorite ? 'favorite' : ''}`;
    card.setAttribute('data-id', index);
    card.setAttribute('data-type', type);
    
    card.innerHTML = `
        <button class="favorite-button" onclick="toggleFavorite(${index}, '${type}', event)">
            ${isFavorite ? '❤' : '♡'}
        </button>
        <img src="${item.images[0]}" alt="${item.title}" loading="lazy">
        <h3>${item.title}</h3>
        <p class="item-preview">${item.description.substring(0, 50)}...</p>
    `;
    
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('favorite-button')) {
            openModal(item, index, type === 'stamps' ? stamps : coins);
        }
    });
    
    return card;
}

function toggleFavorite(itemId, type, event) {
    event.stopPropagation();
    const favoriteIndex = favorites.findIndex(f => f.id === itemId && f.type === type);
    
    if (favoriteIndex === -1) {
        favorites.push({ id: itemId, type });
    } else {
        favorites.splice(favoriteIndex, 1);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
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

function toggleFavoritesHighlight() {
    const cards = document.querySelectorAll('.item-card');
    const isHighlighting = document.querySelector('.item-card.highlight');
    
    if (isHighlighting) {
        cards.forEach(card => card.classList.remove('highlight'));
    } else {
        cards.forEach(card => {
            if (card.classList.contains('favorite')) {
                card.classList.add('highlight');
            }
        });
    }
}

// Функції для модального вікна
function openModal(item, index, items) {
    currentIndex = 0;
    const itemImages = item.images;
    const modal = document.getElementById('modal');
    const imageContainer = document.querySelector('.modal-image-container');
    
    document.getElementById('item-title').textContent = item.title;
    const image = document.getElementById('item-image');
    
    let counterDiv = document.querySelector('.image-counter');
    if (!counterDiv) {
        counterDiv = document.createElement('div');
        counterDiv.className = 'image-counter';
        imageContainer.appendChild(counterDiv);
    }
    
    function updateCounter() {
        counterDiv.textContent = `${currentIndex + 1} / ${itemImages.length}`;
    }
    
    image.onload = () => {
        image.style.opacity = '1';
        updateCounter();
    };
    
    image.style.opacity = '0';
    image.src = itemImages[currentIndex];
    
    document.getElementById('item-description').textContent = item.description;
    document.getElementById('item-details').textContent = item.details;

    const navigationButtons = document.getElementById('navigation-buttons');
    navigationButtons.style.display = itemImages.length > 1 ? 'flex' : 'none';
    counterDiv.style.display = itemImages.length > 1 ? 'block' : 'none';

    image.setAttribute('data-items', JSON.stringify(itemImages));
    modal.classList.add('show');
}

function closeModal() {
    document.getElementById('modal').classList.remove('show');
}

function changeImage(direction) {
    const itemImages = JSON.parse(document.getElementById('item-image').getAttribute('data-items'));
    const totalImages = itemImages.length;
    const image = document.getElementById('item-image');
    
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    image.src = itemImages[currentIndex];
    
    const counter = document.querySelector('.image-counter');
    if (counter) {
        counter.textContent = `${currentIndex + 1} / ${totalImages}`;
    }
}

// Функції для редактора
function handleImageUpload(files) {
    return new Promise((resolve) => {
        const previewContainer = document.getElementById('imagePreview');
        previewContainer.innerHTML = '';
        const uploadedImages = [];
        let loadedCount = 0;

        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    const img = new Image();
                    img.onload = function() {
                        const preview = document.createElement('div');
                        preview.className = 'image-preview-item';
                        preview.innerHTML = `
                            <img src="${e.target.result}" alt="Preview">
                            <button type="button" class="remove-image">&times;</button>
                        `;
                        previewContainer.appendChild(preview);
                        
                        uploadedImages.push({
                            url: e.target.result,
                            width: img.width,
                            height: img.height
                        });
                        
                        preview.querySelector('.remove-image').onclick = function() {
                            preview.remove();
                            const index = uploadedImages.findIndex(img => img.url === e.target.result);
                            if (index > -1) {
                                uploadedImages.splice(index, 1);
                            }
                        };

                        loadedCount++;
                        if (loadedCount === files.length) {
                            resolve(uploadedImages);
                        }
                    };
                    
                    img.src = e.target.result;
                };
                
                reader.readAsDataURL(file);
            }
        });
    });
}

function openEditor() {
    document.getElementById('editorModal').style.display = 'flex';
}

function closeEditor() {
    document.getElementById('editorModal').style.display = 'none';
}

// Ініціалізація
document.addEventListener('DOMContentLoaded', () => {
    showSection('stamps');
    
    document.getElementById('addButton').onclick = openEditor;
    document.getElementById('favoritesButton').onclick = toggleFavoritesHighlight;
    
    document.getElementById('search').addEventListener('input', (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const currentSection = document.querySelector('section[style*="block"]').id;
        const items = currentSection === 'stamps-section' ? stamps : coins;
        
        const filteredItems = items.filter(item => 
            item.title.toLowerCase().includes(searchQuery) ||
            item.description.toLowerCase().includes(searchQuery)
        );
        
        displayItems(filteredItems, `${currentSection.split('-')[0]}-container`);
    });
    
    let uploadedImages = [];
    document.getElementById('itemImages').addEventListener('change', async function(e) {
        uploadedImages = await handleImageUpload(this.files);
    });
    
    document.getElementById('editorForm').onsubmit = function(e) {
        e.preventDefault();
        
        if (uploadedImages.length === 0) {
            alert('Додайте хоча б одне зображення');
            return;
        }
        
        const newItem = {
            id: Date.now(),
            title: document.getElementById('itemTitle').value,
            description: document.getElementById('itemDescription').value,
            details: document.getElementById('itemDetails').value,
            images: uploadedImages.map(img => img.url)
        };
        
        const type = document.getElementById('itemType').value;
        if (type === 'stamps') {
            stamps.push(newItem);
        } else {
            coins.push(newItem);
        }
        
        this.reset();
        document.getElementById('imagePreview').innerHTML = '';
        uploadedImages = [];
        
        closeEditor();
        showSection(type);
    };
    
    // Додаємо обробники для навігаційних посилань
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('href').replace('#', '');
            showSection(section);
            
            // Оновлюємо URL без перезавантаження сторінки
            history.pushState(null, '', `#${section}`);
        });
    });

    // Перевіряємо хеш в URL при завантаженні
    const initialSection = window.location.hash.replace('#', '') || 'stamps';
    showSection(initialSection);
    
    // Додаємо обробник для кнопки "назад" в браузері
    window.addEventListener('popstate', () => {
        const section = window.location.hash.replace('#', '') || 'stamps';
        showSection(section);
    });
});
