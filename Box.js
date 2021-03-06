class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':1.0,
          'density':0.001
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill (rgb (3, 252, 194));
      rect( 0, 0, this.width, this.height);
      pop();
    }
}