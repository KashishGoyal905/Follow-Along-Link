const triggers = document.querySelectorAll('a');
const menu = document.querySelector('.menu')


function highlight(e){
    console.log(this);
    this.classList.add('highlight');
}



triggers.forEach(a => a.addEventListener('mouseenter', highlight));

triggers.forEach(a => a.addEventListener('hover', removeHigh))