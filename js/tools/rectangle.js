if (!com)
	var com = {};
if (!com.logicpartners)
	com.logicpartners = {};
if (!com.logicpartners.designerTools)
	com.logicpartners.designerTools = {};
	
com.logicpartners.designerTools.rectangle = function() {
	var self = this;
	this.counter = 1;
	this.button = $("<div></div>").addClass("designerToolbarRectangle designerToolbarButton").attr("title", "Rectangle").append($("<div></div>"));
	
	this.object =  function(x, y, width, height, objectBorder, objectColor, objectRadius)
	{
		this.name = "Rectangle " + self.counter++;
		this.border=objectBorder || 1;
		this.radius=objectRadius || 0;
		this.color=objectColor || "black";
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		
		this.getZPLData = function() {
			return "";
		}

		this.toZPL = function(labelx, labely, labelwidth, labelheight)
		{
			return "^FO" + (this.x - labelx) + "," + (this.y - labely) + "^GB" +this.width+"," + this.height + "," + this.border + "," +(this.color=="black"?"B":"W")+ "," +this.radius+ "^FS";
		}
		
		this.draw = function(context)
		{
			//context.fillRect(this.x, this.y, this.width, this.height);
			this.DrawCustomRect(context, this.x, this.y, this.width, this.height, this.radius, this.border, (this.color=="black"?this.color:"white"));
		}
		
		this.setWidth = function(width) {
			this.width = parseInt(width);
		}
		
		this.getWidth = function() {
			return this.width;
		}
		
		this.setHeight = function(height) {
			this.height = height;
		}
		
		this.getHeight = function() {
			return this.height;
		}

		this.setHandle = function(coords) {
			this.handle = this.resizeZone(coords);
		}

		this.getHandle = function() {
			return this.handle;
		}

		this.drawActive = function(context) {
			context.dashedStroke(parseInt(this.x + 1), parseInt(this.y + 1), parseInt(this.x) + parseInt(this.width) - 1, parseInt(this.y) + parseInt(this.height) - 1, [2, 2]);
		}

		this.hitTest = function(coords) {
			return (coords.x >= parseInt(this.x) && coords.x <= parseInt(this.x) + parseInt(this.width) && coords.y >= parseInt(this.y) && coords.y <= parseInt(this.y) + parseInt(this.height));
		}
		
		this.GetElementType=function() {return "rectangle";}
		
		this.DrawCustomRect=function(ctx, x, y, width, height, radius, border, color, fill, stroke)
		{
			if (typeof stroke == 'undefined') stroke = true;
			if (typeof radius === 'undefined') radius = 0;
			if(radius>8 || radius<0) radius=0;
			radius=width<=height?((radius/8)*(width/2)):((radius/8)*(height/2));
			
			if (typeof radius === 'number') radius = {tl: radius, tr: radius, br: radius, bl: radius};
			else
			{
				var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
				for (var side in defaultRadius) radius[side] = radius[side] || defaultRadius[side];
			}
			
			x+=border/2;
			y+=border/2;
			width-=border;
			height-=border;
			
			ctx.beginPath();
			ctx.lineWidth=border;
			ctx.strokeStyle=color;
			ctx.moveTo(x + radius.tl, y);
			ctx.lineTo(x + width - radius.tr, y);
			ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
			ctx.lineTo(x + width, y + height - radius.br);
			ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
			ctx.lineTo(x + radius.bl, y + height);
			ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
			ctx.lineTo(x, y + radius.tl);
			ctx.quadraticCurveTo(x, y, x + radius.tl, y);
			ctx.closePath();
			
			if (fill) ctx.fill();
			if (stroke) ctx.stroke();
		}
	}
}
