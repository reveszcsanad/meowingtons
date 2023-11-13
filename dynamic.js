function jumpToRandomPosition() {
    let button = document.getElementById('unsubscribe-btn');

    let randomX = Math.random() * window.innerWidth;
    let randomY = Math.random() * window.innerHeight;

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}