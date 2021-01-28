class Witch
{
    constructor(x, y, width, height)
    {
        var options ={
            'restitution': 0.5,
            'density': 1,
            'friction': 1,
          
        }

        this.image = loadImage("images/witch.png")

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = this.width;
        this.height = this.height;
        World.add(world,this.body)
    }

    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
} 