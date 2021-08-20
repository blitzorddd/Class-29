class Slingshot{
    constructor (pointA, bodyB){
        var op = {
            pointA: pointA,
            bodyB: bodyB,
            length:50,
            stiffness:0.1
        }
        this.pointA = pointA
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        this.wire = Constraint.create(op)
        World.add(world,this.wire)
    }
display(){
    image(this.sling1, 200, 20);
    image(this.sling2,170, 20);
    if(this.wire.bodyB){

   
    push()
    if(this.wire.bodyB.position.x<220){

    
    strokeWeight(7)
    stroke(48,22,8)
    line(this.wire.bodyB.position.x-20, this.wire.bodyB.position.y,this.pointA.x-25, this.pointA.y)
    line(this.wire.bodyB.position.x, this.wire.bodyB.position.y,this.pointA.x+23, this.pointA.y)
    image(this.sling3,this.wire.bodyB.position.x-25,this.wire.bodyB.position.y-10,30,15)
}
else{
    strokeWeight(3)
    stroke(48,22,8)
    line(this.wire.bodyB.position.x-20, this.wire.bodyB.position.y,this.pointA.x-25, this.pointA.y)
    line(this.wire.bodyB.position.x, this.wire.bodyB.position.y,this.pointA.x+23, this.pointA.y)
    image(this.sling3,this.wire.bodyB.position.x-25,this.wire.bodyB.position.y-10,30,15)
}
    pop()
   }
}
fly(){
    this.wire.bodyB = null;
}
}
