<!--  This code will execute when form method is set to POST  -->
<?php

$fname = $_POST['fname'];
$lname = $_POST['lname'];
echo "<span class='success'>Form Submitted By <b>POST METHOD</b></span><br/>";
echo "First Name : ".$fname."<br/>Last Name : ".$lname;
?>
<!--  This code will execute when form method is set to GET  -->
