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

    
    $(document).on('click', '.SelectLR', function (event) {
        // var test = $(event.target.parentNode.parentNode.parentNode.parentNode).find('#MainPart').find('.LRContainer');
        $('#LoginRegistrationPlugin').hide();
        $('.LRContainer').show();
        $('#mitte').hide();
        $('#AboutKleiderSchieber').hide();
        var SelectLR_ID = event.currentTarget.id;
        console.log(SelectLR_ID);
        // var SelectRorL = ['LoginSelected', 'RegistrationSelected'];
        if(SelectLR_ID == 'SelectLogin'){
            console.log('login');
            $('#LoginSelected').css('display', 'block');
            $('#RegistrationSelected').css('display', 'none');

            //Check if the "Login" Button has been pushed
            $(document).on('click', '#login_button', function(event){
                if()
            });
        }
        else if(SelectLR_ID == 'SelectRegistration'){
            console.log('registrieren');
            $('#LoginSelected').css('display', 'none');
            $('#RegistrationSelected').css('display', 'block');

            //Check if the "Registrieren" Button has been pushed
            $(document).on('click', '#login_button', function(event){
                $.post( $("#RegistrationForm").attr("action"),
                        $("#RegistrationForm :input").serializeArray());

                $('#RegistrationForm').submit(function(){
                    return false;
                });
                
                clear();

            });

            function clear(){
                $("#RegistrationForm :input").each( function(){
                    $(this).val("");
                });
            }
            
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



});