//-----------------------------------------------------------------------------
         //Globals
         var SPEED = 5;
         var COUNT = 10;
         var DIRECTION = 1;
         var OUTPUT = "Initially I am GROWING!";
         var FONTS = ["Comic Sans MS","Chiller","Blade Runner Movie Font"];
         var FONTS_INDEX = 0;
//-----------------------------------------------------------------------------
         function start() 
         {        //Threading
                  window.setInterval( "run()", 100 );
         }
//-----------------------------------------------------------------------------
         function run() 
         {
                  COUNT += SPEED;

                  if( (COUNT % 200) == 0 ) 
                  {
                       SPEED *= -1;
                       DIRECTION = !DIRECTION;
  
                       MESSAGE.style.color = ( SPEED < 0 ) ? "green" : "red" ;
                       
                       OUTPUT = ( SPEED < 0 ) ? "I am SHRINKING!" : "I am GROWING!";
                       
                       MESSAGE.style.fontFamily = FONTS[ ++FONTS_INDEX % 3 ];
                 }

                 MESSAGE.style.fontSize = COUNT / 3;
                 MESSAGE.style.left = COUNT;
                 MESSAGE.innerHTML = OUTPUT + "<br> Font size: " + COUNT + " point";
         }
//-----------------------------------------------------------------------------  
