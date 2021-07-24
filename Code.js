var pics = [
    "imgs/Tooberz.png",
    "imgs/cool.jpg",
    "imgs/background.jpg",
   "imgs/T for Tooberz.png"
  ] ;
  
  var btn = document.querySelector("button") ;
  var img = document.querySelector("img") ;
  var counter = 1;
  
  btn.addEventListener("click", function( ){
      if(counter === 6){
          counter = 0;
      }
       img.src = pics [counter]
       counter = counter + 1;
  }) ;
  

