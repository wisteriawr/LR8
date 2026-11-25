document.addEventListener('DOMContentLoaded', function() {
    
    // Год
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Плеер
    const playBtn = document.getElementById('play-music');
    if (playBtn) {
        let isPlaying = true; // По умолчанию на картинке стоит пауза
        
        playBtn.addEventListener('click', function() {
            isPlaying = !isPlaying;
            
            if (isPlaying) {
                playBtn.textContent = '⏸'; // Значок паузы
                // Здесь можно запустить аудио: audio.play();
            } else {
                playBtn.textContent = '▶'; // Значок игры
                // Здесь можно поставить на паузу: audio.pause();
            }
        });
    }
});
