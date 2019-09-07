<?php

$renter_name = $_POST['renter_name'];
$renter_phone = $_POST['renter_phone'];
$renter_email = $_POST['renter_email'];
$renter_acquisition = $_POST['renter_acquisition'];
$renter_message = $_POST['renter_message'];
$to = 'booking@necto.com';
$subject = 'PRIVATE EVENT Request: ' . $renter_name;

$message =
'NAME: ' . $renter_name . "\n" . 'PHONE: ' . $renter_phone . "\n" . 'EMAIL: ' . $renter_email . "\n" . 'MESSAGE: ' . $renter_message . "\n" . 'ACQUISITION: ' . $renter_acquisition ;

mail ($to, $subject, $message, 'From: ' . $renter_email);
header("Location: https://www.necto.com/private-event-thank-you.html");

?>