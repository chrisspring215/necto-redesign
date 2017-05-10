<?php

$fName = $_POST['fName'];
$lName = $_POST['lName'];
$eMail = $_POST['eMail'];
$numberwrong = $_POST['numberwrong'];
$signupEmail = $_POST['signupEmail'];

$to = 'nickd@Necto.com';
$subject = 'Movement ‘17 Contest Submission: ' . $numberwrong . " " . $fullName;

$message =
'NAME: ' . $fName . " " . $lName . "\n" .'EMAIL: ' . $eMail . "\n" .'NUMBER CORRECT: ' . $numberwrong . "\n" .'ADD TO MAILING LIST: ' . $signupEmail;

mail ($to, $subject, $message, 'From: ' . $eMail);
header("Location: https://www.necto.com/contests/movement-2017-contest-thank-you.html");

?>