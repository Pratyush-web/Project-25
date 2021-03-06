class Paper {
    constructor(x, y, width, height)
    {
        var options = {isStatic: false, restitution: 0.3, friction: 1, density: 1};
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("paper.png");

        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);     
        imageMode(CENTER);   
        image(this.image, 0, 0, 90, 90);
        pop();
    }
}