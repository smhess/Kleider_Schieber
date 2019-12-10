/** 
 * author Sarah Hess
 */
$(document).ready(function () {

    var nutzername = '';
    var passwort;
    var email = '';
    var wohnort;
    var profilbild;
    var userID;


    $('body').click(function (evt) {
        console.log('body geklickt');

        if (evt.target.id == "genderSelected")
            return;
        //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
        if ($(evt.target).closest('#genderSelected').length)
            return;
        else {
            $('#genderSelected').hide();
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

    $(document).on('click', '#woman', function (event) {
        $('#woman').css('color', 'var(--bg-colorTone)');
        $('#men').css('color', 'var(--grey-tone)');
        $('#child').css('color', 'var(--grey-tone)');
        $('#genderSelected').show();
    });
    $(document).on('click', '#men', function (event) {
        $('#men').css('color', 'var(--bg-colorTone)');
        $('#child').css('color', 'var(--grey-tone)');
        $('#woman').css('color', 'var(--grey-tone)');
        $('#genderSelected').show();
    });
    $(document).on('click', '#child', function (event) {
        $('#child').css('color', 'var(--bg-colorTone)');
        $('#woman').css('color', 'var(--grey-tone)');
        $('#men').css('color', 'var(--grey-tone)');
        $('#genderSelected').show();
    });

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
                        profilbild = "C:\Users\hesss\Pictures\0\Unbenannt.png";
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
                          console.log(msg);

                          if (msg){
                            $('.LoginProfile').html('Profilseite');
                            $('.LoginProfile').attr("id","ProfilSide");
                          }
                          
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

    // $(document).on('click', '#SelectLogin', function (event) {
    //     $('#mitte').css('display', 'none');
    //     $('#container').css('display', 'flex');
    //     $('#LoginSide').css('display', 'block');
    //     // $('#RegistrationSide').css('display', 'none');

    // });
    $(document).on('click', '.profile-image-overlay', function (event) {
       console.log('bild auswahl geklickt');
       var test = $('.profile-image-overlay').val();
       console.log(test);
    });

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
        getProfileSide(nutzername , email );
     });


    $(document).on('click', '.promotion', function (event) {
        $('#KleidungHochladen').css('display', 'flex');

     });

     $(document).on('click', '#ButtonKleidungHochladen', function (event) {
        var profilbild = $('.KleidungsBild').val();
        var profilbild2 = profilbild.substr(12, 19);
        // var größe = 
        var preis = $('#Preis').val();
        var beschreibung = $('#KleiderBeschreibung').val();

        console.log(profilbild2, beschreibung, preis);
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
           Kleider_beschreibung : beschreibung
            },
            success: function (msg) {
                console.log(msg);
                
            },
            error: function (eins, zwei, err) {
                console.log(eins + " " + zwei + " " + err)
            }
        });
        

     });

     function getKleiderContainer(bild, preis, größe, beschreibung){
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
        $('.profile-image').css("background-image", "url(profilbild1.png)");

    }



});