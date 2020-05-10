if (!com)
	var com = {};
if (!com.logicpartners)
	com.logicpartners = {};
if (!com.logicpartners.labelControl)
	com.logicpartners.labelControl = {};
	
com.logicpartners.labelControl.size = function(designer, IPAddress, PortNum)
{
	var self = this;
	this.designer = designer;
	this.IPAddress=IPAddress;
	this.PortNumber=PortNum;
	this.workspace = $("<div></div>").addClass("designerLabelControl").attr("title", "Settings");
	
	this.widthContainer = $("<div>Width: </div>").addClass("designerLabelControlContainer").appendTo(this.workspace);
	this.widthController = $("<input type=\"text\" />")
		.addClass("designerLabelControlElement")
		.css({
			width : "50px"
			
		})
		.val(this.designer.labelWidth / this.designer.dpi)
		.appendTo(this.widthContainer)
		.on("blur", function() {
				self.updateDesigner();
		})
		.on("keypress", function(e) {
			if (e.which == 13) {
				e.preventDefault();
				self.updateDesigner();
			}
		});
		
	this.heightContainer = $("<div>Height: </div>").addClass("designerLabelControlContainer").appendTo(this.workspace);
	this.heightController = $("<input type=\"text\" />")
		.addClass("designerLabelControlElement")
		.css({
			width : "50px"
			
		})
		.val(this.designer.labelHeight / this.designer.dpi)
		.appendTo(this.heightContainer)
		.on("blur", function() {
			
				self.updateDesigner();
		})
		.on("keypress", function(e) {
			if (e.which == 13) {
				e.preventDefault();
				self.updateDesigner();
			}
		});
		
	this.dpiContainer = $("<div>DPI: </div>").addClass("designerLabelControlContainer").appendTo(this.workspace);
	this.dpiController = $("<input type=\"text\" />")
		.addClass("designerLabelControlElement")
		.css({
			width : "50px"
		})
		.val(this.designer.dpi)
		.appendTo(this.dpiContainer)
		.on("blur", function() {
			
				self.updateDesigner();
		})
		.on("keypress", function(e) {
			if (e.which == 13) {
				e.preventDefault();
				self.updateDesigner();
			}
		});
		
	this.IPAddressContainer = $("<div>Printer IP Address: </div>").addClass("designerLabelControlContainer").appendTo(this.workspace);
	this.IPAddressController = $("<input type=\"text\" />")
		.addClass("designerLabelControlElement")
		.css({
			width : "120px"
		})
		.val(this.IPAddress)
		.appendTo(this.IPAddressContainer)
		.on("blur", function() {
			
				self.updateDesigner();
		})
		.on("keypress", function(e) {
			if (e.which == 13) {
				e.preventDefault();
				self.updateDesigner();
			}
		});
		
	this.PortNumberContainer = $("<div># </div>").addClass("designerLabelControlContainer").appendTo(this.workspace);
	this.PortNumberController = $("<input type=\"text\" />")
		.addClass("designerLabelControlElement")
		.css({
			width : "40px"
		})
		.val(this.PortNumber)
		.appendTo(this.PortNumberContainer)
		.on("blur", function() {
			
				self.updateDesigner();
		})
		.on("keypress", function(e) {
			if (e.which == 13) {
				e.preventDefault();
				self.updateDesigner();
			}
		});
		
	this.updateDesigner = function()
	{
		var dpi = this.designer.dpi;
		
		if (!isNaN(this.dpiController.val())) dpi = this.dpiController.val();
		this.designer.dpi = dpi;
		
		var width = this.designer.labelWidth / this.designer.dpi;
		var height = this.designer.labelHeight / this.designer.dpi;
		
		if (!isNaN(this.widthController.val())) width = this.widthController.val();
		if (!isNaN(this.heightController.val())) height = this.heightController.val();
		
		this.designer.updateLabelSize(width, height);
		this.widthController.val(width);
		this.heightController.val(height);
	}
		
	this.update = function()
	{
		this.widthController.val(this.designer.labelWidth / this.designer.dpi);
		this.heightController.val(this.designer.labelHeight / this.designer.dpi);
	}
}