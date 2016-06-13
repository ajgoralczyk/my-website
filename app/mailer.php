<?php

if(!isset($_POST['submit'])) {
  echo "error";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

if(empty($name)||empty($visitor_email)||empty($message)) {
  echo "error";
  exit;
}

$email_from="website.message@ajgoralczyk.com";
$email_subject = "New message from $name";
$email_body = "Message from $name (email: $visitor_email): \n$message";
$to = "agnes@ajgoralczyk.com";
$headers = "From: $email_from";
mail($to, $email_subject, $email_body, $headers);