<?php
    include_once('connection_db.php');

    $username = $_POST["username"];
    $password = $_POST["password"];

    $sql = "SELECT count(*) FROM users WHERE(username='$username' AND password='$password')";

    $result = $conn->query($sql);

    $row = $result->fetch_array(MYSQLI_NUM);
    
    if ($row [0] > 0){
        echo "Login Successful";
    }
    else {
        echo "Failed Login";
    }
?>