class Iron
{
    constructor(x,y,width,height)
    {
        var options = 
	{
		'restitution':0.3,
		'friction':0.9,
		'density':30
	}
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }
    display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("green");
			fill("blue");
            rect(0, 0, this.width, this.height);

			pop()
	}
}