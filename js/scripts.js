let btnTent = document.getElementById("tentLabel");
let btnRV = document.getElementById("RVLabel")

btnTent.addEventListener('click', () => {
    btnTent.classList.add("btn-success");
    btnRV.classList.remove("btn-success");

})

btnRV.addEventListener('click', () => {
    btnRV.classList.add("btn-success");
    btnTent.classList.remove("btn-success");

})

$(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    })

    $("#reserveButton").click(function(){
        $('#reserveModal').modal('show');
    })
    $("#loginButton").click(function(){
        $('#loginModal').modal('show');
    })
})