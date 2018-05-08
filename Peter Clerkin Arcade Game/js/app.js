// Enemies our player must avoid
var Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    // When the enemies move off the canvas, they come back at a random speed
    if (this.x > 500) this.x = -100;
        this.speed = Math.floor(Math.random() * 300) + 100;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y) { 
    this.x = x;
    this.y = y;
// The image/sprite for the player
    this.sprite = 'images/char-boy.png';
};

// Update the player's position, required method for game
Player.prototype.update = function (dt) {
     // If the player reaches the water they are reset back to the beginning point
     if (this.y < 0) {
         alert("Congratulations, you have reached the water!");
         this.x = 200;
         this.y = 400;
        };
};

// Renders the image of the user into the game
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// handleInput() method so the player can move along the canvas
Player.prototype.handleInput = function (key) {

    if (key === 'left' && this.x > 0) {
        this.x -= 100;
    };
    if (key === 'right' && this.x < 400) {
        this.x += 100;
    };
    if (key === 'up' && this.y > 0) {
        this.y -= 90;
    };
    if (key === 'down' && this.y < 400) {
        this.y += 90;
    };
};


// Place all enemy objects in an array called allEnemies
var allEnemies = [];

// Position of the 3 enemies on the y axis
var enemyPosition = [60, 150, 230];


// Enemies beginning position & speed
enemyPosition.forEach(function (posY) {
    enemy = new Enemy(0, posY, 1000);
    allEnemies.push(enemy);
});

// Place the player object in a variable called player
// Position of player on the x axis & y axis
var player = new Player(200, 400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. 
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
