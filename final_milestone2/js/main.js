/*
* Image Cycle Function
* Code taken from Info 1300 Fall 2016
* Class taught by Steve Paling
*/

var index = 1;
var pix = ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg", "img05.jpg"];
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

/*
* Date in Footer Function
*/
window.onload = function set_date(){
  "use strict";
  // variables
  var namesOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],        // get pieces of date
      this_date = new Date(),
      month = namesOfMonths[this_date.getMonth()],
      number = this_date.getDate(),
      year = this_date.getFullYear();
      // set information up for insertion into DOM tree
  var new_span = document.createElement('span'),
      new_text = document.createTextNode(number + ' ' + month + ' ' + year),
      position = document.getElementsByTagName('footer')[0];
  // append date to footer
  new_span.appendChild(new_text);
  position.appendChild(new_span);
  }
