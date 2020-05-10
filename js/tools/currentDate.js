if (!com)
	var com = {};
if (!com.logicpartners)
	com.logicpartners = {};
if (!com.logicpartners.designerTools)
	com.logicpartners.designerTools = {};

com.logicpartners.designerTools.currentDate = function()
{
	var self = this;
	this.counter = 1;
	this.button = $("<div></div>").addClass("designerToolbarCurrentDate designerToolbarButton").attr("title", "Current Date").append($("<div></div>"));

	GenerateCurrentDate=function(rawFormat, usedIndicator)
	{
		var todaysDate=new Date();
		
		var currentDay=todaysDate.getDate();
		if(currentDay<10) currentDay="0"+currentDay.toString();
		var currentMonth=todaysDate.getMonth()+1;
		if(currentMonth<10) currentMonth="0"+currentMonth.toString();
		
		return rawFormat.replace(usedIndicator+"d",currentDay).replace(usedIndicator+"m",currentMonth).replace(usedIndicator+"y",todaysDate.getFullYear().toString().substring(2));
	}
	
	GetIndicatorInUse=function(rawFormat, firstIn, secondIn, thirdIn)
	{
		if(firstIn!="" && rawFormat.includes(firstIn+"y")) return firstIn;
		else if(secondIn!="" && rawFormat.includes(secondIn+"y")) return secondIn;
		else if(thirdIn!="" && rawFormat.includes(thirdIn+"y")) return thirdIn;
		else return null;
	}
	
	this.object =  function(x, y, width, height, rawFormat, firstIn, secondIn, thirdIn)
	{
		this.name = "Date " + self.counter++;
		this.firstIndicator=firstIn || "$";
		this.secondIndicator=secondIn || "";
		this.thirdIndicator=thirdIn || "";
		this.indicatorInUse="";
		
		this.dateFormat=rawFormat || (this.firstIndicator+"d. "+this.firstIndicator+"m. "+this.firstIndicator+"y");
		this.indicatorInUse=GetIndicatorInUse(this.dateFormat, this.firstIndicator, this.secondIndicator, this.thirdIndicator);
		this.text=GenerateCurrentDate(this.dateFormat, this.indicatorInUse);
		
		this.x = x;
		this.y = y;
		this.fontSize = 36;
		this.fontType = "Arial";
		this.width = 100;
		this.height = 0;
		
		this.readonly = [ "width", "height", "text", "indicatorInUse" ];
		
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

		this.toZPL = function(labelx, labely, labelwidth, labelheight)
		{
			this.indicatorInUse=GetIndicatorInUse(this.dateFormat, this.firstIndicator, this.secondIndicator, this.thirdIndicator);
			
			return "^FO" + (this.x - labelx) + "," + (this.y - labely) + "^FC"+this.indicatorInUse+"^FD" + this.dateFormat + "^FS";
		}
		
		this.draw = function(context)
		{
			this.indicatorInUse=GetIndicatorInUse(this.dateFormat, this.firstIndicator, this.secondIndicator, this.thirdIndicator);
			this.text=GenerateCurrentDate(this.dateFormat, this.indicatorInUse);
			
			context.font = this.fontSize + "px " + this.fontType;
			var oColor = context.fillStyle;
			context.fillStyle = "white";
			this.height = this.getFontHeight();
			var measuredText = context.measureText(this.text);
			this.width = measuredText.width;
			context.globalCompositeOperation = "difference";
			context.fillText(this.text, this.x, this.y + (this.height * 0.75));
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
		
		this.GetElementType=function() {return "currentDate";}
	}
}
