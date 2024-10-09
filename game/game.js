const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let spaceship = {
    x: canvas.width / 2 - 20,
    y: canvas.height - 80,
    width: 40,
    height: 60,
    speed: 4,  
    movingLeft: false,
    movingRight: false
};

let projectiles = [];
let enemies = [];
let score = 0;
let gameOver = false; 
let gamePaused = false; 

function drawSpaceship() {
    context.fillStyle = 'white';
    context.beginPath();
    context.moveTo(spaceship.x, spaceship.y);
    context.lineTo(spaceship.x + spaceship.width / 2, spaceship.y + spaceship.height);
    context.lineTo(spaceship.x - spaceship.width / 2, spaceship.y + spaceship.height);
    context.closePath();
    context.fill();
}

function fireProjectile() {
    projectiles.push({
        x: spaceship.x,
        y: spaceship.y,
        width: 5,
        height: 10,
        speed: 7
    });
}


function spawnEnemy() {
    enemies.push({
        x: Math.random() * (canvas.width - 40) + 20, 
        y: -50, 
        width: 40,
        height: 40,
        speed: 2  
    });
}


window.addEventListener('keydown', (event) => {
    if (!gameOver && !gamePaused) {
        if (event.code === 'ArrowLeft') {
            spaceship.movingLeft = true;
        } else if (event.code === 'ArrowRight') {
            spaceship.movingRight = true;
        } else if (event.code === 'Space') {
            fireProjectile();
        }
    }
});

window.addEventListener('keyup', (event) => {
    if (event.code === 'ArrowLeft') {
        spaceship.movingLeft = false;
    } else if (event.code === 'ArrowRight') {
        spaceship.movingRight = false;
    }
});


window.addEventListener('keydown', (event) => {
    if (event.code === 'KeyP') { 
        gamePaused = true;
    }
    if (event.code === 'KeyR' && gameOver) { 
        restartGame();
    } else if (event.code === 'KeyR' && gamePaused) { 
        gamePaused = false;
    }
});


function updateSpaceshipPosition() {
    if (spaceship.movingLeft && spaceship.x > spaceship.width / 2) {
        spaceship.x -= spaceship.speed;
    }
    if (spaceship.movingRight && spaceship.x < canvas.width - spaceship.width / 2) {
        spaceship.x += spaceship.speed;
    }
}


function updateEnemies() {
    for (let i = enemies.length - 1; i >= 0; i--) {
        let enemy = enemies[i];
        enemy.y += enemy.speed; 
        if (
            enemy.x < spaceship.x + spaceship.width / 2 &&
            enemy.x + enemy.width > spaceship.x - spaceship.width / 2 &&
            enemy.y < spaceship.y + spaceship.height &&
            enemy.y + enemy.height > spaceship.y
        ) {
            gameOver = true; 
        }
        if (enemy.y > canvas.height) {
            enemies.splice(i, 1);
        }
    }
}

function drawEnemies() {
    context.fillStyle = 'green';
    enemies.forEach((enemy) => {
        context.fillRect(enemy.x - enemy.width / 2, enemy.y, enemy.width, enemy.height);
    });
}

function displayScore() {
    context.fillStyle = 'white';
    context.font = '20px Arial';
    context.fillText("Score " + score, 20, 30);
}

function handleGameOver() {
    if (gameOver) {
        context.fillStyle = 'red';
        context.font = '40px Arial';
        context.fillText('Game Over!', canvas.width / 2 - 100, canvas.height / 2);
        context.font = '20px Arial';
        context.fillText('Press R to Restart', canvas.width / 2 - 80, canvas.height / 2 + 40);
    }
}

function handlePauseResume() {
    if (gamePaused) {
        context.fillStyle = 'yellow';
        context.font = '30px Arial';
        context.fillText('Game Paused!', canvas.width / 2 - 100, canvas.height / 2);
        context.fillText('Press R to Resume', canvas.width / 2 - 120, canvas.height / 2 + 40);
    }
}

function updateProjectiles() {
    for (let i = projectiles.length - 1; i >= 0; i--) {
        let projectile = projectiles[i];
        projectile.y -= projectile.speed; 
        if (projectile.y + projectile.height < 0) {
            projectiles.splice(i, 1); 
        }
    }
}

function restartGame() {
    projectiles = [];
    enemies = [];
    score = 0;
    spaceship.x = canvas.width / 2 - 20;
    gameOver = false;
    gamePaused = false; 
}

function checkCollisions() {
    for (let i = projectiles.length - 1; i >= 0; i--) {
        let projectile = projectiles[i];
        for (let j = enemies.length - 1; j >= 0; j--) {
            let enemy = enemies[j];
            if (
                projectile.x + projectile.width / 2 > enemy.x - enemy.width / 2 &&  
                projectile.x - projectile.width / 2 < enemy.x + enemy.width / 2 &&  
                projectile.y < enemy.y + enemy.height &&  
                projectile.y + projectile.height > enemy.y  
            ) {
                projectiles.splice(i, 1);
                enemies.splice(j, 1);
                score += 1; 
        }
    }
}
}

function drawProjectiles() {
    context.fillStyle = 'red'; 
    projectiles.forEach((projectile) => {
        context.fillRect(projectile.x - projectile.width / 2, projectile.y, projectile.width, projectile.height);
    });
}

function displayPauseResumeInstructions() {
    context.fillStyle = 'white';
    context.font = '16px Arial';
    context.fillText('Press P to Pause, R to Resume', canvas.width - 230, 30);
}

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (!gamePaused && !gameOver) {
        updateSpaceshipPosition();
        updateProjectiles();
        updateEnemies();
        checkCollisions();
        drawProjectiles();
        drawEnemies();
        drawSpaceship();
        displayScore();

    } else if (gameOver) {
        handleGameOver(); 
    }

    if (gamePaused) {
        handlePauseResume();
    }

    displayPauseResumeInstructions();
    requestAnimationFrame(gameLoop);
}

setInterval(spawnEnemy, 1500);
gameLoop();