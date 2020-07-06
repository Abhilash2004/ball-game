class Paper {
    constructor(x, y,) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }

      this.x=x;
      this.y=y;

      this.body = Bodies.circle(x, y, 30, options);
      this.radius = 30;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
       
      var angle = this.body.angle;
      push();
  
      strokeWeight(4);
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("purple");
      ellipse(0, 0,30,30 );
      pop();
    }
  };
  