const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'lightblue';
ctx.fillRect(0,0,600,400);

ctx.fillStyle = 'green';
ctx.fillRect(0,300,600,100);

ctx.beginPath();
ctx.arc(400,50,50,0,Math.PI * 2);
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.closePath();

ctx.fillStyle  = 'brown';
ctx.fillRect(200,200,150,100);

ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(275,120);
ctx.lineTo(350,200);
ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();

ctx.fillStyle  = 'black';
ctx.fillRect(225,220,50,80);

ctx.beginPath();
ctx.arc(232,260,5,0,Math.PI * 2);
ctx.fillStyle = 'white';
ctx.fill();
ctx.closePath();