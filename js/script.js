// Простой скрипт: показывает текущий год в подвале
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Кнопка "Показать приветствие"
    const greetBtn = document.getElementById('greet-btn');
    if (greetBtn) {
        greetBtn.addEventListener('click', function() {
            alert('Привет! Добро пожаловать на мой учебный сайт по веб-разработке!');
        });
    }
});
