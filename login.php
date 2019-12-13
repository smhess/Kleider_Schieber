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

        //$user_info = "SELECT * from users where username = '" . $username . "' and password = '" . $password . "'";
        $user_info = 
        "SELECT klamotten.id as klamotten_id, klamotten.oberteil, klamotten.unterteil, klamotten.schuhe, klamotten.asse_tasche, 
        klamotten.beschreibung as klamotten_beschreibung, klamotten.bild as klamotten_bild,
        klamotten.preis, klamotten.id_user, klamotten.size, users.id as users_id, users.username, users.email,
        users.password, users.beschreibung as users_beschreibung, users.bild as users_bild, users.wohnort
        
        from (select * from klamotten_damen UNION select * from klamotten_herren UNION select * from klamotten_kinder) 
        as klamotten right join users on klamotten.id_user = users.id where users.username = '" . $username . "' and password = '" . $password . "'";

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

                    $sql = "SELECT * from klamotten_damen";
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

                //WOMAN-OBERTEILE
                if($gender == 'woman' and $auswahl == 'oberteile'){

                    $sql = "SELECT * from klamotten_damen where oberteil = 1";
                    $result_info = 
                    $conn->query($sql);
                    
                    $woman_oberteil =  array("woman_oberteil"=>array());
                    
                    while($row_info = $result_info ->fetch_assoc()){
                        array_push($woman_oberteil["woman_oberteil"] , $row_info); 
                    }
                    echo json_encode($woman_oberteil);
                }

                else{

                }

                //WOMAN-UNTERTEILE
                if($gender == 'woman' and $auswahl == 'unterteile'){

                    $sql = "SELECT * from klamotten_damen where unterteil = 1";
                    $result_info = 
                    $conn->query($sql);
                    
                    $woman_unterteil =  array("woman_unterteil"=>array());
                    
                    while($row_info = $result_info ->fetch_assoc()){
                        array_push($woman_unterteil["woman_unterteil"] , $row_info); 
                    }
                    echo json_encode($woman_unterteil);
                }

                else{

                }

                //WOMAN-SCHUHE
                if($gender == 'woman' and $auswahl == 'schuhe'){

                    $sql = "SELECT * from klamotten_damen where schuhe = 1";
                    $result_info = 
                    $conn->query($sql);
                    
                    $woman_schuhe =  array("woman_schuhe"=>array());
                    
                    while($row_info = $result_info ->fetch_assoc()){
                        array_push($woman_schuhe["woman_schuhe"] , $row_info); 
                    }
                    echo json_encode($woman_schuhe);
                }

                else{

                }

                //WOMAN-ASSE/TASCHEN
                if($gender == 'woman' and $auswahl == 'accesoirstaschen'){

                    $sql = "SELECT * from klamotten_damen where asse_tasche = 1";
                    $result_info = 
                    $conn->query($sql);
                    
                    $woman_assetasche =  array("woman_assetasche"=>array());
                    
                    while($row_info = $result_info ->fetch_assoc()){
                        array_push($woman_assetasche["woman_assetasche"] , $row_info); 
                    }
                    echo json_encode($woman_assetasche);
                }

                else{

                }


 //Category: MEN

                //MEN-ALL
                if($gender == 'men' and $auswahl == 'allesanzeigen'){

                    $sql = "SELECT * from klamotten_herren";
                    $result_info = 
                    $conn->query($sql);
                    
                    $men_all =  array("men_all"=>array());
                    
                    while($row_info = $result_info ->fetch_assoc()){
                        array_push($men_all["men_all"] , $row_info); 
                    }
                    echo json_encode($men_all);
                }

                //MEN-OBERTEILE
                if($gender == 'men' and $auswahl == 'oberteile'){

                    $sql = "SELECT * from klamotten_herren where oberteil = 1";
                    $result_info = 
                    $conn->query($sql);
                    
                    $men_oberteile =  array("men_oberteile"=>array());
                    
                    while($row_info = $result_info ->fetch_assoc()){
                        array_push($men_oberteile["men_oberteile"] , $row_info); 
                    }
                    echo json_encode($men_oberteile);
                }

                //MEN-UNTERTEILE
                if($gender == 'men' and $auswahl == 'unterteile'){

                    $sql = "SELECT * from klamotten_herren where unterteil = 1";
                    $result_info = 
                    $conn->query($sql);
                    
                    $men_unterteile =  array("men_unterteile"=>array());
                    
                    while($row_info = $result_info ->fetch_assoc()){
                        array_push($men_unterteile["men_unterteile"] , $row_info); 
                    }
                    echo json_encode($men_unterteile);
                }

                //MEN-SCHUHE
                if($gender == 'men' and $auswahl == 'schuhe'){

                    $sql = "SELECT * from klamotten_herren where schuhe = 1";
                    $result_info = 
                    $conn->query($sql);
                    
                    $men_schuhe =  array("men_schuhe"=>array());
                    
                    while($row_info = $result_info ->fetch_assoc()){
                        array_push($men_schuhe["men_schuhe"] , $row_info); 
                    }
                    echo json_encode($men_schuhe);
                }

                //MEN-ASSE/TASCHEN
                if($gender == 'men' and $auswahl == 'accesoirstaschen'){

                    $sql = "SELECT * from klamotten_herren where asse_tasche = 1";
                    $result_info = 
                    $conn->query($sql);
                    
                    $men_assetasche =  array("men_assetasche"=>array());
                    
                    while($row_info = $result_info ->fetch_assoc()){
                        array_push($men_assetasche["men_assetasche"] , $row_info); 
                    }
                    echo json_encode($men_assetasche);
                }



  //Category: CHILD

            //CHILD-ALL
            if($gender == 'child' and $auswahl == 'allesanzeigen'){

                $sql = "SELECT * from klamotten_kinder";
                $result_info = 
                $conn->query($sql);
                
                $child_all =  array("child_all"=>array());
                
                while($row_info = $result_info ->fetch_assoc()){
                    array_push($child_all["child_all"] , $row_info); 
                }
                echo json_encode($child_all);
            }

            //CHILD-OBERTEILE
            if($gender == 'child' and $auswahl == 'oberteile'){

                $sql = "SELECT * from klamotten_kinder where oberteil = 1";
                $result_info = 
                $conn->query($sql);
                
                $child_oberteile =  array("child_oberteile"=>array());
                
                while($row_info = $result_info ->fetch_assoc()){
                    array_push($child_oberteile["child_oberteile"] , $row_info); 
                }
                echo json_encode($child_oberteile);
            }

            //CHILD-UNTERTEILE
            if($gender == 'child' and $auswahl == 'unterteile'){

                $sql = "SELECT * from klamotten_kinder where unterteil = 1";
                $result_info = 
                $conn->query($sql);
                
                $child_unterteile =  array("child_unterteile"=>array());
                
                while($row_info = $result_info ->fetch_assoc()){
                    array_push($child_unterteile["child_unterteile"] , $row_info); 
                }
                echo json_encode($child_unterteile);
            }

            //CHILD-SCHUHE
            if($gender == 'child' and $auswahl == 'schuhe'){

                $sql = "SELECT * from klamotten_kinder where schuhe = 1";
                $result_info = 
                $conn->query($sql);
                
                $child_schuhe =  array("child_schuhe"=>array());
                
                while($row_info = $result_info ->fetch_assoc()){
                    array_push($child_schuhe["child_schuhe"] , $row_info); 
                }
                echo json_encode($child_schuhe);
            }

            //CHILD-ASSE/TASCHEN
            if($gender == 'child' and $auswahl == 'accesoirstaschen'){

                $sql = "SELECT * from klamotten_kinder where asse_tasche = 1";
                $result_info = 
                $conn->query($sql);
                
                $child_assetasche =  array("child_assetasche"=>array());
                
                while($row_info = $result_info ->fetch_assoc()){
                    array_push($child_assetasche["child_assetasche"] , $row_info); 
                }
                echo json_encode($child_assetasche);
            }





    }

    // if(isset($_POST["gender"]) AND isset($_POST["auswahl"])){
    //         $gender = $_POST["gender"];
    //         $auswahl = $_POST["auswahl"];

               

    // }
    

//     if(isset($_POST["gender"]) AND isset($_POST["auswahl"])){
//         $gender = $_POST["gender"];
//         $auswahl = $_POST["auswahl"];

          
// }


if(isset($_POST["user_id"]) AND
isset($_POST["Kleider_größe"]) AND isset($_POST["Kleider_preis"]) AND
isset($_POST["Kleider_beschreibung"]) AND isset($_POST["Kleider_kategorie"]) AND
isset($_POST["Kleider_gender"]) AND isset($_POST["Kleider_profilbild"])){

    $user_id = $_POST["user_id"];
    $kleider_profilbild = $_POST["Kleider_profilbild"];
    $kleider_groesse = $_POST["Kleider_größe"];
    $kleider_preis = $_POST["Kleider_preis"];
    $kleider_beschreibung = $_POST["Kleider_beschreibung"];
    $kleider_kategorie = $_POST["Kleider_kategorie"];
    $kleider_gender = $_POST["Kleider_gender"];

    if ($kleider_gender == 'Frauen'){

        if($kleider_kategorie == 'Oberteile'){
            $sql = "INSERT INTO klamotten_damen (oberteil, unterteil, schuhe, asse_tasche, beschreibung,
            bild, preis, id_user, size) VALUES (1,0,0,0,'$kleider_beschreibung', '$kleider_profilbild',
            '$kleider_preis', '$user_id', '$kleider_groesse')";
             
            $conn->query($sql);
            echo 'Frauen Oberteil in die Datenbank eingefügt';
        }

        elseif($kleider_kategorie == 'Unterteile'){
            $sql = "INSERT INTO klamotten_damen (oberteil, unterteil, schuhe, asse_tasche, beschreibung,
            bild, preis, id_user, size) VALUES (0,1,0,0,'$kleider_beschreibung', '$kleider_profilbild',
            '$kleider_preis', '$user_id', '$kleider_groesse')";
             
            $conn->query($sql);
            echo 'Frauen Unterteil in die Datenbank eingefügt';
        }

        elseif($kleider_kategorie == 'Schuhe'){
            $sql = "INSERT INTO klamotten_damen (oberteil, unterteil, schuhe, asse_tasche, beschreibung,
            bild, preis, id_user, size) VALUES (0,0,1,0,'$kleider_beschreibung', '$kleider_profilbild',
            '$kleider_preis', '$user_id', '$kleider_groesse')";
             
            $conn->query($sql);
            echo 'Frauen Schuh in die Datenbank eingefügt';
        }

        elseif($kleider_kategorie == 'Accesoirs & Taschen'){
            $sql = "INSERT INTO klamotten_damen (oberteil, unterteil, schuhe, asse_tasche, beschreibung,
            bild, preis, id_user, size) VALUES (0,0,0,1,'$kleider_beschreibung', '$kleider_profilbild',
            '$kleider_preis', '$user_id', '$kleider_groesse')";
             
            $conn->query($sql);
            echo 'Frauen Accesoir & Tasche in die Datenbank eingefügt';
        }

        else{}
    }

    elseif($kleider_gender == 'Männer'){

        if($kleider_kategorie == 'Oberteile'){
            $sql = "INSERT INTO klamotten_herren (oberteil, unterteil, schuhe, asse_tasche, beschreibung,
            bild, preis, id_user, size) VALUES (1,0,0,0,'$kleider_beschreibung', '$kleider_profilbild',
            '$kleider_preis', '$user_id', '$kleider_groesse')";
             
            $conn->query($sql);
            echo 'Männer Oberteil in die Datenbank eingefügt';
        }

        elseif($kleider_kategorie == 'Unterteile'){
            $sql = "INSERT INTO klamotten_herren (oberteil, unterteil, schuhe, asse_tasche, beschreibung,
            bild, preis, id_user, size) VALUES (0,1,0,0,'$kleider_beschreibung', '$kleider_profilbild',
            '$kleider_preis', '$user_id', '$kleider_groesse')";
             
            $conn->query($sql);
            echo 'Männer Unterteil in die Datenbank eingefügt';
        }

        elseif($kleider_kategorie == 'Schuhe'){
            $sql = "INSERT INTO klamotten_herren (oberteil, unterteil, schuhe, asse_tasche, beschreibung,
            bild, preis, id_user, size) VALUES (0,0,1,0,'$kleider_beschreibung', '$kleider_profilbild',
            '$kleider_preis', '$user_id', '$kleider_groesse')";
             
            $conn->query($sql);
            echo 'Männer Schuh in die Datenbank eingefügt';
        }

        elseif($kleider_kategorie == 'Accesoirs & Taschen'){
            $sql = "INSERT INTO klamotten_herren (oberteil, unterteil, schuhe, asse_tasche, beschreibung,
            bild, preis, id_user, size) VALUES (0,0,0,1,'$kleider_beschreibung', '$kleider_profilbild',
            '$kleider_preis', '$user_id', '$kleider_groesse')";
             
            $conn->query($sql);
            echo 'Männer Accesoir & Tasche in die Datenbank eingefügt';
        }

        else{}
    } 

    elseif($kleider_gender == 'Kinder'){

        if($kleider_kategorie == 'Oberteile'){
            $sql = "INSERT INTO klamotten_kinder (oberteil, unterteil, schuhe, asse_tasche, beschreibung,
            bild, preis, id_user, size) VALUES (1,0,0,0,'$kleider_beschreibung', '$kleider_profilbild',
            '$kleider_preis', '$user_id', '$kleider_groesse')";
             
            $conn->query($sql);
            echo 'Kinder Oberteil in die Datenbank eingefügt';
        }

        elseif($kleider_kategorie == 'Unterteile'){
            $sql = "INSERT INTO klamotten_kinder (oberteil, unterteil, schuhe, asse_tasche, beschreibung,
            bild, preis, id_user, size) VALUES (0,1,0,0,'$kleider_beschreibung', '$kleider_profilbild',
            '$kleider_preis', '$user_id', '$kleider_groesse')";
             
            $conn->query($sql);
            echo 'Kinder Unterteil in die Datenbank eingefügt';
        }

        elseif($kleider_kategorie == 'Schuhe'){
            $sql = "INSERT INTO klamotten_kinder (oberteil, unterteil, schuhe, asse_tasche, beschreibung,
            bild, preis, id_user, size) VALUES (0,0,1,0,'$kleider_beschreibung', '$kleider_profilbild',
            '$kleider_preis', '$user_id', '$kleider_groesse')";
             
            $conn->query($sql);
            echo 'Kinder Schuh in die Datenbank eingefügt';
        }

        elseif($kleider_kategorie == 'Accesoirs & Taschen'){
            $sql = "INSERT INTO klamotten_kinder (oberteil, unterteil, schuhe, asse_tasche, beschreibung,
            bild, preis, id_user, size) VALUES (0,0,0,1,'$kleider_beschreibung', '$kleider_profilbild',
            '$kleider_preis', '$user_id', '$kleider_groesse')";
             
            $conn->query($sql);
            echo 'Kinder Accesoir & Tasche in die Datenbank eingefügt';
        }

        else{}
    }

    else{}
}
else{}

    //Profilbild-User hinzufügen
if(isset($_POST["user_id"]) AND isset($_POST["user_Profilbild"])){
    $user_id = $_POST["user_id"];
    $user_Profilbild = $_POST["user_Profilbild"];

    $sql = "UPDATE users SET bild = '" . $user_Profilbild . "' where id = '" . $user_id . "'";
    $conn->query($sql);
    echo 'Profilbild-User eingefügt!';
}
else{}

      //---verbindung schließen
      $conn->close();
   
?>