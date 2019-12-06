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
        // echo "Connected successfully";

    if(isset($_POST["login_nutzername"]) AND isset($_POST['login_passwort']) ){
        if(empty($_POST["login_nutzername"]) OR empty($_POST["login_passwort"]) )) {
            // echo ('Bitte alle Felder ausfüllen');   
            die();
        }


    $username = $_POST["login_nutzername"];
    $password = $_POST["login_passwort"];

    $sql = "SELECT count(*) FROM users WHERE(username='$username' AND password='$password')";

    $result = $conn->query($sql);

    $row = $result->fetch_array(MYSQLI_NUM);
    
    if ($row [0] > 0){
        echo ('Werte in DB vorhanden');
    }
    else {
        // echo ('false');
    }
    //---verbindung schließen
    // $conn->close();
    
    // die();
    
    }
    
    else{
    
        // echo("zuordnung projekte oder mail id nicht gesetzt");
    }

    if(isset($_POST["register_nutzername"]) AND isset($_POST['register_passwort']) AND isset($_POST['register_email']) ){
        if(empty($_POST["register_nutzername"]) OR empty($_POST["register_passwort"]) OR (empty($_POST["register_email"]) )) {
            // echo ('Bitte alle Felder ausfüllen');   
            die();
        }

    $username = $_POST["register_nutzername"];
    $email = $_POST["register_email"];
    $password = $_POST["register_passwort"];

    $sql = "INSERT INTO users (username, email, password)
    VALUES ('$username', '$email', '$password')";

    $conn->query($sql);

    echo ('Werte in DB eingefügt');

    }
        
    else{
        // echo ('false');
    }

    if(isset($_POST["user_Description"])){
        if(empty($_POST["user_Description"]))) {
            // echo ('Bitte alle Felder ausfüllen');   
            die();
        }

    $userDesription = $_POST["user_Description"];

    $sql = "UPDATE users SET beschreibung = $userDesription";
    $conn->query($sql);

    echo ('Description in DB eingefügt');

    }
        
    else{
        // echo ('false');
    }

    if(isset($_POST["user_place"])){
        if(empty($_POST["user_place"]))) {
            // echo ('Bitte alle Felder ausfüllen');   
            die();
        }

    $userPlace = $_POST["user_place"];

    $sql = "UPDATE users SET wohnort = $userPlace";

    $conn->query($sql);

    echo ('Wohnort in DB eingefügt');

    }
        
    else{
        // echo ('false');
    }



   
?>