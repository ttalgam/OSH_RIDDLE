const image = new Image();
image.src = 'data:image/png;base64,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';

image.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;

    let particlesArray = [];
    const numberOfParticles = 10000;
    const detail = 1;

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let grid = [];
    for (let y = 0; y < canvas.height; y += detail){
        let row = [];
        for (let x = 0; x < canvas.width; x += detail){
            const red = pixels.data[(y * 4 * pixels.width) + (x * 4)]
            const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)]
            const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)]
            const color = 'rgb(' + red +',' + green + ',' + blue + ')';
            const brightness = calculateBrightness(red, green, blue)/100;

            row.push(brightness);
        }  
        grid.push(row); 
    }

    class Particle {
        constructor(){
            this.x = Math.random() * canvas.width;
            this.y =  0;
            //this.prevX = this.x;
            this.speed = 0;
            this.velocity = Math.random() * 0.9;
            this.size = Math.random() * 6 + .1;
        }
        update () {
		try {
			this.speed = grid[Math.floor(Math.abs(this.y) / detail)][Math.floor(this.x / detail)];
		} catch (error) {
			console.log(this.y, this.x)
			console.error(error);
			throw 'myException';
		}
            let movement = (2.5 - this.speed) + this.velocity;
            this.y += movement;
            if (this.y >= canvas.height) {
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
            //console.log(this.x += movement)
        }
        draw(){
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    function init(){
        for (let i = 0; i < numberOfParticles; i++){
            particlesArray.push(new Particle());
        }
    }
    init();

    function animate () {
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.2;
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            ctx.globalAlpha = particlesArray[i].speed * 0.3;
		if (particlesArray[i].speed == 2.55) {
			ctx.globalAlpha = 1;
		} else {
			ctx.globalAlpha = 0;
		}
            particlesArray[i].draw();
        }
        requestAnimationFrame( animate );
    }
    animate();

    function calculateBrightness(red, green, blue){
        return Math.sqrt(
            (red * red) * 0.299 +
            (green * green) * 0.587 +
            (blue * blue) * 0.114
        );
    }

});