<?php
$user = $_POST['user'];
$password = $_POST['pass'];

echo json_encode('You are : '.$user.', Your password: '.$password);
// echo json_encode('Request from PHP');
?>