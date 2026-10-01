document.addEventListener("DOMContentLoaded", function () {

    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const page3 = document.getElementById("page3");
    const page4 = document.getElementById("page4");
    const page5 = document.getElementById("page5");
    const page6 = document.getElementById("page6");
    const page7 = document.getElementById("page7");


    // PAGE 1 → PAGE 2

    page1.addEventListener("click", function () {

        page1.style.transform = "translateX(-100%)";
        page2.style.transform = "translateX(0)";

    });


    // PAGE 2 → PAGE 3

    window.openBouquet = function (number) {

        page2.style.transform = "translateX(-100%)";
        page3.style.transform = "translateX(0)";

    };


    // PAGE 3 → PAGE 4

    page3.addEventListener("click", function () {

        page3.style.transform = "translateX(-100%)";
        page4.style.transform = "translateX(0)";

    });


    // PAGE 4 → PAGE 5

    page4.addEventListener("click", function () {

        page4.style.transform = "translateX(-100%)";
        page5.style.transform = "translateX(0)";

    });


    // PAGE 5 → PAGE 6

    page5.addEventListener("click", function () {

        page5.style.transform = "translateX(-100%)";
        page6.style.transform = "translateX(0)";

    });


    // PAGE 6 → PAGE 7

    page6.addEventListener("click", function () {

        page6.style.transform = "translateX(-100%)";
        page7.style.transform = "translateX(0)");

    });

});
