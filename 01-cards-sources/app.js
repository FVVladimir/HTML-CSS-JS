const slides = document.querySelectorAll('.slide');


for(const slide of slides){
    slide.addEventListener('click', () => {
        clearActivClasses()
        slide.classList.add('activ')
    })
}

function clearActivClasses(){
    slides.forEach( elem => {
        elem.classList.remove('activ')
    })
}