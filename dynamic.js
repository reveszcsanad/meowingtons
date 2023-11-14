function jumpToRandomPosition() {
    let button = document.getElementById('unsubscribe-btn');

    var randomX = Math.random() * (window.innerWidth - button.offsetWidth);
    var randomY = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function checkButtonPosition() {
    var button = document.getElementById('unsubscribe-btn');

    if (button.offsetTop + button.offsetHeight > window.innerHeight) {
        button.style.top = window.innerHeight - button.offsetHeight + 'px';
    }

    if (button.offsetLeft + button.offsetWidth > window.innerWidth) {
        button.style.left = window.innerWidth - button.offsetWidth + 'px';
    }
}