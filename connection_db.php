<?php

    //Connection Parameters
    $dbhost = "127.0.0.1";
    $dbuser = "root";
    $dbpass = "";
    $db = "kleider_schieber_projekt";

    //Create Connection 
     $conn = new mysqli($dbhost, $dbuser, $dbpass, $db);
     
    //Check Connection
    if ($conn->connect_error){
        die("Connection failed: ". $conn->connect_error);
    }
        echo "Connected successfully";
?>