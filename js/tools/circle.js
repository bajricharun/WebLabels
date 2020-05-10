if (!com)
	var com = {};
if (!com.logicpartners)
	com.logicpartners = {};
if (!com.logicpartners.designerTools)
	com.logicpartners.designerTools = {};
	
com.logicpartners.designerTools.circle = function()
{
	var self = this;
	this.counter = 1;
	this.button = $("<div></div>").addClass("designerToolbarCircle designerToolbarButton").attr("title", "Circle").append($("<div></div>"));
	
	this.object =  function(x, y, diameter, border, color)
	{
		this.name = "Circle " + self.counter++;
		this.diameter=diameter>1?diameter:60;
		this.border=border>0?border:1;
		this.color=color || "black";
		this.x = x;
		this.y = y;
		
		this.getZPLData = function() {
			return "";
		}

		this.toZPL = function(labelx, labely, labelwidth, labelheight)
		{
			return "^FO" + (this.x - labelx) + "," + (this.y - labely) + "^GC" + this.diameter + ","+this.border+","+(this.color=="black"?"B":"W")+"^FS";
		}
		
		this.draw = function(context)
		{
			context.beginPath();
			context.arc(this.x, this.y, (this.diameter/2)-(this.border/2), 0, 2 * Math.PI);
			//context.fillStyle="black";
			//context.fill();
			context.lineWidth=this.border;
			context.strokeStyle=this.color=="black"?this.color:"white";
			context.stroke();
			context.closePath();
		}
		
		this.setWidth = function(width) {
			//this.width = parseInt(width);
		}
		
		this.getWidth = function() {
			return /*this.width;*/0;
		}
		
		this.setHeight = function(height) {
			//this.height = height;
		}
		
		this.getHeight = function() {
			return /*this.height;*/0;
		}

		this.setHandle = function(coords) {
			this.handle = this.resizeZone(coords);
		}

		this.getHandle = function() {
			return this.handle;
		}

		this.drawActive = function(context)
		{
			context.dashedStroke(parseInt(this.x + 1)-(parseInt(this.diameter)/2), parseInt(this.y + 1)-(parseInt(this.diameter)/2),
				parseInt(this.x)+(parseInt(this.diameter)/2)-1, parseInt(this.y) + (parseInt(this.diameter)/2)-1, [2, 2]);
		}

		this.hitTest = function(coords)
		{
			var parsedX=parseInt(this.x),parsedY=parseInt(this.y),parsedRadius=parseInt(this.diameter)/2;
			
			return (((coords.x >= parsedX && coords.x <= parsedX + parsedRadius)
					|| (coords.x <= parsedX && coords.x >= parsedX-parsedRadius))
					
					&& ((coords.y <= parsedY && coords.y >= parsedY - parsedRadius)
					|| (coords.y >= parsedY && coords.y <= parsedY+parsedRadius)));
		}
		
		this.GetElementType=function() {return "circle";}
	}
}
