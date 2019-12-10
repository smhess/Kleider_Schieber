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

    $countuser = 0;

    $sql = "SELECT count(*) FROM users WHERE(username='" . $username . "')";
    $result_counting = $conn->query($sql);

    while ($array_verify_user = $result_counting->fetch_assoc()){
        $countuser = $array_verify_user["count(*)"];
        // echo json_encode($array_verify_user);
    }

    // echo $countuser;
    
    if ($countuser == '1'){

        $user_info = "SELECT * from users where username = '" . $username . "' and password = '" . $password . "'";
        $result_info = $conn->query($user_info);
        $ans =  array("userInfo"=>array());
        
        while($row_info = $result_info ->fetch_assoc()){
            array_push($ans["userInfo"] , $row_info); 
        }
         echo json_encode($ans);
   
    }
    
}
    // else{
    //     echo('kein nutzername oder passwort gesetzt');  //das ist die fehlermeldung 
    //     die();
    // }



                if(isset($_POST["user_Description"]) AND isset($_POST["user_id"])){
                     //if(empty($_POST["user_Description"]) AND empty($_POST["user_id"])) {
                     //     echo ('Bitte alle Felder ausfüllen');   
                     //    die();
                     //}

                $userDesription = $_POST["user_Description"];
                $user_id = $_POST["user_id"];

                $sql = "UPDATE users SET beschreibung = '" . $userDesription . "' where id = '" . $user_id . "'";
                $conn->query($sql);

                echo ('Description in DB eingefügt');

                }
                    
    // else{
    //     // echo ('false');
    // }



            if(isset($_POST["user_place"]) AND isset($_POST["user_id"])){
                //if(empty($_POST["user_place"]) AND empty($_POST["user_id"]) {
                //   echo ('Bitte alle Felder ausfüllen');   
                //   die();
                //}

            $userPlace = $_POST["user_place"];
            $user_id = $_POST["user_id"];

            $sql = "UPDATE users SET wohnort = '" . $userPlace . "' where id = '" . $user_id . "'";

            $conn->query($sql);

            echo ('Wohnort in DB eingefügt');

            }

    // else{
    //     // echo ('false');
    // }
    
    
    
    if(isset($_POST["gender"]) AND isset($_POST["auswahl"])){
                $gender = $_POST["gender"];
                $auswahl = $_POST["auswahl"];
                
                //Category: WOMAN
                    
                //WOMAN-ALL
                
                if($gender == 'woman' and $auswahl == 'allesanzeigen'){

                    $sql = "SELECT beschreibung from klamotten_damen where id = 1";
                    $result_info = 
                    $conn->query($sql);
                    
                    $woman_all =  array("woman_all"=>array());
                    
                    while($row_info = $result_info ->fetch_assoc()){
                        array_push($woman_all["woman_all"] , $row_info); 
                    }
                    echo json_encode($woman_all);
                }

                else{

                }

            }



      //---verbindung schließen
      $conn->close();
   
?>