let openBtn = document.querySelector('.nav-btn');
openBtn.addEventListener('click', openNavigation);

function openNavigation() {
    let navList = document.querySelector('.navigation');
    let btnImg = document.querySelector('.nav-btn--open');
    
    if(navList.classList.contains('active')) {
        navList.classList.remove('active');
        openBtn.classList.remove('active');
        btnImg.style.display = 'block';
    }
    else {
        navList.classList.add('active');
        openBtn.classList.add('active');
        btnImg.style.display = 'none';
    }
}

