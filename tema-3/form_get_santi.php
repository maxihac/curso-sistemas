<?php

	$_REQUEST['name'];
	$_REQUEST['surname'];
	$_REQUEST['email'];
	$_REQUEST['population'];
	$_REQUEST['province'];
	$_REQUEST['age'];
	$_REQUEST['recomendation1'];
	$_REQUEST['recomendation2'];
	$_REQUEST['recomendation3'];
	$_REQUEST['recomendation4'];
	$_REQUEST['opinion'];
	$_REQUEST['sugerence'];
	$_REQUEST['timeforday'];
   
?>

<html>
   <body>      
       <p><?php echo "Hola ". $_REQUEST['surname'] . ',' . $_REQUEST['name'] ?></p>
   </body>
</html>