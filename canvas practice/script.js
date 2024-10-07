const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'skyblue';
ctx.fillRect(0, 0, 600, 400);

ctx.beginPath();
ctx.arc(223, 85, 50, 0, Math.PI * 2);
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(300, 200);
ctx.lineTo(-50, 200);
ctx.lineTo(100, 1);
ctx.fillStyle = 'darkred';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(200, 170);
ctx.lineTo(325, 1);
ctx.lineTo(400, 150);
ctx.fillStyle = 'darkred';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(500, 1);
ctx.lineTo(650, 200);
ctx.fillStyle = 'darkred';
ctx.fill();
ctx.closePath();

ctx.fillStyle = 'darkgreen';
ctx.fillRect(0, 200, 600, 300);

ctx.fillStyle = 'red';
ctx.fillRect(50, 300, 150, 100);

ctx.fillStyle = 'black';
ctx.fillRect(70, 350, 30, 70);

ctx.beginPath();
ctx.arc(75, 375, 5, 0, Math.PI * 2);
ctx.fillStyle = 'white';
ctx.fill();
ctx.closePath();

ctx.fillStyle = 'white';
ctx.fillRect(125, 325, 50, 50);

ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(125, 250);
ctx.lineTo(200, 300);
ctx.fillStyle = 'black';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(300, 200); 
ctx.bezierCurveTo(350, 250, 320, 300, 300, 400); 
ctx.lineTo(340, 400);
ctx.bezierCurveTo(360, 300, 370, 250, 320, 200);
ctx.fillStyle = 'black';
ctx.fill();
ctx.closePath();

ctx.fillStyle = 'brown';
ctx.fillRect(400, 300, 20, 50);

ctx.beginPath();
ctx.arc(410, 270, 40, 0, Math.PI * 2); 
ctx.fillStyle = 'green';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(380, 290, 30, 0, Math.PI * 2);
ctx.fillStyle = 'green';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(440, 290, 30, 0, Math.PI * 2);
ctx.fillStyle = 'green';
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.moveTo(313,200);
ctx.lineTo(328,225);
ctx.strokeStyle = 'white';
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(340,260);
ctx.lineTo(333,230);
ctx.strokeStyle = 'white';
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(340,300);
ctx.lineTo(341,270);
ctx.strokeStyle = 'white';
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(330,350);
ctx.lineTo(340,310);
ctx.strokeStyle = 'white';
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(325,390);
ctx.lineTo(330,360);
ctx.strokeStyle = 'white';
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(145,20);
ctx.lineTo(185,75);
ctx.strokeStyle = 'yellow';
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(180,30);
ctx.lineTo(200,75);
ctx.strokeStyle = 'yellow';
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(220,10);
ctx.lineTo(220,60);
ctx.strokeStyle = 'yellow';
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(255,20);
ctx.lineTo(235,90);
ctx.strokeStyle = 'yellow';
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(300,15);
ctx.lineTo(247,95);
ctx.strokeStyle = 'yellow';
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();