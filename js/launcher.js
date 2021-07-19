class launcher{
	constructor(body,Point)
	{
		
		var options={ bodyA:body,			 
			pointB:Point, 
			stiffness:0.006, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=Point
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}
	attach(body){
		this.launcher.bodyA=body;
	}
	fly()
	{
		this.launcher.bodyA=null;
	}
	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB
			strokeWeight(7);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}