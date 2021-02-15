const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2D');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particleArray = [];
const mouse = {
    x: null,
    y: null
}
window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse.x, mouse.y);
});