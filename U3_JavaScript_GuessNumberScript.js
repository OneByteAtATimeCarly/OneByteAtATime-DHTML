//-----------------------------------------------------------------------------
         //Globals
         var WON = 0;
         var LOST = 1;
         var CONTINUE_ROLLING = 2;  

         // other variables used in program
         var FirstRoll = true;   // true if first roll
         var DiceTotal = 0;      // sum of the dice
         var PointsAccumulated = 0;        // point if no win/loss on first roll
         var GameState = CONTINUE_ROLLING;  // game not over yet
     
//-----------------------------------------------------------------------------         
         //One roll of the dice
         function play()
         {
                  if(FirstRoll) 
                  {         
                     DiceTotal = rollDice();        

                     switch(DiceTotal) 
                     {
                         case 7: 
                         case 11: GameState = WON;
                                  document.DiceGame.POINTS.value = ""; 
                                  break;
                                  
                         case 2:
                         case 3: 
                         case 12: GameState = LOST;
                                  document.DiceGame.POINTS.value = ""; 
                                  break;
                                  
                         default: GameState = CONTINUE_ROLLING;
                                  PointsAccumulated = DiceTotal;
                                  document.DiceGame.POINTS.value = PointsAccumulated; 
                                  FirstRoll = false;
                     }
                  }
                  
                  else 
                  {
                      DiceTotal = rollDice();
      
                      if(DiceTotal == PointsAccumulated )
                      { 
                          GameState = WON; 
                      }
                      else if(DiceTotal == 7)
                      {
                          GameState = LOST;
                      }
                 }

                 if(GameState == CONTINUE_ROLLING)
                 {
                     alert("Roll again");   
                 }
                 else 
                 {
                     if(GameState == WON)
                     {
                        alert("Player wins! Click Roll Dice to play again.");
                     }
                     else
                     {
                        alert("Player loses! Click Roll Dice to play again.");
                     }
                     
                     FirstRoll = true;
                 }
         }
//-----------------------------------------------------------------------------   
         //Sequence of Dice Rolls
         function rollDice()
         {
                  var Dice1;
                  var Dice2;
                  var Total;   

                 Dice1 = Math.floor( 1 + Math.random() * 6 );
                 Dice2 = Math.floor( 1 + Math.random() * 6 );
                 Total = Dice1 + Dice2;

                 document.DiceGame.ONE.value = Dice1;
                 document.DiceGame.TWO.value = Dice2;
                 document.DiceGame.TOTALPOINTS.value = Total;

                 return Total;
         }
//-----------------------------------------------------------------------------           