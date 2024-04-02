const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');
const resLinkFirst = document.querySelector('.res__link-1')
const resLinkSecond = document.querySelector('.res__link-2');
const resLinkThree = document.querySelector('.res__link-3');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const cardBlock = document.querySelector('.res__grid');
const cardBlockSecond = document.querySelector('.grid-2');
const cardBlockThree = document.querySelector('.grid-3');
const cd = document.querySelector('.cd');
const cm = document.querySelector('.cm');
hamburger.addEventListener('click', function () {
    cd.classList.remove('none');
    cm.classList.add('none')
    main.style.display = 'none';
    footer.style.display = 'none';
});
closeBtn.addEventListener('click', function () {
    cd.classList.add('none');
    cm.classList.remove('none');
});
closeBtn.addEventListener('click', function () {
    main.style.display = '';
    footer.style.display = '';
});
resLinkFirst.addEventListener('click', function() {
    resLinkFirst.classList.add('first');
    resLinkSecond.classList.remove('first');
    resLinkThree.classList.remove('first');
    cardBlock.style.display = 'grid';
    cardBlockSecond.classList.remove('grid');
    cardBlockThree.classList.remove('grid');
});
resLinkSecond.addEventListener('click', function() {
    resLinkSecond.classList.add('first');
    resLinkFirst.classList.remove('first');
    resLinkThree.classList.remove('first');
    cardBlock.style.display = 'none';
    cardBlockThree.classList.remove('grid');
    cardBlockSecond.classList.add('grid');
});
resLinkThree.addEventListener('click', function() {
    resLinkFirst.classList.remove('first');
    resLinkSecond.classList.remove('first');
    resLinkThree.classList.add('first');
    cardBlock.style.display = 'none';
    cardBlockSecond.classList.remove('grid');
    cardBlockThree.classList.add('grid');
});