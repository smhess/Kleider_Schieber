/** 
 * author Sarah Hess
 */
$(document).ready(function () {


    $('body').click(function(evt){   
        console.log('body geklickt');
         
        if(evt.target.id == "genderSelected")
           return;
        //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
        if($(evt.target).closest('#genderSelected').length)
           return;             
        else{
            $('#genderSelected').hide();
            $('#mitte').css('filter', 'blur(0px)');
            $('.gender').css('color', 'var(--grey-tone)');
        }
       //Do processing of click event here for every element except with id menu_content
    });

    $('#searchArticle').on('input',function(e){
        console.log($(e.target).val().length);
        console.log($(e.target).val());
        if ($(e.target).val().length == 0) {
            console.log('nichts eingegeben')
        } else {
            console.log('etwas eingegeben');   
        }
    });

    $(document).on("click", '#registrierenLogin', function (event) {
        $('#mitte').css('filter', 'blur(2px)');
        $('#LoginRegistrationPlugin').css('display', 'block');
        $('#LoginRegistrationPlugin').css('filter', 'blur(0px)');
    });

    $(document).on('click', '.CloseRegistrationLogin', function(event){
        $('#LoginRegistrationPlugin').css('display', 'none');
        $('#mitte').css('filter', 'blur(0px)');
    });

    $(document).on("click", '#aboutKleiderSchieberButton', function (event) {
        $('#mitte').css('display', 'none');
        $('#AboutKleiderSchieber').css('display', 'block');
    });

    $(document).on('click', '#woman', function(event){
        $('#woman').css('color', 'var(--bg-colorTone)');
        $('#men').css('color', 'var(--grey-tone)');
        $('#child').css('color', 'var(--grey-tone)');
        $('#genderSelected').css('display', 'block');
        $('#mitte').css('filter', 'blur(2px)');
    });
    $(document).on('click', '#men', function(event){
        $('#men').css('color', 'var(--bg-colorTone)');
        $('#child').css('color', 'var(--grey-tone)');
        $('#woman').css('color', 'var(--grey-tone)');
        $('#genderSelected').css('display', 'block');
        $('#mitte').css('filter', 'blur(2px)');
    });
    $(document).on('click', '#child', function(event){
        $('#child').css('color', 'var(--bg-colorTone)');
        $('#woman').css('color', 'var(--grey-tone)');
        $('#men').css('color', 'var(--grey-tone)');
        $('#genderSelected').css('display', 'block');
        $('#mitte').css('filter', 'blur(2px)');
    });

    // var SelectRorL = ['SelectLogin', 'SelectRegistration'];

    // $(document).on('click', '.SelectLR', function(event){

    //     $('#LoginRegistrationPlugin').css('display', 'none');
    //     var SelectLR_ID = event.currentTarget.id;
    //     console.log(SelectLR_ID);
    //     if(SelectLR_ID = SelectRorL[0]){
    //         $('Einloggen').appendTo('#heading_login');
    //         $('Login').appendTo('#login_button');
    //     }
    //     else if(SelectLR_ID = SelectRorL[1]){
    //         $('Registrieren').appendTo('#heading_login');
    //         $('registrieren').appendTo('#login_button');
    //     }


    // });

    // $(document).on('click', '#SelectLogin', function(event){
    //     $('#mitte').css('display', 'none');
    //     $('#container').css('display', 'flex');
    //     $('#LoginSide').css('display', 'block');
    //     // $('#RegistrationSide').css('display', 'none');

    // });

  

});