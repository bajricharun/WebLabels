<html>
    <head>
		<link rel="stylesheet" href="css/designer.css">
        <script language="javascript" type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script language="javascript" type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js"></script>
		<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/themes/smoothness/jquery-ui.css">
		<script src="https://kit.fontawesome.com/3478ec9b17.js" crossorigin="anonymous"></script>
        <script language="javascript" type="text/javascript" src="js/designer.js"></script>
        <script language="javascript" type="text/javascript" src="js/designer_propertyInspector.js"></script>
        <script language="javascript" type="text/javascript" src="js/designer_toolbar.js"></script>
        <script language="javascript" type="text/javascript" src="js/designer_labelInspector.js"></script>
        <script language="javascript" type="text/javascript" src="js/labelControls/LabelSize.js"></script>
        <script language="javascript" type="text/javascript" src="js/lindell-barcode/JsBarcode.all.min.js"></script>
        <script language="javascript" type="text/javascript" src="js/tools/rectangle.js"></script>
        <script language="javascript" type="text/javascript" src="js/tools/barcode.js"></script>
		<script language="javascript" type="text/javascript" src="js/tools/barcodeEAN8.js"></script>
		<script language="javascript" type="text/javascript" src="js/tools/barcodeEAN13.js"></script>
        <script language="javascript" type="text/javascript" src="js/tools/text.js"></script>
		<script language="javascript" type="text/javascript" src="js/tools/variableText.js"></script>
		<script language="javascript" type="text/javascript" src="js/tools/counter.js"></script>
		<script language="javascript" type="text/javascript" src="js/tools/currentDate.js"></script>
        <script language="javascript" type="text/javascript" src="js/tools/image.js"></script>
		<script language="javascript" type="text/javascript" src="js/HTTPCookies.js"></script>
        <script language="javascript" type="text/javascript" src="js/tools/circle.js"></script>
		<title>IT Solutions' Label Designer</title>

		<script>
			// Default printer network configuration.
			var printerPortNumber=10000;
			var printerIPAddress="192.168.88.26";
			// END - Default printer network configuration.
			// Default label settings.
			var topBoxLabelHeight=0.75;
			var topBoxLabelWidth=3;
			var topBoxLabelResolution=300;
			// END - Default label settings.
			// HTTP Cookies data.
			var HTTPCookieITSolZebraIPAddress="ITSolZebraIPAddress";
			var HTTPCookieITSolZebraPortNumber="ITSolZebraPortNumber";
			var HTTPCookieITSolZebraLabelResolution="ITSolZebraLabelResolution";
			var HTTPCookieExpirationInDays=365;
			// END - HTTP Cookies data.

			if(!CheckHTTPCookie(HTTPCookieITSolZebraIPAddress)) SetHTTPCookie(HTTPCookieITSolZebraIPAddress,printerIPAddress,HTTPCookieExpirationInDays);
			else
			{
				var HTTPCookieValue=GetHTTPCookie(HTTPCookieITSolZebraIPAddress);
				if(HTTPCookieValue) printerIPAddress=HTTPCookieValue;
				else SetHTTPCookie(HTTPCookieITSolZebraIPAddress,printerIPAddress,HTTPCookieExpirationInDays);
			}
			if(!CheckHTTPCookie(HTTPCookieITSolZebraPortNumber)) SetHTTPCookie(HTTPCookieITSolZebraPortNumber,printerPortNumber,HTTPCookieExpirationInDays);
			else
			{
				var HTTPCookieValue=GetHTTPCookie(HTTPCookieITSolZebraPortNumber);
				if(HTTPCookieValue) printerPortNumber=HTTPCookieValue;
				else SetHTTPCookie(HTTPCookieITSolZebraPortNumber,printerPortNumber,HTTPCookieExpirationInDays);
			}
			if(!CheckHTTPCookie(HTTPCookieITSolZebraLabelResolution)) SetHTTPCookie(HTTPCookieITSolZebraLabelResolution,topBoxLabelResolution,HTTPCookieExpirationInDays);
			else
			{
				var HTTPCookieValue=GetHTTPCookie(HTTPCookieITSolZebraLabelResolution);
				if(HTTPCookieValue) topBoxLabelResolution=HTTPCookieValue;
				else SetHTTPCookie(HTTPCookieITSolZebraLabelResolution,topBoxLabelResolution,HTTPCookieExpirationInDays);
			}

			var canvasDesigner = null;
            $(document).ready(function()
			{
				canvasDesigner = new com.logicpartners.labelDesigner('labelDesigner', topBoxLabelWidth, topBoxLabelHeight, topBoxLabelResolution);
				var topBox=new com.logicpartners.labelControl.size(canvasDesigner,printerIPAddress,printerPortNumber);
				canvasDesigner.labelInspector.addTool(topBox);
				var numOfLabelsController=null;
				
				ZPLInterpreter=function(topBox)
				{
					var loggingEnabled=false;
					var newLineToken="\r\n";
					this.SetLogging=function(enabled) {loggingEnabled=enabled;}
					this.LogData=function(data) {if(loggingEnabled) console.log("[ZPL Interpreter]: "+data);}
					var variableData=
					{
						locationX: 0,
						locationY: 0,
						
						isBarcode: false,
						barcodeType: "",
						barcodeHeight: 0,
						
						isGraphicBox: false,
						graphicBoxWidth: 0,
						graphicBoxHeight: 0,
						graphicBoxBorder: 0,
						graphicBoxColor: "",
						graphicBoxRadius: 0,
						
						isGraphicCircle: false,
						circleDiameter: 0,
						circleBorder: 0,
						circleColor: 0,
						
						isImage: false,
						rawImageName: "",
						rawImages: [],
						rawImageNumOfBytes: [],
						rawImageBytesPerRow: [],
						
						isCounter: false,
						counterStartingValue: 0,
						counterInDecrement: 0,
						counterAddLeadingZeros: "",
						
						isCurrentDate: false,
						evaluateCurrentDate: false,
						defaultPrimaryIndicator: "",
						defaultSecondaryIndicator: "",
						defaultThirdIndicator: "",
						
						isVariableText: false,
						
						content: ""
					}
					
					this.RunInterpreter=function(ZPLSourceCode)
					{
						var printWidthLexemIndex=ZPLSourceCode.indexOf("^PW")+3;
						var printWidthLexemSubstring=ZPLSourceCode.substring(printWidthLexemIndex);
						var newLineTokenIndex=printWidthLexemSubstring.indexOf(newLineToken);
						var printWidthLexem=printWidthLexemSubstring.substring(0,newLineTokenIndex);
						
						var labelLengthLexemIndex=ZPLSourceCode.indexOf("^LL")+3;
						var labelLengthLexemSubstring=ZPLSourceCode.substring(labelLengthLexemIndex);
						newLineTokenIndex=labelLengthLexemSubstring.indexOf(newLineToken);
						var labelLengthLexem=labelLengthLexemSubstring.substring(0,newLineTokenIndex);
						
						var currentPrintResolution=topBox.dpiController.val();
						topBox.widthController.val(printWidthLexem/currentPrintResolution);
						topBox.heightController.val(labelLengthLexem/currentPrintResolution);
						topBox.updateDesigner();
						
						this.LogData("Running ZPL interpreter...");
						this.LogData("^PW: "+printWidthLexem);
						this.LogData("^LL: "+labelLengthLexem);
						
						ZPLSourceCode=this.ReplaceAll(ZPLSourceCode, newLineToken, "");
						
						// Data tokens parser.
						var tokenArray=ZPLSourceCode.split("~");
						for(var i=0; i<tokenArray.length; ++i) tokenArray[i]="~"+tokenArray[i];
						
						for(var i=0; i<tokenArray.length; ++i)
						{
							if(tokenArray[i].startsWith("~DG"))
							{
								var DGParms=tokenArray[i].split(",");
								var rawNumOfBytes=DGParms[1];
								
								variableData.rawImages[DGParms[0].substring(3)]=DGParms[3].substring(0, parseInt(rawNumOfBytes)*2);
								variableData.rawImageNumOfBytes[DGParms[0].substring(3)]=rawNumOfBytes;
								variableData.rawImageBytesPerRow[DGParms[0].substring(3)]=DGParms[2];
							}
						}
						
						// Command tokens parser.
						tokenArray=ZPLSourceCode.split("^");
						for(var i=0; i<tokenArray.length; ++i) tokenArray[i]="^"+tokenArray[i];
						
						for(var i=0; i<tokenArray.length; ++i)
						{
							if(tokenArray[i].startsWith("^FO"))
							{
								var variableLocation=tokenArray[i].substring(3);
								variableLocation=variableLocation.split(",");
								variableData.locationX=variableLocation[0];
								variableData.locationY=variableLocation[1];
								
								while(!tokenArray[++i].startsWith("^FS"))
								{
									if(tokenArray[i].startsWith("^FD"))
									{
										variableData.content=tokenArray[i].substring(3);
										
										if(variableData.isCurrentDate)
										{
											variableData.isCurrentDate=false;
											variableData.evaluateCurrentDate=true;
										}
									}
									else if(tokenArray[i].startsWith("^FC"))
									{
										variableData.isCurrentDate=true;
										var indicators=tokenArray[i].substring(3).split(",");
										
										if(Array.isArray(indicators))
										{
											switch(indicators.length)
											{
												case 3:
													variableData.defaultPrimaryIndicator=indicators[0];
													variableData.defaultSecondaryIndicator=indicators[1];
													variableData.defaultThirdIndicator=indicators[2];
													break;
													
												case 2:
													variableData.defaultPrimaryIndicator=indicators[0];
													variableData.defaultSecondaryIndicator=indicators[1];
													break;
												
												case 1:
													variableData.defaultPrimaryIndicator=indicators[0];
													break;
											}
										}
										else variableData.defaultPrimaryIndicator=indicators;
									}
									else if(tokenArray[i].startsWith("^B3"))
									{
										variableData.isBarcode=true;
										variableData.barcodeType="code39";
										var barcodeData=tokenArray[i].substring(3);
										barcodeData=barcodeData.split(",");
										variableData.barcodeHeight=barcodeData[2].substring(0,barcodeData[2].length-1);
									}
									else if(tokenArray[i].startsWith("^B8"))
									{
										variableData.isBarcode=true;
										variableData.barcodeType="ean8";
										var barcodeData=tokenArray[i].substring(3);
										barcodeData=barcodeData.split(",");
										variableData.barcodeHeight=barcodeData[1].substring(0,barcodeData[1].length-1);
									}
									else if(tokenArray[i].startsWith("^BE"))
									{
										variableData.isBarcode=true;
										variableData.barcodeType="ean13";
										var barcodeData=tokenArray[i].substring(3);
										barcodeData=barcodeData.split(",");
										variableData.barcodeHeight=barcodeData[1].substring(0,barcodeData[1].length-1);
									}
									else if(tokenArray[i].startsWith("^GB"))
									{
										variableData.isGraphicBox=true;
										var graphicBoxData=tokenArray[i].substring(3);
										graphicBoxData=graphicBoxData.split(",");
										
										variableData.graphicBoxWidth=graphicBoxData[0];
										variableData.graphicBoxHeight=graphicBoxData[1];
										variableData.graphicBoxBorder=graphicBoxData[2];
										variableData.graphicBoxColor=graphicBoxData[3];
										variableData.graphicBoxRadius=graphicBoxData[4];
									}
									else if(tokenArray[i].startsWith("^GC"))
									{
										variableData.isGraphicCircle=true;
										var graphicCircleData=tokenArray[i].substring(3);
										graphicCircleData=graphicCircleData.split(",");
										variableData.circleDiameter=graphicCircleData[0];
										variableData.circleBorder=graphicCircleData[1];
										variableData.circleColor=graphicCircleData[2];
									}
									else if(tokenArray[i].startsWith("^XG"))
									{
										variableData.isImage=true;
										var parsedImageData=tokenArray[i].substring(5).split(",");
										variableData.rawImageName=parsedImageData[0];
									}
									else if(tokenArray[i].startsWith("^SN"))
									{
										variableData.isCounter=true;
										var parsedCounterData=tokenArray[i].substring(3).split(",");
										variableData.counterStartingValue=parsedCounterData[0];
										variableData.counterInDecrement=parsedCounterData[1];
										variableData.counterAddLeadingZeros=parsedCounterData[2];
									}
									else if(tokenArray[i].startsWith("^FV"))
									{
										variableData.isVariableText=true;
										variableData.content=tokenArray[i].substring(3);
									}
								}
								
								if(variableData.isBarcode)
								{
									var newBarCode=null;
									
									switch(variableData.barcodeType)
									{
										case "code39":
											newBarCode=new com.logicpartners.designerTools.barcode();
											newBarCode.object(parseInt(variableData.locationX)+5, parseInt(variableData.locationY)+5, 100, parseInt(variableData.barcodeHeight), variableData.content);
											break;
											
										case "ean8":
											newBarCode=new com.logicpartners.designerTools.barcodeEAN8();
											newBarCode.object(parseInt(variableData.locationX)+5, parseInt(variableData.locationY)+5, 100, parseInt(variableData.barcodeHeight), variableData.content);
											break;
											
										case "ean13":
											newBarCode=new com.logicpartners.designerTools.barcodeEAN13();
											newBarCode.object(parseInt(variableData.locationX)+5, parseInt(variableData.locationY)+5, 100, parseInt(variableData.barcodeHeight), variableData.content);
											break;
											
										default: break;
									}
									
									canvasDesigner.addObject(newBarCode);
									
									this.LogData("Field found (barcode - "+variableData.barcodeType+"): locationX: '"+variableData.locationX+"', locationY: '"+variableData.locationY+"', content: '"+variableData.content+"', isBarcode: '"+variableData.isBarcode+"'.");
								}
								else if(variableData.isGraphicCircle)
								{
									var newGraphicCircle=new com.logicpartners.designerTools.circle();
									newGraphicCircle.object(parseInt(variableData.locationX)+5, parseInt(variableData.locationY)+5,
										parseInt(variableData.circleDiameter), parseInt(variableData.circleBorder), (variableData.circleColor=="B"?"black":"white"));
									canvasDesigner.addObject(newGraphicCircle);
									
									this.LogData("Field found (circle): locationX: '"+variableData.locationX+"', locationY: '"+variableData.locationY
										+"', circleDiameter: '"+variableData.circleDiameter+"', circleBorder: '"+variableData.circleBorder+"', circleColor: '"+variableData.circleColor+"'.");
								}
								else if(variableData.isImage)
								{
									DrawXGImage(variableData.rawImages[variableData.rawImageName], parseInt(variableData.locationX), parseInt(variableData.locationY), parseInt(variableData.rawImageNumOfBytes[variableData.rawImageName]), parseInt(variableData.rawImageBytesPerRow[variableData.rawImageName]));
									
									this.LogData("Field found (image): locationX: '"+variableData.locationX+"', locationY: '"+variableData.locationY
										+"', rawImageName: '"+variableData.rawImageName+"', rawImageNumOfBytes: '"+variableData.rawImageNumOfBytes[variableData.rawImageName]+
										"', rawImageBytesPerRow: '"+variableData.rawImageBytesPerRow[variableData.rawImageName]+"'.");
								}
								else if(variableData.isGraphicBox)
								{
									var newGraphicBox=new com.logicpartners.designerTools.rectangle();
									newGraphicBox.object(parseInt(variableData.locationX)+5, parseInt(variableData.locationY)+5, parseInt(variableData.graphicBoxWidth), parseInt(variableData.graphicBoxHeight),
										parseInt(variableData.graphicBoxBorder), (variableData.graphicBoxColor=="B"?"black":"white"), parseInt(variableData.graphicBoxRadius));
									canvasDesigner.addObject(newGraphicBox);
									
									this.LogData("Field found (box): locationX: '"+variableData.locationX+"', locationY: '"+variableData.locationY+"', isGraphicBox: '"+variableData.isGraphicBox+"'.");
									
									variableData.graphicBoxWidth=variableData.graphicBoxHeight=variableData.graphicBoxBorder=variableData.graphicBoxRadius=0;
									variableData.graphicBoxColor="";
								}
								else if(variableData.isCounter)
								{
									var newCounter=new com.logicpartners.designerTools.counter(numOfLabelsController);
									newCounter.object(parseInt(variableData.locationX)+5, parseInt(variableData.locationY)+5, 0, 0, variableData.counterStartingValue, parseInt(variableData.counterInDecrement), variableData.counterAddLeadingZeros);
									canvasDesigner.addObject(newCounter);
									
									this.LogData("Field found (counter): locationX: '"+variableData.locationX+"', locationY: '"+variableData.locationY
										+"', counterStartingValue: '"+variableData.counterStartingValue+"', counterInDecrement: '"+variableData.counterInDecrement
										+"', counterAddLeadingZeros: '"+(variableData.counterAddLeadingZeros=="Y"?"true":"false")+"'.");
								}
								else if(variableData.isVariableText)
								{
									var newVarTextBox=new com.logicpartners.designerTools.variableText();
									newVarTextBox.object(parseInt(variableData.locationX)+5, parseInt(variableData.locationY)+5, 0, 0, variableData.content);
									canvasDesigner.addObject(newVarTextBox);
									
									this.LogData("Field found (variable text): locationX: '"+variableData.locationX+"', locationY: '"+variableData.locationY+"', content: '"+variableData.content+"'.");
								}
								else if(variableData.evaluateCurrentDate)
								{
									var newCurrentDate=new com.logicpartners.designerTools.currentDate();
									
									newCurrentDate.object(parseInt(variableData.locationX)+5, parseInt(variableData.locationY)+5, 0, 0, variableData.content,
										variableData.defaultPrimaryIndicator, variableData.defaultSecondaryIndicator, variableData.defaultThirdIndicator);
									canvasDesigner.addObject(newCurrentDate);
									
									this.LogData("Field found (date): locationX: '"+variableData.locationX+"', locationY: '"+variableData.locationY+"', content: '"+variableData.content
										+"', firstIndicator: '"+variableData.defaultPrimaryIndicator+"', secondIndicator: '"+variableData.defaultSecondaryIndicator
										+"', thirdIndicator: '"+variableData.defaultThirdIndicator+"'.");
										
									variableData.defaultPrimaryIndicator=variableData.defaultSecondaryIndicator=variableData.defaultThirdIndicator="";
								}
								else
								{
									var newTextBox=new com.logicpartners.designerTools.text();
									newTextBox.object(parseInt(variableData.locationX)+5, parseInt(variableData.locationY)+5, 0, 0, variableData.content);
									canvasDesigner.addObject(newTextBox);
									
									this.LogData("Field found (text): locationX: '"+variableData.locationX+"', locationY: '"+variableData.locationY+"', content: '"+variableData.content+"'.");
								}
								
								variableData.isBarcode=false;
								variableData.isGraphicBox=false;
								variableData.isGraphicCircle=false;
								variableData.isImage=false;
								variableData.isCounter=false;
								variableData.isVariableText=false;
								variableData.evaluateCurrentDate=false;
							}
							else if(tokenArray[i].startsWith("^PQ"))
							{
								$(numOfLabelsController).val(tokenArray[i].substring(3));
								canvasDesigner.updateCanvas();
							}
						}
					}
					
					this.ReplaceAll = function(target, search, replacement) {return target.replace(new RegExp(search, 'g'), replacement);}
				}
				
				var ZPL_Interpreter=new ZPLInterpreter(topBox);
				ZPL_Interpreter.SetLogging(true);
				
				generatezpl = function(designer)
				{
					var labelDesignerText="[Label Designer]: ";
					var ZPLStatements="";
					var self = this;
					this.designer = designer;
					this.workspace = $("<div></div>").addClass("designerLabelControl").attr("title", "Click to print the label!").css({ float : "right" });
					this.buttonContainer = $("<div></div>").appendTo(this.workspace);

					this.button = $("<button>Print Label</button>").css({ "line-height" : "30px" }).addClass("printButton").appendTo(this.buttonContainer).on("click", function()
					{
						$(".printButton").text("Processing...");
						
						self.designer.SetNumOfLabels($(numOfLabelsController).val());
						var zpl = self.designer.generateZPL();
						var dialog = $("<div></div>").prop("title", "Activity Report - Logs");
						ZPLStatements=zpl.data+zpl.zpl;
						
						zpl.zpl=labelDesignerText+"\r\n"+zpl.data+zpl.zpl+
								labelDesignerText+"Printer destination: "+topBox.IPAddressController.val()+":"+topBox.PortNumberController.val()+"\r\n"+
								labelDesignerText+"Sending ZPL statements to Zebra printer..."+"\r\n"+
								labelDesignerText;
								
						var POSTData={IPv4Address: topBox.IPAddressController.val(),printerPortNumber: topBox.PortNumberController.val(),ZPLStatements: ZPLStatements}

						$.ajax(
						{
							type: 'POST',
							url: 'ServerSideSoftware/SendStringToPrinter.php',
							data: POSTData,
							dataType: "text",
							
							success: function(serverResponse)
							{
								var transferStatusMessage="";
								if(!serverResponse)
								{
									transferStatusMessage="ZPL statements transfer successful.";
									
									self.designer.ClearAllVariableTexts();
									self.designer.updateCanvas();
								}
								else transferStatusMessage="ZPL statements transfer failed: "+serverResponse;
								
								zpl.zpl+=transferStatusMessage+"\r\n"+labelDesignerText+"Finished.";
								
								var output = $("<textarea></textarea>").css({ "white-space": "nowrap", resize: "none", width: "100%", height: "100%" }).val(zpl.zpl).appendTo(dialog);
						
								Toolbar = toolbar;
								dialog.dialog(
								{
									modal : true,
									width : 700,
									height : 700
								});
								
								$(".printButton").text("Print Label");
								
								SetHTTPCookie(HTTPCookieITSolZebraIPAddress,topBox.IPAddressController.val(),HTTPCookieExpirationInDays);
								SetHTTPCookie(HTTPCookieITSolZebraPortNumber,topBox.PortNumberController.val(),HTTPCookieExpirationInDays);
								SetHTTPCookie(HTTPCookieITSolZebraLabelResolution,topBox.dpiController.val(),HTTPCookieExpirationInDays);
							}
						});
					});

					this.update = function()
					{
						this.widthController.val(this.designer.labelWidth / this.designer.dpi);
						this.heightController.val(this.designer.labelHeight / this.designer.dpi);
					}
				}
				
				SaveLabelFile=function(designer)
				{
					var self = this;
					this.designer = designer;
					this.workspace = $("<div></div>").addClass("designerLabelControl2").attr("title", "Click to save the label!").css({ float : "right" });
					this.buttonContainer = $("<div></div>").appendTo(this.workspace);

					this.button = $("<button>Save Label</button>").css({ "line-height" : "30px" }).addClass("saveButton").appendTo(this.buttonContainer).on("click", function()
					{
						$(".saveButton").text("Processing...");
						
						self.designer.SetNumOfLabels($(numOfLabelsController).val());
						var zpl = self.designer.generateZPL();
						ZPLStatements=zpl.data+zpl.zpl;
						
						var POSTData={ZPLSourceCode: ZPLStatements}

						$.ajax(
						{
							type: 'POST',
							url: 'ServerSideSoftware/SaveLabel.php',
							data: POSTData,
							dataType: "text",
							
							success: function(serverResponse, status, serverRequest)
							{
								var disp = serverRequest.getResponseHeader('Content-Disposition');
								if(disp && disp.search('attachment') != -1)
								{
									var form = $('<form method="POST" action="' + 'ServerSideSoftware/SaveLabel.php' + '">');
									
									$.each(POSTData, function(k, v) { form.append($('<input type="hidden" name="' + k + '" value="' + v + '">')); });
									$('body').append(form);
									form.submit();
								}
								
								SetHTTPCookie(HTTPCookieITSolZebraIPAddress,topBox.IPAddressController.val(),HTTPCookieExpirationInDays);
								SetHTTPCookie(HTTPCookieITSolZebraPortNumber,topBox.PortNumberController.val(),HTTPCookieExpirationInDays);
								SetHTTPCookie(HTTPCookieITSolZebraLabelResolution,topBox.dpiController.val(),HTTPCookieExpirationInDays);
								
								$(".saveButton").text("Save Label");
							}
						});
					});

					this.update = function()
					{
						this.widthController.val(this.designer.labelWidth / this.designer.dpi);
						this.heightController.val(this.designer.labelHeight / this.designer.dpi);
					}
				}
				
				OpenLabelFile=function(designer)
				{
					var self = this;
					this.designer = designer;
					this.workspace = $("<div></div>").addClass("designerLabelControl3").attr("title", "Click to open a label file!").css({ float : "right" });
					this.buttonContainer = $("<div></div>").appendTo(this.workspace);
					
					var inputContainer = $('<input type="file" style="display: none" id="ZPLFile" name="ZPLFile" />').addClass("inputContainer").appendTo(this.buttonContainer).change(function()
					{
						$(".openButton").text("Processing...");
						
						var inputContainerHandler = inputContainer[0];
						var ZPLFile=inputContainerHandler.files[0];
						var reader = new FileReader();
						var ZPLSourceCode="";
						
						reader.onloadend = function()
						{
							ZPLSourceCode = reader.result;
							canvasDesigner.ClearCanvas();
							ZPL_Interpreter.RunInterpreter(ZPLSourceCode);
							
							$("input#ZPLFile").val("");

							SetHTTPCookie(HTTPCookieITSolZebraIPAddress,topBox.IPAddressController.val(),HTTPCookieExpirationInDays);
							SetHTTPCookie(HTTPCookieITSolZebraPortNumber,topBox.PortNumberController.val(),HTTPCookieExpirationInDays);
							SetHTTPCookie(HTTPCookieITSolZebraLabelResolution,topBox.dpiController.val(),HTTPCookieExpirationInDays);
							
							$(".openButton").text("Open Label");
						};
						
						reader.readAsText(ZPLFile);
					});
					
					this.button = $('<button>Open Label</button>').css({ "line-height" : "30px" }).addClass("openButton").appendTo(this.buttonContainer).on("click", function() { $("input#ZPLFile").trigger("click"); });

					this.update = function()
					{
						this.widthController.val(this.designer.labelWidth / this.designer.dpi);
						this.heightController.val(this.designer.labelHeight / this.designer.dpi);
					}
				}
				
				AddClearCanvasSurfaceButton=function()
				{
					var additionalButtonsDiv=$("<div></div>").addClass("additionalButtonsDiv").attr("title", "Click to clear the canvas surface!").css({ float : "left" }).appendTo($("div#additionalOptions"));
					this.button = $('<button>Clear Surface</button>').css({ "line-height" : "30px" }).addClass("additionalButtons").appendTo(additionalButtonsDiv).on("click", function()
					{
						$(additionalButtonsDiv).fadeTo("slow", 0.15);
						$(additionalButtonsDiv).fadeTo("slow", 1);
						
						canvasDesigner.ClearCanvas();
						canvasDesigner.updateCanvas();
						
						SetHTTPCookie(HTTPCookieITSolZebraIPAddress,topBox.IPAddressController.val(),HTTPCookieExpirationInDays);
						SetHTTPCookie(HTTPCookieITSolZebraPortNumber,topBox.PortNumberController.val(),HTTPCookieExpirationInDays);
						SetHTTPCookie(HTTPCookieITSolZebraLabelResolution,topBox.dpiController.val(),HTTPCookieExpirationInDays);
					});
				}
				
				OpenWinAndPrintLabel=function(designer)
				{
					StartingEscapeSequence="${";
					StopEscapeSequence="}$";
					
					var self = this;
					self.designer.SetNumOfLabels($(numOfLabelsController).val());
					var ZPLStatements = self.designer.generateZPL();
					
					var newWin=window.open("");
					newWin.document.body.innerHTML=StartingEscapeSequence+ZPLStatements.data+ZPLStatements.zpl+StopEscapeSequence;
					newWin.print();
					newWin.close();
					
					self.designer.ClearAllVariableTexts();
					self.designer.updateCanvas();
					
					SetHTTPCookie(HTTPCookieITSolZebraIPAddress,topBox.IPAddressController.val(),HTTPCookieExpirationInDays);
					SetHTTPCookie(HTTPCookieITSolZebraPortNumber,topBox.PortNumberController.val(),HTTPCookieExpirationInDays);
					SetHTTPCookie(HTTPCookieITSolZebraLabelResolution,topBox.dpiController.val(),HTTPCookieExpirationInDays);
				}
				
				AddPrintLabelLocallyButton=function(designer)
				{
					this.designer = designer;
					var additionalButtonsDiv=$("<div></div>").addClass("additionalButtonsDiv").attr("title", "Click to print the label!").css({ float : "left" }).appendTo($("div#additionalOptions"));
					this.button = $('<button id="printL">Choose Printer & Print Label</button>').css({ "line-height" : "30px" }).addClass("additionalButtons").appendTo(additionalButtonsDiv).on("click", function()
					{
						$(additionalButtonsDiv).fadeTo("slow", 0.15);
						$(additionalButtonsDiv).fadeTo("slow", 1);
						
						OpenWinAndPrintLabel(this.designer);
					});
				}
				
				DrawXGImage=function(rawImageData, imageLocationX, imageLocationY, numOfBytes, numOfBytesInRow)
				{
					var nibbleMap =
					{
						"0" : "0000",
						"1" : "0001",
						"2" : "0010",
						"3" : "0011",
						"4" : "0100",
						"5" : "0101",
						"6" : "0110",
						"7" : "0111",
						"8" : "1000",
						"9" : "1001",
						"A" : "1010",
						"B" : "1011",
						"C" : "1100",
						"D" : "1101",
						"E" : "1110",
						"F" : "1111",
					};
					
					var width = numOfBytesInRow*2*4,
						height=(numOfBytes/(numOfBytesInRow*2))*2,
						nibble="",
						currentX=-1,
						currentY=0,
						pixelLength = width * height,
						data,
						nibbleCounter=0;

					data = new Uint8ClampedArray(pixelLength*4);
					
					for(var i=0;i<rawImageData.length;++i)
					{
						++nibbleCounter;
						
						if(nibbleCounter>numOfBytesInRow*2)
						{
							nibbleCounter=1;
							currentX=-1;
							++currentY;
						}
						
						nibble=nibbleMap[rawImageData[i]];
						
						for(var j=0;j<4;++j)
						{
							var point=4 * (width * currentY + (++currentX));
							
							if(nibble[j]=="1")
							{
								data[point]=0;
								data[point+1]=0;
								data[point+2]=0;
								data[point+3]=255;
							}
							else
							{
								data[point]=255;
								data[point+1]=255;
								data[point+2]=255;
								data[point+3]=255;
							}
						}
					}
					
					var newImage=new com.logicpartners.designerTools.image();
					newImage.object(imageLocationX, imageLocationY, width, height, data);
					canvasDesigner.addObject(newImage);
				}
				
				AddNumberOfLabelsOption=function()
				{
					var numOfLabelsContainer = $("<div>Number of labels to print: </div>").addClass("designerLabelControlContainer").appendTo($("div#numOfLabelsContainer"));
					numOfLabelsController = $("<input type=\"text\" />").addClass("designerLabelControlElement").css("cssText", "width: 50px; padding-top: 6px !important;").val("1").appendTo(numOfLabelsContainer);
				}
				
				AddClearCanvasSurfaceButton();
				AddPrintLabelLocallyButton(canvasDesigner);
				AddNumberOfLabelsOption();

				canvasDesigner.labelInspector.addTool(new generatezpl(canvasDesigner));
				canvasDesigner.labelInspector.addTool(new SaveLabelFile(canvasDesigner));
				canvasDesigner.labelInspector.addTool(new OpenLabelFile(canvasDesigner));
				
				canvasDesigner.toolbar.addTool(new com.logicpartners.designerTools.text());
				canvasDesigner.toolbar.addTool(new com.logicpartners.designerTools.variableText());
				canvasDesigner.toolbar.addTool(new com.logicpartners.designerTools.currentDate());
				canvasDesigner.toolbar.addTool(new com.logicpartners.designerTools.counter(numOfLabelsController));
				canvasDesigner.toolbar.addTool(new com.logicpartners.designerTools.rectangle());
				canvasDesigner.toolbar.addTool(new com.logicpartners.designerTools.circle());
				canvasDesigner.toolbar.addTool(new com.logicpartners.designerTools.image());
				canvasDesigner.toolbar.addTool(new com.logicpartners.designerTools.barcode());
				canvasDesigner.toolbar.addTool(new com.logicpartners.designerTools.barcodeEAN8());
				canvasDesigner.toolbar.addTool(new com.logicpartners.designerTools.barcodeEAN13());
				canvasDesigner.toolbar.addTool(new com.logicpartners.designerTools.backgroundColor());
            });
        </script>
    </head>
    <body>
        <div class='container'>
        <canvas id="labelDesigner" tabindex="1" width="800px" height="800" style="margin-left: 100px; margin-top: 50px; border: 1px solid #000000;">
        </canvas>
		
		<div id="additionalOptions"></div>
		<div id="numOfLabelsContainer"></div>
				
		<div id="additionalOptions"></div>
		<div id="numOfLabelsContainer"></div>
		<br><br>
		<div class="btn" id="btn">

			<h3 style="text-align: center;">Alignment</h3>
			<div class='flexRows'>
				<div class='row1'>
					<button id='upLeft'>Top Left</button><br>
					<button id='centerLeft'>Center Left</button><br>
					<button id='bottomLeft'>Bottom Left</button><br>
				</div>
				<div class='row2'>
					<button id='upCenter'>Top Center</button><br>
					<button id='centerCenter'>Center Center</button><br>
					<button id='bottomCenter'>Bottom Center</button><br>
				</div>
				<div class='row3'>
					<button id='upRight'>Top Right</button><br>
					<button id='centerRight'>Center Right</button><br>
					<button id='bottomRight'>Bottom Right</button><br>
				</div>
			</div>
			<h3 style="text-align: center;">Edit style *STILL IN DEVELOPMENT*</h3>
			<button id='bolder'><i class="fas fa-bold"></i></button>
			<button id='italic'><i class="fas fa-italic"></i></button>
			<button id='underline'><i class="fas fa-underline"></i></button>
			<button id='strikethrough'><i class="fas fa-strikethrough"></i></button>
			<button id='subscript'><i class="fas fa-subscript"></i></button>
			<button id='superscript'><i class="fas fa-superscript"></i></button>
			</div>
			</body>
</html>
