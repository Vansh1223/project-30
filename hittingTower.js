class hittingTower{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image = loadImage("polygon.png")
        this.pointB = pointB
        this.hittingTower = Constraint.create(options);
        World.add(world, this.hittingTower);
    }

    fly(){
        this.hittingTower.bodyA = null;
    }


    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        
        image(this.hittingTower, 200, 20);

     
         
        
        if(this.hittingTower.bodyA){
            var pointA = this.hittingTower.bodyA.position;
            var pointB = this.pointB;
            push();
            //strokeWeight(10);
            stroke(48,22,8);
            if (pointA.x <200){
            strokeWeight(5);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-4);
            image(this.hittingTower, pointA.x-30, pointA.y-10, 15, 30);
            }else {
            strokeWeight(10);
            line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-25, pointA.y, pointB.x+30, pointB.y-4);
            image(this.hittingTower, pointA.x-30, pointA.y-10, 15, 30);
            }
            pop();
        }
    }
    
}