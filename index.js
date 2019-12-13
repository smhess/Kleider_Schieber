
$(document).ready(function () {

    var nutzername = '';
    var passwort;
    var email = '';
    var wohnort = '';
    var profilbild = '';
    var userID = '';


    $('body').click(function (evt) {
        console.log('body geklickt');

        if (evt.target.class == "genderSelected")
            return;
        //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
        if ($(evt.target).closest('.genderSelected').length)
            return;
        else {
            $('.genderSelected').hide();
            $('#MainPart').css('filter', 'blur(0px)');
            $('.gender').css('color', 'var(--grey-tone)');
        }
        //Do processing of click event here for every element except with id menu_content
    });

    $('#searchArticle').on('input', function (e) {
        console.log($(e.target).val().length);
        console.log($(e.target).val());
        if ($(e.target).val().length == 0) {
            console.log('nichts eingegeben')
        } else {
            console.log('etwas eingegeben');
        }
    });

    $(document).on('click', '#kleiderSchieber', function(event){
        $('#mitte').siblings().hide();
        $('#mitte').show();
    })

    $(document).on("click", '#registrierenLogin', function (event) {
        $('#MainPart').css('filter', 'blur(2px)');
        $('#LoginRegistrationPlugin').show();
        $('#LoginRegistrationPlugin').css('filter', 'blur(0px)');
    });

    $(document).on('click', '.CloseRegistrationLogin', function (event) {
        $('#LoginRegistrationPlugin').hide();
        $('#mitte').css('filter', 'blur(0px)');
    });

    $(document).on("click", '#aboutKleiderSchieberButton', function (event) {
        $('#AboutKleiderSchieber').siblings().hide();
        $('#AboutKleiderSchieber').show();
    });
    $(document).on("click", '.gender', function (event) {
        $('#MainPart').css('filter', 'blur(2px)');
    });
    // $(document).on("click", '.genderItemSelected', function (event) {
    //     $('#KleiderAnzeige').html('');
    // });

    $(document).on('click', '#woman', function (event) {

        // $('#KleiderAnzeige').empty();

        $('.AllesAnzeigen').attr('id', 'AllesAnzeigenWoman');
        $('.Oberteile').attr('id', 'OberteileWoman');
        $('.Unterteile').attr('id', 'UnterteileWoman');
        $('.Schuhe').attr('id', 'SchuheWoman');
        $('.AccesoirsTaschen').attr('id', 'AccessoirsWoman');

        $('#woman').css('color', 'var(--bg-colorTone)');
        $('#men').css('color', 'var(--grey-tone)');
        $('#child').css('color', 'var(--grey-tone)');
        $('.genderSelected').show();
  
    });


    $(document).on('click', '#AllesAnzeigenWoman', function (event) {
        $('#KleiderAnzeige').empty();
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
            gender : 'woman',
            auswahl : 'allesanzeigen'
            },
            success: function (msg) {
                msg = JSON.parse(msg);
                console.log(msg);

                KleiderAnzeige(msg.woman_all);
            },
            error: function (eins, zwei, err) {
                console.log(eins + " " + zwei + " " + err)
            }
        });
    });
    $(document).on('click', '#OberteileWoman', function (event) {
        $('#KleiderAnzeige').empty();
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
                gender : 'woman',
                auswahl : 'oberteile'
            },
            success: function (msg) {
                msg = JSON.parse(msg);
                console.log(msg);
                KleiderAnzeige(msg.woman_oberteil);
            },
            error: function (eins, zwei, err) {
                console.log(eins + " " + zwei + " " + err)
            }
        });
    });
    $(document).on('click', '#UnterteileWoman', function (event) {
        $('#KleiderAnzeige').empty();
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
                gender : 'woman',
                auswahl : 'unterteile'
            },
            success: function (msg) {
                msg = JSON.parse(msg);
                console.log(msg);
                KleiderAnzeige(msg.woman_unterteil);
            },
            error: function (eins, zwei, err) {
                console.log(eins + " " + zwei + " " + err)
            }
        });
    });
    $(document).on('click', '#SchuheWoman', function (event) {
        $('#KleiderAnzeige').empty();
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
                gender : 'woman',
                auswahl : 'schuhe'
            },
            success: function (msg) {
                msg = JSON.parse(msg);
                console.log(msg);
                KleiderAnzeige(msg.woman_schuhe);
            },
            error: function (eins, zwei, err) {
                console.log(eins + " " + zwei + " " + err)
            }
        });
    });
    $(document).on('click', '#AccessoirsWoman', function (event) {
        $('#KleiderAnzeige').empty();
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
                gender : 'woman',
                auswahl : 'accesoirstaschen'
            },
            success: function (msg) {
                msg = JSON.parse(msg);
                console.log(msg);
                KleiderAnzeige(msg.woman_assetasche);
            },
            error: function (eins, zwei, err) {
                console.log(eins + " " + zwei + " " + err)
            }
        });
    });



    $(document).on('click', '#men', function (event) {

        $('#men').css('color', 'var(--bg-colorTone)');
        $('#child').css('color', 'var(--grey-tone)');
        $('#woman').css('color', 'var(--grey-tone)');
        $('.genderSelected').show();

        $('.AllesAnzeigen').attr('id', 'AllesAnzeigenMen');
        $('.Oberteile').attr('id', 'OberteileMen');
        $('.Unterteile').attr('id', 'UnterteileMen');
        $('.Schuhe').attr('id', 'SchuheMen');
        $('.AccesoirsTaschen').attr('id', 'AccessoirsMen');
    });


    $(document).on('click', '#AllesAnzeigenMen', function (event) {
        $('#KleiderAnzeige').empty();
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
            gender : 'men',
            auswahl : 'allesanzeigen'
            },
            success: function (msg) {
                msg = JSON.parse(msg);
                console.log(msg);
                KleiderAnzeige(msg.men_all);
            },
            error: function (eins, zwei, err) {
                console.log(eins + " " + zwei + " " + err)
            }
        });
    });
    $(document).on('click', '#OberteileMen', function (event) {
        $('#KleiderAnzeige').empty();
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
            gender : 'men',
            auswahl : 'oberteile'
            },
            success: function (msg) {
                msg = JSON.parse(msg);
                console.log(msg);
                KleiderAnzeige(msg.men_oberteile);
            },
            error: function (eins, zwei, err) {
                console.log(eins + " " + zwei + " " + err)
            }
        });
    });
    $(document).on('click', '#UnterteileMen', function (event) {
        $('#KleiderAnzeige').empty();
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
            gender : 'men',
            auswahl : 'unterteile'
            },
            success: function (msg) {
                msg = JSON.parse(msg);
                console.log(msg);
                KleiderAnzeige(msg.men_unterteile);
            },
            error: function (eins, zwei, err) {
                console.log(eins + " " + zwei + " " + err)
            }
        });
    });
    $(document).on('click', '#SchuheMen', function (event) {
        $('#KleiderAnzeige').empty();
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
            gender : 'men',
            auswahl : 'schuhe'
            },
            success: function (msg) {
                msg = JSON.parse(msg);
                console.log(msg);
                KleiderAnzeige(msg.men_schuhe);
            },
            error: function (eins, zwei, err) {
                console.log(eins + " " + zwei + " " + err)
            }
        });
    });
    $(document).on('click', '#AccessoirsMen', function (event) {
        $('#KleiderAnzeige').empty();
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
            gender : 'men',
            auswahl : 'accesoirstaschen'
            },
            success: function (msg) {
                msg = JSON.parse(msg);
                console.log(msg);
                KleiderAnzeige(msg.men_assetasche);
            },
            error: function (eins, zwei, err) {
                console.log(eins + " " + zwei + " " + err)
            }
        });
    });


    $(document).on('click', '#child', function (event) {

        $('.AllesAnzeigen').attr('id', 'AllesAnzeigenChild');
        $('.Oberteile').attr('id', 'OberteileChild');
        $('.Unterteile').attr('id', 'UnterteileChild');
        $('.Schuhe').attr('id', 'SchuheChild');
        $('.AccesoirsTaschen').attr('id', 'AccessoirsChild');

        $('#child').css('color', 'var(--bg-colorTone)');
        $('#woman').css('color', 'var(--grey-tone)');
        $('#men').css('color', 'var(--grey-tone)');
        $('.genderSelected').show();
       
    });


    $(document).on('click', '#AllesAnzeigenChild', function (event) {
        $('#KleiderAnzeige').empty();
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
            gender : 'child',
            auswahl : 'allesanzeigen'
            },
            success: function (msg) {
                msg = JSON.parse(msg);
                console.log(msg);
                KleiderAnzeige(msg);
            },
            error: function (eins, zwei, err) {
                console.log(eins + " " + zwei + " " + err)
            }
        });
    });
    $(document).on('click', '#OberteileChild', function (event) {
        $('#KleiderAnzeige').empty();
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
            gender : 'child',
            auswahl : 'oberteile'
            },
            success: function (msg) {
                msg = JSON.parse(msg);
                console.log(msg);
                KleiderAnzeige(msg);
            },
            error: function (eins, zwei, err) {
                console.log(eins + " " + zwei + " " + err)
            }
        });
    });
    $(document).on('click', '#UnterteileChild', function (event) {
        $('#KleiderAnzeige').empty();
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
            gender : 'child',
            auswahl : 'unterteile'
            },
            success: function (msg) {
                msg = JSON.parse(msg);
                console.log(msg);
                KleiderAnzeige(msg);
            },
            error: function (eins, zwei, err) {
                console.log(eins + " " + zwei + " " + err)
            }
        });
    });
    $(document).on('click', '#SchuheChild', function (event) {
        $('#KleiderAnzeige').empty();
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
            gender : 'child',
            auswahl : 'schuhe'
            },
            success: function (msg) {
                msg = JSON.parse(msg);
                console.log(msg);
                KleiderAnzeige(msg);
            },
            error: function (eins, zwei, err) {
                console.log(eins + " " + zwei + " " + err)
            }
        });
    });
    $(document).on('click', '#AccessoirsChild', function (event) {
        $('#KleiderAnzeige').empty();
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
            gender : 'child',
            auswahl : 'accesoirstaschen'
            },
            success: function (msg) {
                msg = JSON.parse(msg);
                console.log(msg);
                KleiderAnzeige(msg);
            },
            error: function (eins, zwei, err) {
                console.log(eins + " " + zwei + " " + err)
            }
        });
    });


    function KleiderAnzeige(msg){

        console.log(msg);

        $('#KleiderAnzeige').siblings().hide();
        $('#KleiderAnzeige').css('display', 'flex');
        $('.genderSelected').hide();
        $('#MainPart').css('filter', 'blur(0px)');
        
        var AKleidung = msg;
        var length = AKleidung.length;
        console.log(length);
        
        if(length > '0'){
            for (let index = 0; index < AKleidung.length; index++) {
                var bild = AKleidung[index].bild;
                var preis =  AKleidung[index].preis;
                var groeße = AKleidung[index].size;
                var beschreibung = AKleidung[index].beschreibung;
                var render = getKleiderContainer(bild, preis, groeße, beschreibung);
                console.log(render);
                
                $('#KleiderAnzeige').append(render);
            }
        }
        else {
            $('#KleiderAnzeige').html('<p id="KeineKleider">Keine Kleidungsstücke dieser Rubrik</p>');
        }
    }

    /**
     * Click Event auf die Login oder Registrieren Seite
     * If Abfrage überprüft ob Registrieren oder Login geklick wurde
     * Eingabe von benutzerdaten werden über Ajax ins PHP weitergeleitet und von dort in die Datenbank gespeichert
     */
    $(document).on('click', '.SelectLR', function (event) {

        $('.LRContainer').siblings().hide();
        $('.LRContainer').show();
        $('#LoginRegistrationPlugin').hide();
        // $('.LRContainer').show();
        // $('#mitte').hide();
        // $('#AboutKleiderSchieber').hide();
        var SelectLR_ID = event.currentTarget.id;
        console.log(SelectLR_ID);
        if(SelectLR_ID == 'SelectLogin'){
            console.log('login');
            $('#LoginSelected').css('display', 'block');
            $('#RegistrationSelected').css('display', 'none');

            $(document).on('click', '#login_button', function(event){

                var loginNutzername = $('#InputLoginName').val();
                var loginPasswort = $('#InputLoginPasswort').val();
  
                console.log(loginNutzername, loginPasswort);
                
                  $.ajax({
                      type: 'POST',
                      url: 'login.php',
                      data: {
                      login_nutzername : loginNutzername,
                      login_passwort : loginPasswort
                      },
                      success: function (msg) {
                          msg = JSON.parse(msg);
                          console.log(msg);

                          if (msg){
                            $('.LoginProfile').html('Profilseite');
                            $('.LoginProfile').attr("id","ProfilSide");
                          }
                        
                          if (msg.hasOwnProperty('userInfo')) {
                            console.log(msg.userInfo);
                            var AUserInfo = msg.userInfo;

                            for (let index = 0; index < AUserInfo.length; index++) {
                                
                                var bild = AUserInfo[index].klamotten_bild;
                                var preis = AUserInfo[index].preis;
                                var groesse = AUserInfo[index].size;
                                var KLbeschreibung = AUserInfo[index].klamotten_beschreibung;
                                
                                var render = getKleiderContainer(bild, preis, groesse, KLbeschreibung);

                                console.log(render);
                                
                                $('#posts-wrapper').append(render);
                               
                            }
                            
                        };


                        
                        nutzername = msg.userInfo[0].username;
                        email = msg.userInfo[0].email;
                        wohnort = msg.userInfo[0].wohnort;
                        beschreibung = msg.userInfo[0].users_beschreibung;
                        userID = msg.userInfo[0].id_user;
                        profilbild = msg.userInfo[0].users_bild;

                        console.log('user id = ' , userID);
                        
                      
                          getProfileSide(nutzername , email, wohnort, profilbild, beschreibung);
                          
                      },
                      error: function (eins, zwei, err) {
                          console.log(eins + " " + zwei + " " + err)
                      }
                  });


            });

        }
        else if(SelectLR_ID == 'SelectRegistration'){
            console.log('registrieren');
            $('#LoginSelected').css('display', 'none');
            $('#RegistrationSelected').css('display', 'block');

            $(document).on('click', '#registration_button', function(event){

                var registerNutzername = $('#InputRegisterName').val();
                var registerPasswort = $('#InputRegisterPasswort').val();
                var registerEmaill = $('#InputRegisterEmail').val();
  
                console.log(registerNutzername, registerPasswort, registerEmaill);
                
                  $.ajax({
                      type: 'POST',
                      url: 'register.php',
                      data: {
                      register_nutzername : registerNutzername,
                      register_passwort : registerPasswort,
                      register_email : registerEmaill
                      },
                      success: function (msg) {
                        msg = JSON.parse(msg);
                          console.log(msg);

                          if (msg){
                            $('.LoginProfile').html('Profilseite');
                            $('.LoginProfile').attr("id","ProfilSide");
                          }

                          if (msg.hasOwnProperty('userInfo')) {
                            console.log(msg.userInfo);
                            
                        };
                        
                        nutzername = msg.userInfo[0].username;
                        email = msg.userInfo[0].email;
                        wohnort = msg.userInfo[0].wohnort;
                        beschreibung = msg.userInfo[0].beschreibung;
                        userID = msg.userInfo[0].id;
                        profilbild =  msg.userInfo[0].bild;

                        console.log('user id = ' , userID);
                        
                          
                          getProfileSide(registerNutzername , registerEmaill );
                          
                      },
                      error: function (eins, zwei, err) {
                          console.log(eins + " " + zwei + " " + err)
                      }
                  });


            });

            
            
            //    alert("button was clicked");
                //Hier soll später die PHP-Funktion aufgerufen werden!
                //$.ajax({url: "register.php", async: false});
            //});
        }
        else{
            console.log('fehler'); 
        }
    });

    $(document).on('change', '#profilbild', function() {
        var bild = $('#profilbild').val();
        bild = bild.substr(12, 19);
        console.log(bild);
        $('#profileImage').attr('src', bild)
        profilbild = bild;
        console.log('user id = ' , userID);
        $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
            user_id : userID,
            user_Profilbild : profilbild
            },
            success: function (msg) {
                console.log(msg);
            },
            error: function (eins, zwei, err) {
                console.log(eins + " " + zwei + " " + err)
            }
        });
       });
    // $(document).on('click', '#SelectLogin', function (event) {
    //     $('#mitte').css('display', 'none');
    //     $('#container').css('display', 'flex');
    //     $('#LoginSide').css('display', 'block');
    //     // $('#RegistrationSide').css('display', 'none');

    // });
    // $(document).on('click', '.profile-image', function (event) {
    //    console.log('bild auswahl geklickt');
    //    var test = $('#profilbild').val();
    //    console.log(test);
       
    // });

    $(document).on('click', '#EnterDescription', function (event) {
       $('#enterDescriptionToProfile').css('display', 'block');
       $('#enterDescriptionToProfile').val('');
       $(document).on('keypress',function(e) {
        if(e.which == 13) {
         var describtionValue = $('#enterDescriptionToProfile').val(); 
         $('.description').html(describtionValue);
         $('#enterDescriptionToProfile').css('display', 'none');

         $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
            user_id : userID,
            user_Description : describtionValue
            },
            success: function (msg) {
                console.log(msg);
            },
            error: function (eins, zwei, err) {
                console.log(eins + " " + zwei + " " + err)
            }
        });
        }
    });
       
    });
   
    $(document).on('click', '#EnterPlace', function (event) {
       $('#enterPlaceToDescription').css('display', 'block');
       $('#enterPlaceToDescription').val('');
       $(document).on('keypress',function(e) {
        if(e.which == 13) {
         var PlaceValue = $('#enterPlaceToDescription').val(); 
         $('.ÜberMichWohnort').html(PlaceValue);
         $('#enterPlaceToDescription').css('display', 'none');

         $.ajax({
            type: 'POST',
            url: 'login.php',
            data: {
                user_id : userID,
           user_place : PlaceValue
            },
            success: function (msg) {
                console.log(msg);
                
            },
            error: function (eins, zwei, err) {
                console.log(eins + " " + zwei + " " + err)
            }
        });
        }
    });
       
    });

    $(document).on('click', '#ProfilSide', function (event) {
        getProfileSide(nutzername , email, wohnort, profilbild, beschreibung);
     });


    $(document).on('click', '.promotion', function (event) {
        $('#KleidungHochladen').css('display', 'flex');

     });

     $(document).on('click', '#ButtonKleidungHochladen', function (event) {
        var profilbild = $('.KleidungsBild').val();
        var profilbild2 = profilbild.substr(12, 19);
        var größe =  $('#GrößeHochladen').val();
        var preis = $('#Preis').val();
        var beschreibung = $('#KleiderBeschreibung').val();
        var kategorie = $('#KategorieAngeben').val();
        var gender = $('#GenderAngeben').val();

        console.log(profilbild2, beschreibung, preis, größe, kategorie);
        console.log('user id = ' , userID);
        
        if(profilbild && profilbild2 && größe && preis && beschreibung && kategorie && gender){
            
            var KleiderContainer = getKleiderContainer(profilbild2, preis, '' , beschreibung);

            $('#posts-wrapper').append(KleiderContainer);
            $('#KleidungHochladen').css('display', 'none');
        
            $.ajax({
                type: 'POST',
                url: 'login.php',
                data: {
               user_id : userID,
               Kleider_profilbild : profilbild2,
               Kleider_größe : größe,
               Kleider_preis : preis,
               Kleider_beschreibung : beschreibung,
               Kleider_kategorie : kategorie,
               Kleider_gender : gender
                },
                success: function (msg) {
                    console.log(msg);
                    
                },
                error: function (eins, zwei, err) {
                    console.log(eins + " " + zwei + " " + err)
                }
            });
        
        }
       

        else {
            console.log('nicht alles eingegeben');
            
        }

        

     });

  

     function getKleiderContainer(bild, preis, größe, beschreibung){
         console.log(bild, preis, größe, beschreibung);
         
        var render = "";
        render = render + '<div class="post-wrapper">';
        render = render + '<img class="post-image" src="' + bild + '">';
        render = render + '<div class="post-text-wrapper">';
        render = render + '<p class="price">' + preis + '</p>';
        render = render + '<p class="size">' + größe + '</p>';
        render = render + '<p class="infoUserProduct">' + beschreibung + '</p>';
        render = render + '</div>';
        render = render + '</div>';
    return render;
     }
     

    function clear(){
        $("#RegistrationForm :input").each( function(){ 
            $(this).val("");
        });
    }

    function getProfileSide(nutzername, email, wohnort, profilbild, beschreibung){
        console.log(nutzername, email);
        $('#ProfileSite').siblings().hide();
        $('#ProfileSite').show();
        $('#displayMailOnProfilet').html(email);
        $('.username').html(nutzername);
        $('.ÜberMichWohnort').html(wohnort);
        $('.description').html(beschreibung);
        $('#profileImage').attr('src', profilbild);

    }



});