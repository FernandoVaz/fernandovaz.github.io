function loadStarCanvas(){
    //alert('hello');
    const starFrame = document.getElementById('starShowerIframe');
    var iframeDiv = starFrame.contentWindow.document;
    iframeDiv.body.innerHTML += '<canvas id="starShowerCanvas" onload="doStuff();"></canvas>';
    doStuff();
}


function doStuff() {

    //alert('teste');
    const starFrame = document.getElementById('starShowerIframe');
    const starCanvas = starFrame.contentWindow.document.getElementById('starShowerCanvas');
    const starCtx = starCanvas.getContext("2d");

    starCanvas.width = 700;
    starCanvas.height = 500;

    addEventListener('resize', () => {
        starCanvas.width = 700;
        starCanvas.height = 500;

        init();
    });

    function Star(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = {
            x: 0,
            y: 3
        };
        this.gravity = 1;
        this.friction = 0.8;
    }

    Star.prototype.draw = function() {
        starCtx.beginPath();
        //This tells us this creates an Circle
        starCtx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        starCtx.fillStyle = this.color;
        starCtx.fill();
        starCtx.closePath();
    }

    Star.prototype.update = function() {
        this.draw();

        if(this.y + this.radius + this.velocity.y > starCanvas.height) {
            this.velocity.y = - this.velocity.y * this.friction;
            this.shatter();
        } else {
            this.velocity.y += this.gravity;
        }

        this.y += this.velocity.y;
    }

    Star.prototype.shatter = function() {
        
    }

    function MiniStar(x, y, radius, color) {
        Star.call(this, x, y, radius, color); //Inheritance in JavaScript
        this.velocity = {
            x: 0,
            y: 3
        };
        this.gravity = 1;
        this.friction = 0.8;

    }

    MiniStar.prototype.draw = function() {
        starCtx.beginPath();
        //This tells us this creates an Circle
        starCtx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        starCtx.fillStyle = this.color;
        starCtx.fill();
        starCtx.closePath();
    }

    MiniStar.prototype.update = function() {
        this.draw();

        if(this.y + this.radius + this.velocity.y > starCanvas.height) {
            this.velocity.y = - this.velocity.y * this.friction;
        } else {
            this.velocity.y += this.gravity;
        }

        this.y += this.velocity.y;
    }

    // Implementation
    let stars;
    function init() {
        stars = [];

        for (let i = 0; i < 1; i++) {
            stars.push(new Star(Math.round(starCanvas.width / 2), Math.round(starCanvas.height / 2), 30, 'blue'));
        }
    }

    function animate() {
        starFrame.contentWindow.requestAnimationFrame(animate);
        starCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);

        //console.log('teste');
        stars.forEach(object => {
            object.update()
        });
    }

    init();
    animate();
};