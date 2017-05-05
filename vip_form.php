<?php

$renter_name = $_POST['renter_name'];
$renter_phone = $_POST['renter_phone'];
$renter_email = $_POST['renter_email'];
$renter_date = $_POST['renter_date'];
$renter_drink = $_POST['renter_drink'];
$renter_ref = $_POST['renter_ref'];
$renter_message = $_POST['renter_message'];
$to = 'vip@necto.com';
$subject = 'VIP Request: ' . $renter_name;

$message =
'NAME: ' . $renter_name . "\n" . 'PHONE: ' . $renter_phone . "\n" . 'EMAIL: ' . $renter_email . "\n" . 'DATE: ' . $renter_date . "\n" . 'DRINK: ' . $renter_drink . "\n" . 'REF: ' . $renter_ref . "\n" . 'MESSAGE: ' . $renter_message;

mail ($to, $subject, $message, 'From: ' . $renter_email);
header("Location: https://www.necto.com/bottle-service-and-reservation-thank-you.html");

?>