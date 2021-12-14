const links = document.querySelector('.links');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    links.classList.toggle('active');
})
