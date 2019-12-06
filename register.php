<?php
    include_once('connection_db.php');


    $username = $_POST["username_new"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    //Dummy: echo $username;
    //Dummy: echo $email;
    //Dummy: echo $password;

    $sql = "INSERT INTO users (username, email, password)
            VALUES ('$username', '$email', '$password')";

    $conn->query($sql);

    //Dummy check Inserting
    /*if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } 
    else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }*/

?>