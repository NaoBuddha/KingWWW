const navSlide = () => {
    const menu = document.querySelector('#menu-icon');
    const navlist = document.querySelector('.navlist');
    
    menu.addEventListener('click', () => {
        navlist.classList.toggle('navlist-active');
    });
}

navSlide();

const navSlide2 = () => {
    const menu = document.querySelector('#menu-icon');
    const navlist = document.querySelector('.bio-navlist');
    
    menu.addEventListener('click', () => {
        navlist.classList.toggle('bio-navlist-active');
    });
}

navSlide2();

const navSlide3 = () => {
    const menu = document.querySelector('#menu-icon');
    const navlist = document.querySelector('.pho-navlist');
    
    menu.addEventListener('click', () => {
        navlist.classList.toggle('pho-navlist-active');
    });
}

navSlide3();