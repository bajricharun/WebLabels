if (!com)
	var com = {};
if (!com.logicpartners)
	com.logicpartners = {};
if (!com.logicpartners.designerTools)
	com.logicpartners.designerTools = {};
	
com.logicpartners.designerTools.counter = function(numOfLabelsContext)
{
	var self = this;
	this.counter = 1;
	this.button = $("<div></div>").addClass("designerToolbarCounter designerToolbarButton").attr("title", "Counter").append($("<div></div>"));
	
	GetCounterInterval=function(valueOfCounter, counterStep)
	{
		var leadingZeros="";
		
		for(var i=0;i<valueOfCounter.length;++i)
		{
			if(i==0 && valueOfCounter[i]!="0") break;
			
			if(valueOfCounter[i]=="0") leadingZeros+="0";
			else break;
		}
		
		var counterWithoutZeros=parseInt(valueOfCounter.substring(leadingZeros.length));
		if(isNaN(counterWithoutZeros))
		{
			counterWithoutZeros=0;
			leadingZeros="";
		}
		
		return "["+valueOfCounter+" ... "+leadingZeros+((parseInt($(numOfLabelsContext).val())-1)*counterStep+counterWithoutZeros)+"]";
	}
	
	this.object =  function(x, y, width, height, textTitle, counterStep, counterLeadingZeros)
	{
		this.name = "Counter " + self.counter++;
		this.text = GetCounterInterval(textTitle || "001", counterStep || 1);
		this.counterValue=textTitle || "001";
		this.step=counterStep || 1;
		if(counterLeadingZeros==null) counterLeadingZeros="Y";
		this.leadingZeros=(counterLeadingZeros=="Y"?"yes":"no");
		this.x = x;
		this.y = y;
		this.fontSize = 20;
		this.fontType = "Arial";
		this.width = 100;
		this.height = 0;
		
		this.readonly = [ "width", "height", "text" ];
		
		this.getFontHeight = function() {
			var textMeasure = $("<div></div>").css({
				"font-size" : this.fontSize + "px",
				"font-family" : this.fontType,
				"opacity" : 0,
			}).text("M").appendTo($("body"));
			
			var height = textMeasure.outerHeight();
			textMeasure.remove();
			return height;
		}
		
		this.getZPLData = function() {
			return "";
		}

		this.toZPL = function(labelx, labely, labelwidth, labelheight) {
			return "^FO" + (this.x - labelx) + "," + (this.y - labely) + "^SN"+this.counterValue+","+this.step+","+(this.leadingZeros.includes("n")?"N":"Y")+"^FS";
		}
		
		this.draw = function(context)
		{
			context.font = this.fontSize + "px " + this.fontType;
			var oColor = context.fillStyle;
			context.fillStyle = "white";
			this.height = this.getFontHeight();
			var measuredText = context.measureText(this.text);
			this.width = measuredText.width;
			context.globalCompositeOperation = "difference";
			
			var newTextValue=GetCounterInterval(this.counterValue || "001", this.step || 1);
			context.fillText(newTextValue, this.x, this.y + (this.height * 0.75));
			this.text=newTextValue;
			
			context.globalCompositeOperation = "source-over";
			context.fillStyle = oColor;
			//context.fillRect(this.x, this.y, this.width, this.height);
		}
		
		this.setWidth = function(width) {
			//this.width = width;
		}
		
		this.getWidth = function() {
			return this.width;
		}
		
		this.setHeight = function(height) {
			//height = height;
		}
		
		this.getHeight = function() {
			return this.height * 0.75;
		}

		this.setHandle = function(coords) {
			this.handle = this.resizeZone(coords);
		}

		this.getHandle = function() {
			return this.handle;
		}

		this.drawActive = function(context) {
			context.dashedStroke(parseInt(this.x + 1), parseInt(this.y + 1), parseInt(this.x) + parseInt(this.width) - 1, parseInt(this.y) + parseInt(this.height * 0.9) - 1, [2, 2]);
		}

		this.hitTest = function(coords) {
			return (coords.x >= parseInt(this.x) && coords.x <= parseInt(this.x) + parseInt(this.width) && coords.y >= parseInt(this.y) && coords.y <= parseInt(this.y) + parseInt(this.height) * 0.75);
		}
		
		this.GetElementType=function() {return "counter";}
	}
}
