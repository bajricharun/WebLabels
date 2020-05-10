<?php
error_reporting(E_ERROR | E_PARSE);

function SendStringToPrinter($IPv4Address, $netPort, $ZPLStatements)
{
	try { $fp = fsockopen($IPv4Address, $netPort, $errno, $errstr, 10); }
	catch(Exception $exception) {}

	if(!$fp) return "$errstr ($errno).";
	else
	{
		fwrite($fp, $ZPLStatements);
		fclose($fp);
	}
	
	return null;
}

if($_POST["IPv4Address"] || $_POST["printerPortNumber"] || $_POST["ZPLStatements"]) echo SendStringToPrinter($_POST["IPv4Address"],$_POST["printerPortNumber"],$_POST["ZPLStatements"]);
?>