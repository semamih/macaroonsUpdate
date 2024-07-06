document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})

$('#button').on('click', () => {
    let choiceInput = $("#choiceInput");
    let nameInput = $("#nameInput");
    let phoneInput = $("#phoneInput");
    let hasError = false;

    $(".errorDiv").hide();
    choiceInput.css("border-color","rgb(130, 19, 40)");
    nameInput.css("border-color","rgb(130, 19, 40)");
    phoneInput.css("border-color","rgb(130, 19, 40)");

    if(!choiceInput.val()){
        $(".first").css('display','block');
        choiceInput.css("border-color","red");
        hasError = true;
    }
    if(!nameInput.val()){
        $(".second").css('display','block');
        nameInput.css("border-color","red");
        hasError = true;
    }
    if(!phoneInput.val()){
        $(".third").css('display','block');
        phoneInput.css("border-color","red");
        hasError = true;
    }

    let loader = $(".loaderDiv");
    if(!hasError){
        loader.css("display","flex");
        $.ajax({
            method: "POST",
            url: "https://testologia.ru/checkout",
            data: { product: choiceInput.val(), name: nameInput.val(), phone: phoneInput.val() }
        })
            .done(function( msg ) {
                loader.hide();
                if(msg.success){
                    $(".order__info").css('display','none');
                    $(".thanks").show();
                }else{
                    alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ");
                }
            });
    }
})


















