 canvas = document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");
 color = "blue";
 ctx.beginPath();
 ctx.strokeStyle = color;
 ctx.arc(200, 200, 40, 0, 2 * Math.PI);
 ctx.stroke();
 canvas.addEventListener("mousedown", my_mousedown);
 color = "black";
 ctx.beginPath();
 ctx.strokeStyle = color;
 ctx.arc(300, 200, 40, 0, 2 * Math.PI);
 ctx.stroke();
 canvas.addEventListener("mousedown", my_mousedown);
 color = "red";
 ctx.beginPath();
 ctx.strokeStyle = color;
 ctx.arc(400, 200, 40, 0, 2 * Math.PI);
 ctx.stroke();
 canvas.addEventListener("mousedown", my_mousedown);
 color = "green";
 ctx.beginPath();
 ctx.strokeStyle = color;
 ctx.arc(350, 250, 40, 0, 2 * Math.PI);
 ctx.stroke();
 canvas.addEventListener("mousedown", my_mousedown);
 color = "yellow";
 ctx.beginPath();
 ctx.strokeStyle = color;
 ctx.arc(250, 250, 40, 0, 2 * Math.PI);
 ctx.stroke();
 canvas.addEventListener("mousedown", my_mousedown);


 function my_mousedown(e){
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("X = " + mouse_x + ", Y = " + mouse_y);
    circle(mouse_x, mouse_y);
 }
 function circle(mouse_x, mouse_y){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();
    color = document.getElementById("myColor").value;
    console.log(color);
 }