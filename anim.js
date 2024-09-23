
// Generate heart elements with animation using the image
function createHeart() {
    const heart = document.createElement('img');
    heart.src = 'img/hearts.png';
    heart.classList.add('heart');
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.width = '30px';  // Ensure the heart has appropriate size
    heart.style.height = '30px'; // Ensuring proper height
    heart.style.position = 'absolute';
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);  // Create a heart every 300ms
