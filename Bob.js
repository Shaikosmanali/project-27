class Bob{
    constructor(x, y, width, height,angle) {
        var options = {
            'restitution':2,
            'friction':0.05,
            'density':1
        }
        this.body = Bodies.circle(x, y, 80,80,angle, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        stroke("cyan")
        fill(177,255,50);
        ellipse( 0, 0, this.width, this.height);
        pop();
      }
}