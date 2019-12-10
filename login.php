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
        // if(empty($_POST["login_nutzername"]) OR empty($_POST["login_passwort"])) {
        //     echo ('Bitte alle Felder ausfüllen');   
        //     die();
        // }

    $username = $_POST["login_nutzername"];
    $password = $_POST["login_passwort"];

    $sql = "SELECT count(*) FROM users WHERE(username='" . $username . "' AND password='" . $password . "')";

    $result = $conn->query($sql);
    $row = $result->fetch_array(MYSQLI_NUM);
    
    if ($row [0] > 0){



        $user_info = "SELECT * from users where username = '" . $username . "'";
        $result_info = $conn->query($user_info);
        $ans =  array("userInfo"=>array());
        
        while($row_info = $result_info ->fetch_assoc()){
            array_push($ans["userInfo"] , $row_info); 
        }
        echo json_encode($ans);
    
    }
    else {
        echo ('nutzername und passwort nicht vorhanden');
    }
}
    // else{
    //     echo('kein nutzername oder passwort gesetzt');  //das ist die fehlermeldung 
    //     die();
    // }



    if(isset($_POST["user_Description"])){
        // if(empty($_POST["user_Description"])) {
        //     // echo ('Bitte alle Felder ausfüllen');   
        //     die();
        // }

    $userDesription = $_POST["user_Description"];

    $sql = "UPDATE users SET beschreibung = '" . $userDesription . "' where id = ";
    $conn->query($sql);

    echo ('Description in DB eingefügt');

    }
        
    // else{
    //     // echo ('false');
    // }



    if(isset($_POST["user_place"])){
        // if(empty($_POST["user_place"])) {
        //     // echo ('Bitte alle Felder ausfüllen');   
        //     die();
        // }

    $userPlace = $_POST["user_place"];

    $sql = "UPDATE users SET wohnort = '" . $userPlace . "'";

    $conn->query($sql);

    echo ('Wohnort in DB eingefügt');

    }

    // else{
    //     // echo ('false');
    // }

      //---verbindung schließen
      $conn->close();
   
?>