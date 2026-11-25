document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Автоматический год
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Логика музыкального плеера
    const playBtn = document.getElementById('play-music');
    
    if (playBtn) {
        let isPlaying = false;
        
        playBtn.addEventListener('click', function() {
            isPlaying = !isPlaying;
            
            if (isPlaying) {
                playBtn.textContent = '⏸'; // Пауза
                playBtn.classList.add('playing');
                
                // Здесь можно добавить реальный звук (если у вас есть mp3-файл в папке js или в корне)
                // const audio = new Audio('sound.mp3');
                // audio.play();
                
            } else {
                playBtn.textContent = '▶'; // Плей
                playBtn.classList.remove('playing');
                
                // audio.pause();
            }
        });
    }
});
