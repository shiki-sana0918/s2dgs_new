document.querySelectorAll('.button-more').forEach(function (button) {

    button.addEventListener('mouseover', function () {
        button.style.transition = 'all 0.1s';
        button.style.opacity = 0.5;
        button.style.marginLeft = '20px';

    });
    button.addEventListener('mouseout', function () {
        button.style.transition = 'all 0.1s';
        button.style.opacity = 1;
        button.style.marginLeft = '0px';

    });
});

$(document).ready(function () {
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
        arrows: false,
    });

    $('#submit').on('click', function (event) {
        event.preventDefault();
        let result = inputCheck();
    });

    $('#name').blur(function () {
        inputCheck();
    });
    $('#furigana').blur(function () {
        inputCheck();
    });
    $('#email').blur(function () {
        inputCheck();
    });
    $('#tel').blur(function () {
        inputCheck();
    });
    $('#message').blur(function () {
        inputCheck();
    });
    $('#agree').click(function () {
        inputCheck();
    });


    function inputCheck() {
        //エラーのチェックの結果
        let result;
        //エラーメッセージのテキスト
        let message = '';
        //エラーがなければfalse,エラーがあればtrue
        let error = false;

        //お名前のチェック
        if ($('#name').val() == '') {
            //エラーがある場合
            $('#name').css('background-color', '#f79999');
            error = true;
            message += 'お名前を入力してください。\n';
        } else {
            $('#name').css('background-color', '#fafafa');
        }


        if ($('#furigana').val() == '') {
            //エラーがある場合
            $('#furigana').css('background-color', '#f79999');
            error = true;
            message += 'フリガナを入力してください。\n';
        } else {
            $('#furigana').css('background-color', '#fafafa');
        }



        if ($('#message').val() == '') {
            //エラーがある場合
            $('#message').css('background-color', '#f79999');
            error = true;
            message += 'お問い合わせ内容を入力してください。\n';
        } else {
            $('#message').css('background-color', '#fafafa');
        }

        if ($('#email').val() == '' ||
        ($('#email').val().indexOf('@') == -1 ||
        ($('#email').val().indexOf('.') == -1))) {

            $('#email').css('background-color', '#f79999');
            error = true;
            message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';

        } else {
            $('#email').css('background-color', '#fafafa')
        }


    }

});


        


