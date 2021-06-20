class Ball {
    constructor(x,y,width,height){

        
	var Ball_options = {
        airResistance:0.02,
        restitution:0.3,
        density:1.2
    }
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.body = Bodies.circle(x,y,this.width,this.height,Ball_options);
    World.add(world,this.body);
     


    }
 display1(){
  ellipse(x,y,this.width,this.height)


 }







}