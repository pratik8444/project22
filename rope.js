	class rope{
		constructor(bodyA,pointB)
		{

			var option={
				bodyA:bodyA,
				pointB:pointB,
				stiffness:0.04,
				length:210
			}
			this.pointB=pointB
			this.rope=Constraint.create(option)
			World.add(world,this.rope)
		}


	    display(){
			if(this.rope.bodyA){
				var pointA=this.rope.bodyA.position;
				var pointB=this.pointB
				strokeWeight(4)
				line(pointA.x,pointA.y,pointB.x,pointB.y)
			}
		}
    }
