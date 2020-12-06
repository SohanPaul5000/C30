class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling3 = loadImage("sprites/sling3.png")
        this.sling2 = loadImage("sprites/sling2.png")

        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    
 attach(body){
  this.sling.bodyA=body
 }
      
    display(){

        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<220){
            strokeWeight(7);
            stroke("#301608");
            line(pointA.x-20, pointA.y, pointB.x-20, pointB.y-25);
            line(pointA.x-20, pointA.y, pointB.x+25, pointB.y-25);
            image(this.sling3,pointA.x-30,pointA.y-20, 15,35);
        
      }
      else{
          strokeWeight(3);
          stroke("#301608")
            line(pointA.x+20, pointA.y, pointB.x-20, pointB.y-25);
            line(pointA.x+20, pointA.y, pointB.x+25, pointB.y-25);
            image(this.sling3,pointA.x+20,pointA.y-20, 15,35);
    5
      }
    }
    
  }
    
}