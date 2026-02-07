document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('movable-img');
    let posX = 100;
    let posY = 100;
    let rotation = 0;
    let rotationSpeed = 0;
    const moveSpeed = 10;
    const rotationAcceleration = 25;
    
    // Обновляем позицию и вращение картинки
    function updateImage() {
        img.style.left = posX + 'px';
        img.style.top = posY + 'px';
        
        // Добавляем вращение если есть скорость вращения
        if (Math.abs(rotationSpeed) > 0.1) {
            rotation += rotationSpeed;
            rotationSpeed *= 0.95; // Постепенно замедляем вращение
        } else {
            rotationSpeed = 0;
        }
        
        img.style.transform = `rotate(${rotation}deg)`;
        
        requestAnimationFrame(updateImage);
    }
    
    // Обработка нажатий клавиш
    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case 'ArrowUp':
                posY -= moveSpeed;
                rotationSpeed += rotationAcceleration;
                break;
            case 'ArrowDown':
                posY += moveSpeed;
                rotationSpeed += rotationAcceleration;
                break;
            case 'ArrowLeft':
                posX -= moveSpeed;
                rotationSpeed += rotationAcceleration;
                break;
            case 'ArrowRight':
                posX += moveSpeed;
                rotationSpeed += rotationAcceleration;
                break;
        }
        
        // Ограничиваем позицию в пределах окна
        posX = Math.max(0, Math.min(window.innerWidth - img.width, posX));
        posY = Math.max(0, Math.min(window.innerHeight - img.height, posY));
    });
    
    // Запускаем анимацию
    updateImage();
});