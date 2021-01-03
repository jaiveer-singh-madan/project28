class Tree
{
    constructor(x,y,r){
    var OpTians={
        isStatic:true
    } 
    this.x=x;
    this.y=y;
    this.radius=r;
    this.image=loadImage("sprites\Plucking mangoes/tree.png");
    this.body=Bodies.circle(x,y,r,OpTians);
    World.add(world,this.body);
}
   display(){
       var Ballpos=this.body.position;
       push()
       translate(Ballpos.x,Ballpos.y);
       strokeWeight(4);
       fill("purple");
       ellipse(0,0,this.r,this.r);
       imageMode(CENTER);
       image(this.image, 0, 0, this.radius);
       pop()
   }
}