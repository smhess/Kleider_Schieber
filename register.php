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



        if(isset($_POST["register_nutzername"]) AND isset($_POST['register_passwort']) AND isset($_POST['register_email']) ){
            // if(empty($_POST["register_nutzername"]) OR empty($_POST["register_passwort"]) OR (empty($_POST["register_email"]) )) {
            //     echo ('Bitte alle Felder ausfüllen');   
            //     die();
            // }
    
        $username = $_POST["register_nutzername"];
        $email = $_POST["register_email"];
        $password = $_POST["register_passwort"];

        $sql = "SELECT count(*) FROM users WHERE(username='" . $username . "')";

        $result = $conn->query($sql);
        $row = $result->fetch_array(MYSQLI_NUM);

        echo $row;
        
        if ($row [0] > 0){
    
            $sql = "INSERT INTO users (username, email, password)
            VALUES ('$username', '$email', '$password')";
        
            $conn->query($sql);
       
            
            $user_info = "SELECT * from users where username = '" . $username . "' and email = '" . $email . "'";
            $result_info = $conn->query($user_info);
            $ans =  array("userInfo"=>array());
            
            while($row_info = $result_info ->fetch_assoc()){
                array_push($ans["userInfo"] , $row_info); 
            }
            // echo json_encode($ans);
        }
        else{
            echo ('NUtzername schon vergeben');
        }
    
        }
            
        else{
            echo ('Nutzername und passwort nicht gesetzt');
        }
    
?>