(function() {

    var width, height, largeHeader, canvas, ctx, points, target, size, animateHeader = true;
    var cursorX, cursorY;

    // Main
    initHeader();
    addListeners();
    initAnimation();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        size = width > height ? height : width;
        target = {x: 0, y: height};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        points = [];
        for(var i = 0; i < 150; i++) {
            var l = new Dot(Math.random()*width, Math.random() * height, Math.random() * 360, Math.random() * 10000 + 1000);
            points.push(l);
        }
    }

    function initAnimation() {
        animate();
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        size = width > height ? height : width;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);

            ctx.beginPath();
            ctx.arc(cursorX, cursorY, 3, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(67,124,144,255)';
            ctx.fill();

            for(var i in points) {
                points[i].draw();

                var p = points[i];
                if(p.count > 0) {
                    points[i] = new Dot(p.x1 +.1 * Math.cos(p.theta), p.y1 +.1 * Math.sin(p.theta), p.theta, p.count - 1);
                }
                else {
                    points[i] = new Dot(Math.random() * width, Math.random() * height, Math.random() * 360,
                        Math.random() * 10000 + 1000);
                }
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Dot(x1, y1, theta, count) {
        var _this = this;

        // constructor
        (function() {
            _this.x1 = x1;
            _this.y1 = y1;
            _this.theta = theta;
            _this.count = count;
            //_this.lines = [];
        })();

        this.draw = function() {

            for(var i = 0; i < points.length; i++)
            {
                var tx = points[i].x1;
                var ty = points[i].y1;

                var dist = Math.sqrt((x1 - tx) * (x1 - tx) + (y1 - ty) * (y1 - ty));
                if(dist < 200) {
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(tx, ty);
                    ctx.strokeStyle = 'rgba(67,124,144,255)';
                    ctx.stroke();
                }
            }

            ctx.beginPath();
            ctx.arc(x1, y1, 3, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(67,124,144,255)';
            ctx.fill();

            if(Math.sqrt((x1 - cursorX) * (x1 - cursorX) + (y1 - cursorY) * (y1 - cursorY)) < 200) {
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(cursorX, cursorY);
                ctx.strokeStyle = 'rgba(67,124,144,255)';
                ctx.stroke();
            }
        };
    }

    document.onmousemove = function(e){
        cursorX = e.pageX;
        cursorY = e.pageY;
    }

})();
