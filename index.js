/** 
 * author Sarah Hess
 */
$(document).ready(function () {



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

        $('#LoginRegistrationPlugin').hide();
        $('.LRContainer').show();
        $('#mitte').hide();
        $('#AboutKleiderSchieber').hide();
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
                      url: 'register.php',
                      data: {
                      login_nutzername : loginNutzername,
                      login_passwort : loginPasswort
                      },
                      success: function (msg) {
                          console.log(msg);
                          getRegistratedSide();
                          
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
                      url: 'login.php',
                      data: {
                      register_nutzername : registerNutzername,
                      register_passwort : registerPasswort,
                      register_email : registerEmaill
                      },
                      success: function (msg) {
                          console.log(msg);
                          
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
       
    });
    $(document).on('click', '.more-button', function (event) {
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
   
    $(document).on('click', '.profile-more-button', function (event) {
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

    $(document).on('click', '.promotion', funtion(event){

    });
   


    function clear(){
        $("#RegistrationForm :input").each( function(){
            $(this).val("");
        });
    }

    function getProfileSide(nutzername, email){
        console.log(nutzername, email);
        $('#ProfileSite').siblings().hide();
        $('#ProfileSite').show();
        $('#displayMailOnProfilet').html(email);
        $('.username').html(nutzername);
    }

    function getRegistratedSide(){

    }


});