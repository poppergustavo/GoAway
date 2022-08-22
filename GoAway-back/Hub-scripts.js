// JAVASCRIPT

const side_menu_content_p = document.getElementById('side_menu_content');
const side_menu_m = document.getElementById('side_menu');
const side_menu_dots = document.getElementById('side_menu_dots_div');


//Show content
side_menu_dots.onclick = function(){

    side_menu_content_p.style.display = "block;";
    side_menu_content_p.style.transition = "1s;";


};