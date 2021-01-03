class Mango
{
    constructor(x,y,r){
    var opTians={
        restitution:0,
        friction:1,
        isStatic:true
    } 
    this.x=x;
    this.y=y;
    this.radius=r;
    this.image=loadImage("sprites\Plucking mangoes/mango.png");
    this.body=Bodies.circle(x,y,r,opTians);
    World.add(world,this.body);
}
   display(){
       var ballPos=this.body.position;
       push()
       translate(ballPos.x,ballPos.y);
       strokeWeight(4);
       fill("purple");
       ellipse(0,0,this.r,this.r);
       imageMode(CENTER);
       image(this.image, 0, 0, this.radius);
       pop()
   }
}