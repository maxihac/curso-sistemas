<?php

	$_REQUEST['first_name'];
	$_REQUEST['last_name'];
	
?>

<html>
   <body>      
       <p><?php echo "Hola ". $_REQUEST['last_name'] . ',' . $_REQUEST['first_name'] ?></p>
   </body>
</html>