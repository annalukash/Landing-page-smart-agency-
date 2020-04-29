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

const closeWindow = (modalWindow, modalBackdrop, classStyle) => {
    modalWindow.classList.remove(classStyle);
    setTimeout(() => {
        modalBackdrop.style.display = 'none';
    }, 100);

    document.body.style.overflow = '';
};



openButtons.forEach((openButton, index) => {
    openButton.addEventListener('click', (event) => {
        const background = window.getComputedStyle(event.target.parentElement,null).getPropertyValue("background-color");
        // modalWindow.style.height = (window.innerHeight - 40) + 'px';
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
    closeWindow(modalWindow, modalBackdrop, 'active');
});

document.addEventListener('keydown', (event) => {
    if (event.key === "Escape" || event.key === "Esc") {
        closeWindow(modalWindow, modalBackdrop, 'active');
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

// tabs 

const tabItems = document.querySelectorAll('.services-tab-item');
const tabBody = document.querySelectorAll('.services-body-content-wrapper');

const toogleClass = (array, index, elementClass) => {
    if (array[index].classList.contains(elementClass)) {
        return;
    } else if (!(array[index].classList.contains(elementClass))) {
        array.forEach((item) => {
            item.classList.remove(elementClass);
        });
        array[index].classList.add(elementClass);
    }
};


tabItems.forEach((tabItem, index) => {
    tabItem.addEventListener('click', () => {
        toogleClass(tabBody, index, 'body-active');
        toogleClass(tabItems, index, 'tab-active');
    });
});

// services modal window

const openBtns = document.querySelectorAll('.services-body-btn button');
const closeBtn = document.querySelector('.services-modal-active button');
const servicesModalBackdrop = document.querySelector('.services-modal-backdrop');
const servicesModalWindow = document.querySelector('.services-modal-window');
const servicesModalTitle = document.querySelector('.services-modal-title');
const servicesModalLogo = document.querySelector('.services-modal-logo');
const servicesBlocksTitle = document.querySelectorAll('.services-body-title');
const servicesBlocksIcon = document.querySelectorAll('.services-tab-item i');

openBtns.forEach((openButton, index) => {
    openButton.addEventListener('click', () => {
        servicesModalTitle.textContent = servicesBlocksTitle[index].textContent;
        servicesModalLogo.innerHTML = servicesBlocksIcon[index].outerHTML;
        servicesModalBackdrop.style.display = 'block';
        setTimeout(() => {
            servicesModalWindow.classList.add('active');
        }, 100);
        
        document.body.style.overflow = 'hidden';
    });
});

closeBtn.addEventListener('click', () => {
    closeWindow(servicesModalWindow, servicesModalBackdrop, 'active');
});

document.addEventListener('keydown', (event) => {
    if (event.key === "Escape" || event.key === "Esc") {
        closeWindow(servicesModalWindow, servicesModalBackdrop, 'active');
    }
    
});

//

const teamSliderButtonLeft = document.querySelector('.team-content-button.left');
const teamSliderButtonRight = document.querySelector('.team-content-button.right');
const teamSlides = document.querySelectorAll('.team-content');
const teamSlidesWrapper = document.querySelector('.team-content-slider-wrapper');
let teamSlideIndex = 0;

teamSlidesWrapper.style.width = `${teamSlides.length * window.innerWidth}px`;


const teamOnSlide = (type) => {
    type === 'left' ? teamSlideIndex-- : teamSlideIndex++;

    buttonHide(teamSliderButtonLeft, teamSliderButtonRight, teamSlides, teamSlideIndex);

    teamSlidesWrapper.style.transform = `translateX(${teamSlideIndex * -100}%)`;

};

buttonHide(teamSliderButtonLeft, teamSliderButtonRight, teamSlides, teamSlideIndex);

teamSliderButtonLeft.addEventListener('click', () => {
    teamOnSlide('left');
});

teamSliderButtonRight.addEventListener('click', () => {
    teamOnSlide('right');
});

const teamActive = document.querySelectorAll('.team-active');
const teamSocial = document.querySelectorAll('.team-active-socia');

const helpMessage = document.querySelectorAll('.team-content-click');

