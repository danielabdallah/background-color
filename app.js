const h1 = document.querySelector('h1');
const btn = document.getElementById('randomColor');
const body = document.querySelector('body');

function randRGB(){
    const r = Math.floor(Math.random()*255)+1;
    const g = Math.floor(Math.random()*255)+1;
    const b = Math.floor(Math.random()*255)+1;
    return [r,g,b];
    
};

btn.addEventListener('click',function(){
    const clr = randRGB();
    const r = clr[0];
    const g = clr[1];
    const b = clr[2];
    body.style.backgroundColor = `rgb(${r},${g},${b})`;
    h1.textContent = `rgb(${r},${g},${b})`;
    if (r+g+b < 300){
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black';
    }
    
});