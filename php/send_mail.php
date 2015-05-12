<?php

// Make the include path include his home directory.
ini_set("include_path", '/home/danieldafoe/php:' . ini_get("include_path") );
include('Mail.php');

$email = $message = "";

// If the email field is filled out...
$email = $_POST["email"];
$message = $_POST["msg"];

$mail = Mail::factory("mail");

$headers = array("From"=>$name, "Subject"=>"Contact Submission");
$body = "From: " . $email . "\nMessage: " . $message;
$mail->send("hello@danieldafoe.com", $headers, $body);

header("Location: ../");

?>