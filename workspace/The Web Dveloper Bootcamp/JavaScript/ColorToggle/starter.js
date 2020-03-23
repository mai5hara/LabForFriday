let click = document.querySelector('button');
let isPurple = false;

click.addEventListener('click', () => {
    if (isPurple) {
        document.body.style.background = 'white';
        isPurple = false;
    } else {
        document.body.style.background = 'purple';
        isPurple = true;
    }
});