var gui = require("nw.gui");
var fs = require("fs");

var isSaved = 'true';


$(document).ready(function () {

    //welcome animation
    $('#welcome').addClass('welcome-ani');
    $('#welcome-background').addClass('welcome-background-ani');
    new Vivus('logo', {
        type: 'delayed',
        duration: 100
    });
    //when splashscreen end
    setTimeout(function () {
        $('#welcome').remove();
        $('#editor-context').focus();
    }, 4500);
})
