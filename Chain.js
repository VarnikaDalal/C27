class Chain{
    constructor(b1, b2){
        var options={
            bodyA:b1,
            bodyB:b2,
            stiffness:0.04,
            length:10

        }
        this.c1=Constraint.create(options);
        World.add(world,this.c1);
    }
    display(){
        var pointA=this.c1.bodyA.position;
        var pointB=this.c1.bodyB.position;
        line(pointA.x,pointA.y, pointB.x, pointB.y);

    }

}