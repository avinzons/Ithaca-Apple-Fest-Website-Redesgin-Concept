/*
* Image Cycle Function
* Code adapted from Info 1300 Fall 2016
* Class taught by Steve Paling
*/

var index = 1;
var pix = ["banner01.jpg", "banner02.jpg", "banner03.jpg", "banner04.jpg", "banner05.jpg", "banner06.jpg", "banner07.jpg", "banner08.jpg", "banner09.jpg"];
var main_image = document.getElementById('image');

// functions
function pic_change() {
    "use strict";
    if (index < pix.length) {
        main_image.src = 'images/' + pix[index];
        index += 1;
    } else {
        index = 0;
        main_image.src = 'images/' + pix[index];
        index += 1;
    }
}

function pic_cycle() {
    "use strict";
    setInterval(pic_change, 5000);
}

// function call
pic_cycle();
