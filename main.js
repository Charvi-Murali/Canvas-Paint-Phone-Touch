var mouseEvent = "empty";
var last_position_of_x;
var last_position_of_y;

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

var width=screen.width;

new_width=screen.width-70;
new_height=screen.height-300;

var color="red"
var width=2
    console.log(color);
    console.log(width);
   

   if(width<992){
       document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;

    document.body.style.overflow="hidden";

       }



canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e){
    mouseEvent="mouseDown"
}

canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e){
    mouseEvent="mouseUp";  
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave"
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    var current_position_of_x = e.clientX - canvas.offsetLeft
    var current_position_of_y = e.clientY - canvas.offsetTop
    color = document.getElementById("inputcolor").value
    width = document.getElementById("inputnumber").value
    if(mouseEvent=="mouseDown"){
        
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth = width;

        ctx.moveTo(last_position_of_x, last_position_of_y)

        ctx.lineTo(current_position_of_x, current_position_of_y)
        ctx.stroke();

        }
        last_position_of_x = current_position_of_x;
        last_position_of_y = current_position_of_y;
}
canvas.addEventListener("touchstart", my_touchstart)

function my_touchstart(e){
    console.log("my_touchstart");
    last_position_of_x=e.touches[0].clientX - canvas.offsetLeft
    last_position_of_y=e.touches[0].clientY - canvas.offsetTop

}

canvas.addEventListener("touchmove", my_touchmove)

function my_touchmove(e){
    console.log("mytouchMove")
    current_position_of_x=e.touches[0].clientX - canvas.offsetLeft
    current_position_of_y=e.touches[0].clientY - canvas.offsetTop
    color = document.getElementById("inputcolor").value
    width = document.getElementById("inputnumber").value
    ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;
}

    

