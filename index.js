const burgerButton = document.querySelector('.welcome-burger');
const burgerMenu = document.querySelector('.welcome-burger-menu');
const burgerMenuCloseButton = document.querySelector('.welcome-burger-menu div i');
const menuItems = document.querySelectorAll('.welcome-burger-list li a');

let openMenu = () => {
    burgerButton.addEventListener('click', function(event) {
        burgerMenu.classList.add('open');

        burgerButton.style.display = 'none';
    });
};

let closeMenu = (button) => {
    button.addEventListener('click', function() {
        burgerMenu.classList.remove('open');

        burgerButton.style.display = 'block';
    });
};

menuItems.forEach((item) => {
    closeMenu(item);
});


openMenu();
closeMenu(burgerMenuCloseButton);

// modal window

const openButtons = document.querySelectorAll('.process-content-block button');
const closeButton = document.querySelector('.modal-active button');
const modalBackdrop = document.querySelector('.modal-backdrop');
const modalWindow = document.querySelector('.modal-window');
const modalTitle = document.querySelector('.modal-title');
const modalLogo = document.querySelector('.modal-logo');
const blocksTitle = document.querySelectorAll('.process-content-block div');
const blocksIcon = document.querySelectorAll('.process-content-icon');

const closeWindow = () => {
    modalWindow.classList.remove('active');
    setTimeout(() => {
        modalBackdrop.style.display = 'none';
    }, 100);

    document.body.style.overflow = '';
};


openButtons.forEach((openButton, index) => {
    openButton.addEventListener('click', (event) => {
        const background = window.getComputedStyle(event.target.parentElement,null).getPropertyValue("background-color");
        modalWindow.style.backgroundColor = background;
        modalTitle.textContent = blocksTitle[index].textContent;
        modalLogo.innerHTML = blocksIcon[index].outerHTML;
        modalBackdrop.style.display = 'block';
        setTimeout(() => {
            modalWindow.classList.add('active');
        }, 100);
        
        document.body.style.overflow = 'hidden';
    });
});

closeButton.addEventListener('click', () => {
    closeWindow();
});

document.addEventListener('keydown', (event) => {
    if (event.key === "Escape" || event.key === "Esc") {
        closeWindow();
    }
    
});

//slider

const sliderButtonLeft = document.querySelector('.process-content-button.left');
const sliderButtonRight = document.querySelector('.process-content-button.right');
const slides = document.querySelectorAll('.process-content-block');
const slidesWrapper = document.querySelector('.process-content-wrapper');
let slideIndex = 0;
slidesWrapper.style.width = `${slides.length * window.innerWidth}px`;

const buttonHide = (leftBtn, rightBtn, slidesArr, index) => {
    if (index === 0) {
        leftBtn.style.display = 'none';
    } else if (index === slidesArr.length - 1) {
        rightBtn.style.display = 'none';
    } else {
        leftBtn.style.display = 'flex'; 
        rightBtn.style.display = 'flex';
    }
};

const onSlide = (type) => {
    type === 'left' ? slideIndex-- : slideIndex++;

    buttonHide(sliderButtonLeft, sliderButtonRight, slides, slideIndex);
    slidesWrapper.style.transform = `translateX(${slideIndex * -100}%)`;

};

buttonHide(sliderButtonLeft, sliderButtonRight, slides, slideIndex);

sliderButtonLeft.addEventListener('click', () => {
    onSlide('left');
});

sliderButtonRight.addEventListener('click', () => {
    onSlide('right');
});


//

const workSliderButtonLeft = document.querySelector('.works-content-button.left');
const workSliderButtonRight = document.querySelector('.works-content-button.right');
const workSlides = document.querySelectorAll('.works-slides-wrapper');
const workSlidesWrapper = document.querySelector('.works-content-wrapper');
let workSlideIndex = 0;

workSlidesWrapper.style.width = `${workSlides.length * window.innerWidth}px`;


const workOnSlide = (type) => {
    type === 'left' ? workSlideIndex-- : workSlideIndex++;

    buttonHide(workSliderButtonLeft, workSliderButtonRight, workSlides, workSlideIndex);

    workSlidesWrapper.style.transform = `translateX(${workSlideIndex * -100}%)`;

};

buttonHide(workSliderButtonLeft, workSliderButtonRight, workSlides, workSlideIndex);

workSliderButtonLeft.addEventListener('click', () => {
    workOnSlide('left');
});

workSliderButtonRight.addEventListener('click', () => {
    workOnSlide('right');
});