
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
   car1_width=120;
   car1_height=90;
   car1_image="https://i.postimg.cc/9rqYz9HM/car1.png";
   car1_x=10;
   car1_y=10;

   car2_width=120;
   car2_height=90;
   car2_image="https://i.postimg.cc/tnnW1Kff/car2.png";
   car2_x=10;
   car2_y=100;
   background_image="https://i.postimg.cc/bv5d35nK/racing.jpg";
   function add(){
       background_imgtag=new Image();
       background_imgtag.onload=uploadbackground;
       background_imgtag.src=background_image;

       car1_imgtag=new Image();
       car1_imgtag.onload=uploadcar1;
      car1_imgtag.src=car1_image;

      car2_imgtag=new Image();
      car2_imgtag.onload=uploadcar2;
     car2_imgtag.src=car2_image;
   }
   function uploadbackground(){
       ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
   }

   function uploadcar1(){
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",)