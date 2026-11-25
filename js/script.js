// Ждем, пока страница полностью загрузится
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Автоматически подставляем текущий год в подвал сайта
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Кнопка "Показать приветствие" на главной странице
    const greetBtn = document.getElementById('greet-btn');
    if (greetBtn) {
        greetBtn.addEventListener('click', function() {
            alert('Привет! Добро пожаловать на мой учебный сайт по веб-разработке и SEO!');
        });
    }

    // 3. Простой эффект: плавное появление карточки при загрузке
    const card = document.querySelector('.card');
    if (card) {
        card.style.opacity = '0';
        card.style.transition = 'opacity 1s ease-in-out';
        
        // Небольшая задержка, чтобы анимация сработала
        setTimeout(function() {
            card.style.opacity = '1';
        }, 100);
    }
});
