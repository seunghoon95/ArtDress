// if button click left - 100% move

let sliderWrapper = document.getElementsByClassName('body-item-container'),
sliderContainer = document.getElementsByClassName('container-wrap'),
slides = document.getElementsByClassName('container-section'),
slideCount = slides.length,
currentIndex = 0,
topHeight = 0,
nextSd = document.getElementById('section-next-sd');
nextMw = document.getElementById('section-next-mw');
nextOc = document.getElementById('section-next-oc');


// line up slide

for(var i = 0; i < slideCount; i++){
    slides[i].style.left = i*100 +'%';
}

// function move slide
function goToSlide(idx) {
    sliderContainer[0].style.left = idx * -100 + '%';
    sliderContainer[0].classList.add('animated');
    currentIndex = idx
}

// function onclick update button

// onclick button move slide
nextSd.addEventListener('click', e => {
    e.preventDefault();
    goToSlide(currentIndex + 1);
})

nextMw.addEventListener('click', e => {
    e.preventDefault();
    goToSlide(currentIndex + 1);
})

nextOc.addEventListener('click', e => {
    e.preventDefault();
    goToSlide(currentIndex - 2);
})



let viewArea = document.getElementById('view-area'),
mainSection = document.getElementById('mainSection'),
viewClick = document.getElementById('view-click'),
viewService = document.getElementById('view-service'),
mainReturn = document.getElementById('mainReturn'),
areaNext= document.getElementById('area-next'),
areaSns= document.getElementById('area-sns'),
viewPd= document.getElementById('view-pd'),
plusSw = document.getElementById('plus-sweater'),
plusJk = document.getElementById('plus-jacket'),
plusBg = document.getElementById('plus-bag'),
plusBt = document.getElementById('plus-boots'),
pdSw = document.getElementById('pd-sweater'), 
pdJk = document.getElementById('pd-jacket'),
pdBg = document.getElementById('pd-bag'),
pdBt = document.getElementById('pd-boots'),
pdSp = document.querySelectorAll('aside.container-section-view-pd-shopping'),
pdSpSw = document.querySelector('.sweater-info'),
pdSpJk = document.querySelector('.jacket-info'),
pdSpBg = document.querySelector('.bag-info'),
pdSpBt = document.querySelector('.boots-info'),
size = document.getElementById('sizeItem'),
close = document.getElementsByClassName('container-section-view-pd-area-close-img'),
sizeSwUl = document.getElementById('sizeSw'),
sizeJkUl = document.getElementById('sizeJk'),
sizeBgUl = document.getElementById('sizeBg'),
sizeBtUl = document.getElementById('sizeBt'),
swNumber = document.getElementById('swCount'),
jkNumber = document.getElementById('jkCount'),
bgNumber = document.getElementById('bgCount'),
btNumber = document.getElementById('btCount'),
circleUl = document.querySelector('.color-circle'),
circleLi = circleUl.getElementsByTagName('li'),
dragBox = document.getElementById('drag-box-wm'),
dragLine = document.querySelector('.drag-line'),
viewSection = document.getElementById('viewSection'),
womenImg = document.getElementById('wrap-img-sd');


// view more onclick 

viewButton = (e) => {
    e == 'open' ? areaSns.style.display='none' : areaSns.style.display='block';
    e == 'open' ? viewService.style.display='block' : viewService.style.display='none';
    e == 'open' ? viewArea.style.display='none' : viewArea.style.display='flex';
    e == 'open' ? areaNext.style.display='none' : areaNext.style.display='block';
    e == 'open' ? viewSection.style.display = 'block' : viewSection.style.display = 'none';
    e == 'open' ? mainSection.style.paddingTop='6.375rem' : mainSection.style.paddingTop='8.9375rem';
    e == 'open' ? viewPd.style.display='block' : viewPd.style.display='none';
    e == 'open' ? viewClick.style.display='flex' : viewClick.style.display='none';
    e == 'open' ? dragBox.style.display='block' : dragBox.style.display='none';
    e == 'open' ? plusBg.style.display = 'none' : pdSw.style.display = 'none';
    e == 'open' ? plusBt.style.display = 'none' : pdJk.style.display = 'none';
    e == 'open' ? plusSw.style.opacity = '1' : pdBg.style.display = 'none';
    e == 'open' ? plusJk.style.opacity = '1' : pdBt.style.display = 'none';
    e == 'open' ? plusSw.style.display = 'block' : pdSpSw.style.display = 'none';
    e == 'open' ? plusJk.style.display = 'block' : pdSpJk.style.display = 'none';
    e == 'open' ? '' : pdSpBg.style.display = 'none';
    e == 'open' ? '' : pdSpBt.style.display = 'none';
    e == 'open' ? womenImg.style.transitionDuration = '0.5s' : womenImg.style.transitionDuration = '0';
    e == 'open' ? '' : womenImg.style.backgroundPositionY = '0';
    e == 'open' ? mainReturn.style.display = 'block' : mainReturn.style.display = 'none';
    e == 'open' ? dragLine.value = 0 : '';
}

// sweater jacket properties

viewSwJk = (e) => {
    e == 'sweater' ? pdSw.style.display='block' : pdSw.style.display='none';
    e == 'sweater' ? pdJk.style.display='none' : pdJk.style.display='block';
    e == 'sweater' ? pdSpSw.style.display='block' : pdSpSw.style.display='none';
    e == 'sweater' ? pdSpJk.style.display='none' : pdSpJk.style.display='block';
}

// bag boots properties

viewBgBt = (e) => {
    e == 'bag' ? pdBg.style.display='block' : pdBg.style.display='none';
    e == 'bag' ? pdBt.style.display='none' : pdBt.style.display='block';
    e == 'bag' ? pdSpBt.style.display='none' : pdSpBt.style.display='block';
    e == 'bag' ? pdSpBg.style.display='block' : pdSpBg.style.display='none';
}

function closeImg (e) {
    pdSw.style.display = e;
    pdJk.style.display = e;
    pdBg.style.display= e;
    pdBt.style.display= e;
    pdSpJk.style.display = e;
    pdSpSw.style.display = e;
    pdSpBg.style.display = e;
    pdSpBt.style.display = e;
}

// color
function swColorBackground () {
    womenImg.style.backgroundSize = 'cover';
    womenImg.classList.add('animated');
}


function swColorChange(el) {
    if(el == 'b') {
        womenImg.style.background = 'url("../../images/woman_wrap_img/woman_wrap/view/view-pd/view_sweater_color/blown.jpg") no-repeat';
        swColorBackground ()

    }

    if(el =='k') {
        womenImg.style.background = 'url("../../images/woman_wrap_img/woman_wrap/view/view-pd/view_sweater_color/khaki.jpg") no-repeat'
        swColorBackground ()
    }

    if(el == 'o') {
        womenImg.style.background = 'url("../../images/woman_wrap_img/woman_wrap/view/view-pd/view_sweater_color/orange.jpg") no-repeat'
        swColorBackground ()
    }

    if(el == 'n') {
        womenImg.style.background = 'url("../../images/woman_wrap_img/woman_wrap/view/view-pd/view_sweater_color/navy.jpg") no-repeat'
        swColorBackground ()
    }

    if(el == 'g') {
        womenImg.style.background = 'url("../../images/woman_wrap_img/woman_wrap/view/view-pd/view_sweater_color/glay.jpg") no-repeat'
        swColorBackground ()
    }

    if(el == 's') {
        womenImg.style.background = 'url("../../images/woman_wrap_img/woman_wrap/view/view-pd/view_sweater_color/sky.jpg") no-repeat'
        swColorBackground ()
    }
}

// size

let jkLis = sizeJkUl.getElementsByTagName('li'),
swLis = sizeSwUl.getElementsByTagName('li'),
bgLis = sizeBgUl.getElementsByTagName('li'),
btLis = sizeBtUl.getElementsByTagName('li');

function sizeEnterStyle(e) {
    jkLis[e].style.background = '#ffffff';
    jkLis[e].style.border = '1px solid #707070';
    jkLis[e].style.borderRadius = '0.3rem';
    swLis[e].style.background = '#ffffff';
    swLis[e].style.border = '1px solid #707070';
    swLis[e].style.borderRadius = '0.3rem';
    bgLis[0].style.background = '#ffffff';
    bgLis[0].style.border = '1px solid #707070';
    bgLis[0].style.borderRadius = '0.3rem';
    btLis[e].style.background = '#ffffff';
    btLis[e].style.border = '1px solid #707070';
    btLis[e].style.borderRadius = '0.3rem';
}

function sizeDeleteStyle(e) {
    jkLis[e].style.background = 'none';
    jkLis[e].style.border = 'none';
    jkLis[e].style.borderRadius = 'none';
    swLis[e].style.background = 'none';
    swLis[e].style.border = 'none';
    swLis[e].style.borderRadius = 'none';
    btLis[e].style.background = 'none';
    btLis[e].style.border = 'none';
    btLis[e].style.borderRadius = 'none';
}

function sizeElement(el) {
    if(el == 's') {
        // 1234
        sizeEnterStyle(0);
        for(var i = 1; i < 5; i++) {
            sizeDeleteStyle(i)
        }
    }

    if(el =='m') {
        // 0234
        sizeEnterStyle(1);
        for(var i = 2; i < 5; i++) {
            sizeDeleteStyle(i)
        }
        sizeDeleteStyle(0)
    }

    if(el == 'l') {
        // 0134
        sizeEnterStyle(2);
        for(var i = 0; i < 2; i++) {
            sizeDeleteStyle(i)
        }
        for(var i = 3; i < 5; i++) {
            sizeDeleteStyle(i)
        }
    }

    if(el == 'x') {
        // 0124
        sizeEnterStyle(3);
        for(var i = 0; i < 3; i++) {
            sizeDeleteStyle(i)
        }
        sizeDeleteStyle(4)
    }

    if(el == 'xl') {
        // 0123
        sizeEnterStyle(4);
        for(var i = 3; i >= 0; i--) {
            sizeDeleteStyle(i);
        }
    }
}

// Quantity count

let swCount = swNumber.innerText;
let jkCount = jkNumber.innerText;
let bgCount = bgNumber.innerText;
let btCount = btNumber.innerText;

function quanCount(e) {
    if(e === 'minus') {
        if(swCount > 0) {
            swCount = parseInt(swCount) - 1;
        }
    } else if (e === 'plus'){
        if(swCount < 20) {
            swCount = parseInt(swCount) + 1;
        }
    }

    if(e === 'minus') {
        if(jkCount > 0) {
            jkCount = parseInt(jkCount) - 1;
        }
    } else if (e === 'plus'){
        if(jkCount < 20) {
            jkCount = parseInt(jkCount) + 1;
        }
    }

    if(e === 'minus') {
        if(bgCount > 0) {
            bgCount = parseInt(bgCount) - 1;
        }
    } else if (e === 'plus'){
        if(bgCount < 20) {
            bgCount = parseInt(bgCount) + 1;
        }
    }

    if(e === 'minus') {
        if(btCount > 0) {
            btCount = parseInt(btCount) - 1;
        }
    } else if (e === 'plus'){
        if(btCount < 20) {
            btCount = parseInt(btCount) + 1;
        }
    }
    swNumber.innerText = swCount;
    jkNumber.innerText = jkCount;
    bgNumber.innerText = bgCount;
    btNumber.innerText = btCount;
}

// line drag

let range = document.getElementById('cowbell');
function swJkOpacity(e) {
    plusSw.style.opacity = e;
    plusJk.style.opacity = e;
    pdSpSw.style.opacity = e;
    pdSpJk.style.opacity = e;
    pdJk.style.opacity =  e;
    pdSw.style.opacity =  e;
}

function bgBtOpacity(e) {
    plusBg.style.opacity = e;
    plusBt.style.opacity = e;
    pdBg.style.opacity = e;
    pdBt.style.opacity = e;
    pdSpBg.style.opacity = e;
    pdSpBt.style.opacity = e;
} 

function swJkDisplay(e) {
    plusSw.style.display = e;
    plusJk.style.display = e;
    pdSw.style.display = e;
    pdJk.style.display = e;
    pdSpSw.style.display = e;
    pdSpJk.style.display = e;
}

function bgBtDisplay(e) {
    plusBg.style.display = e;
    plusBt.style.display = e;
    pdBg.style.display = e;
    pdBt.style.display = e;
    pdSpBg.style.display = e;
    pdSpBt.style.display = e;
}

function plusSwJkDisplay(e) {
    plusSw.style.display = e;
    plusJk.style.display = e;
}

function plusBgBtDisplay(e) {
    plusBg.style.display = e;
    plusBt.style.display = e;
}

function backgroundImgControl() {
    var val = range.value;
    // for changing img positionY of background img
    womenImg.style.backgroundPositionY = val + '%' ;
    console.log(val)

    
    if (val < 5) {
        swJkOpacity(1)
        plusSwJkDisplay('block')
    }

    else if (val < 30) {
        swJkOpacity(0)
    }

    else if (val < 40) {
        swJkDisplay('none')
    }

    
    else if (val < 60) {
        bgBtDisplay('none')
    }

    else if (val < 70) {
        bgBtOpacity(0)
    }
    else if (val > 96) {
        plusBgBtDisplay('block')
        bgBtOpacity(1)
    }
}



















