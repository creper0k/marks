// Масиви даних
const stamps = [
    { 
        id: 1,
        title: 'Марка України 2023: Річниця Незалежності України',
        images: ['424946586.webp'],
        description: 'Поштова марка, присвячена 32-й річниці Незалежності України',
        details: 'Номінал: 10 грн. Рік випуску: 2023',
    },
    {
        id: 2,
        title: '1994 марка 3-й Стандарт Ж - порвана ліска №61',
        images: ['1994_marki_3_j_standart_zh_v_pare_porvana_leska_61.jpg', '1994_marka_3_j_standart_zh_porvana_leska_61.jpg'],
        description: 'Марка третього стандарту 1994 року з дефектом – порвана ліска. Рідкісна в колекційних кругах.',
        details: 'Номер каталогу: №61. Рік випуску: 1994.',
    },
    {
        id: 3,
        title: 'Марка 150-річчя мандрівника Миклухо-Маклая 1-й випуск №111',
        images: ['images (5).jpg'],
        description: 'Марка, випущена до 150-річчя з дня народження Миклухо-Маклая, присвячена його науковим досягненням і подорожам. На марці зображено портрет мандрівника та символи його досліджень',
        details: 'Номінал: 2 грн. Рік випуску: 1996. Тираж: 1 000 000',
    },
    {
        id: 4,
        title: 'Марка "Герої України" 2022: Захисники острова Зміїний',
        images: ['stamp14-770x540.jpg'],
        description: 'Пам\'ятна марка на честь героїзму захисників острова Зміїний у 2022 році.',
        details: 'Номінал: 23 грн. Рік випуску: 2022. Тираж: 1 000 000',
    },
    {
        id: 5,
        title: 'Марка "Космос Перший супутник Корольов (Ґудзик)"',
        images: ['2007_blok_kosmos_pervyj_sputnik_korolev_pugovica_859_bl_63_.jpg'],
        description: 'Блок "Космос. Перший супутник. Корольов" був випущений у 2007 році, щоб відзначити 50-річчя запуску першого штучного супутника Землі. На блоці зображено Сергія Корольова, основного конструктора цього супутника, а також зображення самого супутника.',
        details: 'Номінал: 10 грн. Рік випуску: 2007, номер каталогу: №859 (блок 63).',
    },
    {
        id: 6,
        title: 'Марка "Святослав Ріхтер"',
        images: ['2015_marka_bez_perforacii_svjatoslav_rihter_pianist_mnh_1425.jpg'],
        description: 'Пам\'ятна марка, присвячена видатному піаністу Святославу Ріхтеру.',
        details: 'Номінал: 15 грн. Рік випуску: 2023. Тираж: 500 000.',
    },
    {
        id: 7,
        title: 'Марка "Карпати" 2021',
        images: ['413488803.webp'],
        description: 'Марка, присвячена величі Карпат, на якій зображені мальовничі пейзажі та природні пам\'ятки.',
        details: 'Номінал: 195 грн. Рік випуску: 2021. Тираж: 80 000',
    },
    {
        id: 8,
        title: 'Марка 1995 "Подвійна друк: Гетьман Іван Мазепа" MNH №86',
        images: ['1995_marka_dvojnaja_pechat_getman_ivan_mazepa_mnh_86.jpg'],
        description: 'Рідкісна марка з подвійним друком, присвячена гетьману Івану Мазепі. Ідеальний стан (MNH).',
        details: 'Номінал: 20 грн. Рік випуску: 1995. Тираж: обмежений.',
    }
];

const coins = [
    { 
        id: 1,
        title: 'Монета України 1996',
        images: ['p1ei695r2g18vk7lj97fsjeki1d.jpg'],
        description: 'Пам\'ятна монета присвячена 5-й річниці Незалежності України', 
        details: 'Номінал: 2 грн. Рік випуску: 1996. Метал: нейзильбер', 
    },
    {
        id: 2,
        title: 'Український математичний конкурс, Остроградський, 2002',
        images: ['699ba0d1f0d262aeac9a8222fd43bc3a2557e120.jpg', '085663dfcfc8323735f0b03e26d98db2ecf07b58.jpg'],
        description: 'Медаль Національного банку України, присвячена математичному конкурсу Остроградського',
        details: 'Стан: Proof. Рік випуску: 2002. Метал: срібло 925 проби',
    },
    {
        id: 3,
        title: 'Монета "Козак Мамай" 2019',
        images: ['Без названия (2).jpg','Без названия (1).jpg'],
        description: 'Пам\'ятна монета із серії "Українська спадщина", присвячена легендарному козаку Мамаю',
        details: 'Номінал: 5 грн. Рік випуску: 2019. Метал: нейзильбер. Тираж: 40 000',
    },
    {
        id: 4,
        title: 'Монета "Київська Русь" 2018',
        images: ['Coin_of_Ukraine_Kyiv_Rus_A.jpg', 'Coin_of_Ukraine_Kyiv_Rus_R.jpg'],
        description: 'Колекційна монета із серії "Історія України", присвячена періоду Київської Русі',
        details: 'Номінал: 20 грн. Рік випуску: 2018. Метал: срібло. Тираж: 2 500',
    },
    {
        id: 5,
        title: 'Монета "100 років Академії наук" 2018',
        images: ['Без названия (3).jpg', 'moneta-ukrainy-5-griven-100-let-akademii-nauk-2395-600x600.jpg'],
        description: 'Ювілейна монета на честь 100-річчя Національної академії наук України',
        details: 'Номінал: 5 грн. Рік випуску: 2018. Метал: нейзильбер. Стан: UNC',
    },
    {
        id: 6,
        title: 'Монета "Щедрик" 2016',
        images: ['2717442963_w640_h640_2717442963.webp'],
        description: 'Монета Щедрик до 100-річчя першого хорового виконання твору М. Леонтовича',
        details: 'Номінал: 5 грн. Рік випуску: 2016. Метал: нейзильбер. Тираж: 50 000',
    },
    {
        id: 7,
        title: 'Монета "Чорнобиль" 2021',
        images: ['4055635194_w640_h320_moneta-nbu-chernobyl.webp', 'загружено.jpg'],
        description: 'Пам\'ятна монета до 35-річчя Чорнобильської катастрофи',
        details: 'Номінал: 5 грн. Рік випуску: 2021. Метал: нейзильбер. Тираж: 30 000',
    },
    {
        id: 8,
        title: 'Монета НБУ "Українська писанка" 2009',
        images: ['315503107.webp', '315503113.webp'],
        description: 'Колекційна монета із серії "Українські традиції"',
        details: 'Номінал: 20 грн. Рік випуску: 2009. Метал: срібло. Тираж: 8 000',
    }
];

// Глобальні змінні
let isLoading = false;
let currentIndex = 0;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let isFirstVisit = false;

// Глобальні змінні для обробки переміщення та масштабування
let isDragging = false;
let startX, startY;
let translateX = 0;
let translateY = 0;
let lastX, lastY;

// Глобальні функції-обробники
function handleDragStart(e) {
    const container = e.target.closest('.modal-image-container');
    if (!container || !container.classList.contains('zoomed')) return;
    
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    lastX = e.clientX;
    lastY = e.clientY;
    
    e.target.style.cursor = 'grabbing';
}

function handleDragMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    
    const image = document.querySelector('.modal-image-container img');
    const container = image.closest('.modal-image-container');
    
    const currentScale = parseFloat(image.style.transform.match(/scale\((.*?)\)/)?.[1] || 1);
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    
    // Розраховуємо реальні розміри збільшеного зображення
    const scaledWidth = image.naturalWidth * currentScale;
    const scaledHeight = image.naturalHeight * currentScale;
    
    // Розраховуємо максимальні межі переміщення
    const maxX = Math.max(0, (scaledWidth - container.clientWidth) / 2);
    const maxY = Math.max(0, (scaledHeight - container.clientHeight) / 2);
    
    // Оновлюємо позицію з урахуванням меж
    translateX = Math.min(Math.max(translateX + dx, -maxX), maxX);
    translateY = Math.min(Math.max(translateY + dy, -maxY), maxY);
    
    // Застосовуємо трансформацію тільки якщо є куди рухати
    if (maxX > 0 || maxY > 0) {
        image.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
    }
    
    lastX = e.clientX;
    lastY = e.clientY;
}

function handleDragEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    const image = document.querySelector('.modal-image-container img');
    if (image) {
        image.style.cursor = 'grab';
    }
}

function handleImageWheel(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        
        const image = e.target;
        const container = image.closest('.modal-image-container');
        const currentScale = parseFloat(image.style.transform.match(/scale\((.*?)\)/)?.[1] || 1);
        
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        let newScale = currentScale * delta;
        newScale = Math.min(Math.max(newScale, 0.5), 4);
        
        // Скидаємо переміщення якщо масштаб менше або дорівнює 1
        if (newScale <= 1) {
            translateX = 0;
            translateY = 0;
            image.style.transform = `scale(${newScale})`;
            container.classList.remove('zoomed');
            image.style.cursor = 'zoom-in';
        } else {
            // Зберігаємо поточне переміщення при зміні масштабу
            image.style.transform = `scale(${newScale}) translate(${translateX}px, ${translateY}px)`;
            container.classList.add('zoomed');
            image.style.cursor = 'grab';
        }
    }
}

// Функції для роботи з інтерфейсом
function showSection(section) {
    section = section.replace('stamps-', '').replace('coins-', '');
    
    const stampsSection = document.getElementById('stamps-section');
    const coinsSection = document.getElementById('coins-section');
    const links = document.querySelectorAll('nav a');

    stampsSection.style.display = section === 'stamps' ? 'block' : 'none';
    coinsSection.style.display = section === 'coins' ? 'block' : 'none';

    links.forEach(link => {
        const href = link.getAttribute('href').replace('#', '');
        link.classList.toggle('active', href === section);
    });

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
    card.style.setProperty('--card-index', index);
    
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
    
    // Оновлюємо всі відповідні кнопки на сторінці
    const isFavorite = favoriteIndex === -1;
    
    // Оновлюємо кнопку в картці
    const card = document.querySelector(`.item-card[data-id="${itemId}"][data-type="${type}"]`);
    if (card) {
        card.classList.toggle('favorite', isFavorite);
        const cardButton = card.querySelector('.favorite-button');
        cardButton.innerHTML = isFavorite ? '❤' : '♡';
        
        if (document.querySelector('.item-card.highlight')) {
            card.classList.toggle('highlight', isFavorite);
        }
    }
    
    // Оновлюємо кнопку в модальному вікні
    const modalContent = document.querySelector('.modal-content');
    if (modalContent && 
        modalContent.getAttribute('data-item-id') === itemId.toString() && 
        modalContent.getAttribute('data-item-type') === type) {
        const modalButton = modalContent.querySelector('.modal-favorite');
        modalButton.innerHTML = isFavorite ? '❤' : '♡';
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
    // Скидаємо змінні переміщення
    translateX = 0;
    translateY = 0;
    
    currentIndex = 0;
    const itemImages = item.images;
    const modal = document.getElementById('modal');
    const imageContainer = document.querySelector('.modal-image-container');
    const image = document.getElementById('item-image');
    
    // Скидаємо всі попередні стани
    imageContainer.classList.remove('zoomed');
    image.style.transform = 'none';
    image.style.cursor = 'zoom-in';
    
    // Очищаємо попередні обробники подій
    imageContainer.replaceWith(imageContainer.cloneNode(true));
    const newImageContainer = document.querySelector('.modal-image-container');
    const newImage = document.getElementById('item-image');
    
    let counterDiv = document.querySelector('.image-counter');
    if (!counterDiv) {
        counterDiv = document.createElement('div');
        counterDiv.className = 'image-counter';
        newImageContainer.appendChild(counterDiv);
    }
    
    function updateCounter() {
        counterDiv.textContent = `${currentIndex + 1} / ${itemImages.length}`;
    }
    
    newImage.onload = () => {
        newImage.style.opacity = '1';
        updateCounter();
        
        // Автоматично збільшуємо малі зображення
        const minWidth = 300; // мінімальна ширина для нормального відображення
        const minHeight = 300; // мінімальна висота для нормального відображення
        
        if (newImage.naturalWidth < minWidth || newImage.naturalHeight < minHeight) {
            // Розраховуємо оптимальний коефіцієнт масштабування
            const scaleX = minWidth / newImage.naturalWidth;
            const scaleY = minHeight / newImage.naturalHeight;
            const scale = Math.max(scaleX, scaleY);
            
            // Обмежуємо максимальний масштаб до 2.5
            const finalScale = Math.min(scale, 2.5);
            
            newImage.style.transform = `scale(${finalScale})`;
        } else {
            // Для нормальних зображень використовуємо стандартний масштаб
            newImage.style.transform = 'scale(1.5)';
        }
        
        // Додаємо обробник для збільшення/зменшення
        newImage.onclick = (e) => {
            e.stopPropagation();
            toggleImageZoom(newImage);
        };
    };
    
    newImage.style.opacity = '0';
    newImage.src = itemImages[currentIndex];
    
    document.getElementById('item-title').textContent = item.title;
    document.getElementById('item-description').textContent = item.description;
    document.getElementById('item-details').textContent = item.details;

    const navigationButtons = document.getElementById('navigation-buttons');
    navigationButtons.style.display = itemImages.length > 1 ? 'flex' : 'none';
    counterDiv.style.display = itemImages.length > 1 ? 'block' : 'none';

    newImage.setAttribute('data-items', JSON.stringify(itemImages));
    
    // Встановлюємо атрибути для ідентифікації елемента
    const modalContent = document.querySelector('.modal-content');
    modalContent.setAttribute('data-item-id', index);
    modalContent.setAttribute('data-item-type', items === stamps ? 'stamps' : 'coins');
    
    // Оновлюємо стан кнопки вибраного
    const isFavorite = favorites.some(f => f.id === index && f.type === (items === stamps ? 'stamps' : 'coins'));
    const favoriteButton = document.querySelector('.modal-favorite');
    favoriteButton.innerHTML = isFavorite ? '❤' : '♡';
    
    modal.classList.add('show');
    
    // Додаємо обробники подій
    newImageContainer.addEventListener('mousedown', handleDragStart);
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
    newImageContainer.addEventListener('mouseleave', handleDragEnd);
    newImageContainer.addEventListener('wheel', handleImageWheel);
    
    // Додаємо обробник для закриття модального вікна
    modal.onclick = (e) => {
        if (e.target === modal) {
            closeModal();
        }
    };
}

function closeModal() {
    const modal = document.getElementById('modal');
    const imageContainer = modal.querySelector('.modal-image-container');
    const image = modal.querySelector('#item-image');
    
    // Видаляємо обробники подій
    imageContainer.removeEventListener('mousedown', handleDragStart);
    document.removeEventListener('mousemove', handleDragMove);
    document.removeEventListener('mouseup', handleDragEnd);
    imageContainer.removeEventListener('mouseleave', handleDragEnd);
    imageContainer.removeEventListener('wheel', handleImageWheel);
    
    // Скидаємо стани
    imageContainer.classList.remove('zoomed');
    if (image) {
        image.style.transform = 'scale(1)';
        image.style.cursor = 'zoom-in';
    }
    
    // Скидаємо змінні переміщення
    translateX = 0;
    translateY = 0;
    
    modal.classList.remove('show');
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

// Додаємо функцію для збільшення зображення
function toggleImageZoom(image) {
    const container = image.closest('.modal-image-container');
    const currentScale = parseFloat(image.style.transform.replace('scale(', '').replace(')', '') || 1);
    
    if (!container.classList.contains('zoomed')) {
        // Збільшуємо
        container.classList.add('zoomed');
        // Збільшуємо в 2 рази від поточного масштабу
        image.style.transform = `scale(${currentScale * 2})`;
        image.style.cursor = 'zoom-out';
    } else {
        // Повертаємо до початкового масштабу
        container.classList.remove('zoomed');
        // Перевіряємо, чи це мале зображення
        const minWidth = 300;
        const minHeight = 300;
        
        if (image.naturalWidth < minWidth || image.naturalHeight < minHeight) {
            const scaleX = minWidth / image.naturalWidth;
            const scaleY = minHeight / image.naturalHeight;
            const scale = Math.min(Math.max(scaleX, scaleY), 2.5);
            image.style.transform = `scale(${scale})`;
        } else {
            image.style.transform = 'scale(1.5)';
        }
        image.style.cursor = 'zoom-in';
    }
}

// Додаємо функцію для обробки кліку по кнопці вибраного в модальному вікні
function toggleModalFavorite(event) {
    event.stopPropagation();
    const modalContent = event.target.closest('.modal-content');
    const itemId = parseInt(modalContent.getAttribute('data-item-id'));
    const itemType = modalContent.getAttribute('data-item-type');
    
    // Викликаємо існуючу функцію toggleFavorite
    toggleFavorite(itemId, itemType, event);
    
    // Оновлюємо стан кнопки в модальному вікні
    const isFavorite = favorites.some(f => f.id === itemId && f.type === itemType);
    event.target.innerHTML = isFavorite ? '❤' : '♡';
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
        
        const title = document.getElementById('itemTitle').value;
        const type = document.getElementById('itemType').value;
        const itemsArray = type === 'stamps' ? stamps : coins;
        
        // Перевіряємо чи існує елемент з таким заголовком
        const isDuplicate = itemsArray.some(item => 
            item.title.toLowerCase() === title.toLowerCase()
        );
        
        if (isDuplicate) {
            // Створюємо та показуємо повідомлення про помилку
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = `Такий елемент вже існує в колекції ${type === 'stamps' ? 'марок' : 'монет'}!`;
            errorMessage.style.color = '#ff4444';
            errorMessage.style.marginTop = '10px';
            errorMessage.style.padding = '10px';
            errorMessage.style.backgroundColor = 'rgba(255, 68, 68, 0.1)';
            errorMessage.style.borderRadius = '5px';
            
            // Видаляємо попереднє повідомлення про помилку, якщо воно є
            const oldError = document.querySelector('.error-message');
            if (oldError) {
                oldError.remove();
            }
            
            // Додаємо нове повідомлення
            document.getElementById('editorForm').appendChild(errorMessage);
            
            // Видаляємо повідомлення через 3 секунди
            setTimeout(() => {
                errorMessage.remove();
            }, 3000);
            
            return;
        }
        
        if (uploadedImages.length === 0) {
            alert('Додайте хоча б одне зображення');
            return;
        }
        
        const newItem = {
            id: Date.now(),
            title: title,
            description: document.getElementById('itemDescription').value,
            details: document.getElementById('itemDetails').value,
            images: uploadedImages.map(img => img.url)
        };
        
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

    // Додаємо обробник для закриття модального вікна при натисканні Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('modal');
            if (modal.classList.contains('show')) {
                closeModal();
            }
        }
    });
    
    // Запобігаємо закриттю при кліку на контент
    document.querySelector('.modal-content').addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
