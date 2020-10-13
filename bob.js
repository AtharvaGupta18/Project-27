class Bob {
    constructor(x, y){
        var options ={
            isStatic: false,
            restitution: 0.3,
            //frictionAir: 0.5,
            density: 1.2,
            
        }
        this.body = Bodies.circle(x, y, 12, options);
        this.radius = 12;
        World.add(world, this.body);
        
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(255, 0, 165);
        ellipse(pos.x, pos.y, this.radius);
    }
}