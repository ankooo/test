var backimg = document.getElementById("header");
var perv = document.getElementById("prev_page");
var next = document.getElementById("next_page");
var jump_1 = document.getElementById("jump_1");
var jump_2 = document.getElementById("jump_2");
var jump_3 = document.getElementById("jump_3");
var nav = document.getElementById("nav");
var jump = [jump_1, jump_2, jump_3];
var address = ["img/main_1.png", "img/main_2.png", "img/main_3.png"];
var i = 0;

    setInterval(function () {
        i = (i+1)%3;
        action(i);
    }, 5000);
    perv.onclick = function() {
        i = (i + 2) % 3;
        action(i);
    };
    next.onclick = function () {
        i = (i + 1) % 3;
        action(i);
    };
    jump_1.onclick = function() {
        action(0);
    };
    jump_2.onclick = function () {
        action(1);
    };
    jump_3.onclick = function () {
        action(2);
    };

    function action(i) {
        backimg.style.backgroundImage = "url(" + address[i] + ")";
        for(let j=0; j < 3; j++) {
            if(j != i){
                jump[j].style.background = "none";
            }else {
                jump[j].style.background = "rgba(90,90,0,.5)";
            }
        }
    }
    
 
