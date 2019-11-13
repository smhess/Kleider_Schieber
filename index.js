/** 
 * author Sarah Hess
 */
$(document).ready(function () {

    $(document).on("click", '#registrierenLogin', function (event) {
        $('#mitte').css('filter', 'blur(2px)');
        $('#LoginRegistrationPlugin').css('display', 'block');
        $('#LoginRegistrationPlugin').css('filter', 'blur(0px)');
    });

    $(document).on('click', '.CloseRegistrationLogin', function(event){
        $('#LoginRegistrationPlugin').css('display', 'none');
        $('#mitte').css('filter', 'blur(0px)');
    });

    $(document).on('click', '#woman', function(event){
        $('#woman').css('color', 'var(--bg-colorTone)');
        $('.genderSelected').css('display', 'block');
        $('#mitte').css('filter', 'blur(2px)');
    });
    $(document).on('click', '#men', function(event){
        $('#men').css('color', 'var(--bg-colorTone)');
        $('.genderSelected').css('display', 'block');
        $('#mitte').css('filter', 'blur(2px)');
    });
    $(document).on('click', '#child', function(event){
        $('#child').css('color', 'var(--bg-colorTone)');
        $('.genderSelected').css('display', 'block');
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