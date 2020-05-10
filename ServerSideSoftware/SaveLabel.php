<?php
error_reporting(E_ERROR | E_PARSE);

if(isset($_POST["ZPLSourceCode"]))
{
	$file="";
	$file="Label_".rand()."".rand().".zpl";
	file_put_contents($file, $_POST["ZPLSourceCode"]);

	if(file_exists($file))
	{
		header('Content-Description: File Transfer');
		header('Content-Type: application/octet-stream');
		header('Content-Disposition: attachment; filename="'.basename($file).'"');
		header('Expires: 0');
		header('Cache-Control: must-revalidate');
		header('Pragma: public');
		header('Content-Length: ' . filesize($file));
		
		readfile($file);
		unlink($file);

		exit;
	}
}
?>