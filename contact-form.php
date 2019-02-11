<?php

if (isset)$_POST['submit'])){
	$name = $_POST['name'];
	$emailFrom = $_POST['email'];
	$number = $_POST['number'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	$mailTo = "shivilsach@gmail.com"
	$headers = "From: ".$emailFrom
	$txt = "You have recieved an e-mail from ".$name.".\n\n".$message;

	mail($mailTo, $subject, $txt, $headers);
	header("Location: index.php?mailsend");
}
