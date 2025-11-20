<?php
$ip = $_SERVER['REMOTE_ADDR'];
$agent = $_SERVER['HTTP_USER_AGENT'];
$time = date("Y-m-d H:i:s");

$conn = new mysqli("localhost", "root", "", "website_visitors");

$sql = "INSERT INTO visitors (ip_address, user_agent, visit_time) 
        VALUES ('$ip', '$agent', '$time')";
$conn->query($sql);
?>