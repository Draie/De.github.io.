
//----------------------------------------------------DECLARATION DES VARIABLES ET TABLEAU GLOBAL----------------------------------------------//
let CurrentDeShow =DeStyle;
    
let GameAlert = document.getElementsByClassName("RunDice")
let DeShow =0;
let DeNumber =0;

let holdCurrentScore1= 0;
let holdCurrentScore2= 0;

function CurrentScorePlayer (){
    if (player1counter> player2counter ){

        currentScorePlayer1= currentScorePlayer1 + currentDe;
        document.getElementById('scorePlayer1').innerText= (currentScorePlayer1);

    }

    else if (player2counter > player1counter){
        currentScorePlayer2= currentScorePlayer2 + currentDe;
        document.getElementById('scorePlayer2').innerText= (currentScorePlayer2);
    }

    else if (player2counter == player1counter){
        currentScorePlayer2= currentScorePlayer2 + currentDe;
        document.getElementById('scorePlayer2').innerText= (currentScorePlayer2);


    }
}
   
function HoldCurrentScore(){
  

        if(player1start == true){

            holdCurrentScore1= holdCurrentScore1 + currentScorePlayer1;
        document.getElementById('HoldscorePlayer1').innerText=(holdCurrentScore1);
        currentScorePlayer1 = 0;

        }
        
    
 
 
       else if(player2start == true){
        holdCurrentScore2= holdCurrentScore2 + currentScorePlayer2;
        document.getElementById('HoldscorePlayer2').innerText=(holdCurrentScore2);
        currentScorePlayer2=0;

       } 
    
        else if(holdCurrentScore1 >  130) {
            alert5('Player 1 A GAGNERRRRR !!!!!!')
            currentScorePlayer1 = 0;
            holdCurrentScore2=0;
            holdCurrentScore1=0;

        }

        else if(holdCurrentScore2 > 130){
            alert('Player 2 A GAGNER !!!!!')
            currentScorePlayer2=0;
            holdCurrentScore2=0;
            holdCurrentScore1=0;
        }


}

    



/// GENERATEUR DE NOMBRE AU HASARD//
let minNumber = 1; // The minimum number you want
let maxNumber = 6 ; // The maximum number you want


// BASE DE DONNEE DES DEE DISPONIBLE//
            var DeStyle= [
                "Dimg/de_value_0.jpg",
                "Dimg/De_value1.jpg", 
            "Dimg/De_value2.png",
            "Dimg/De_value3.png",
            "Dimg/De_value4.png",
            "Dimg/De_value_5.png",
            "Dimg/De_value6.jpg",
            ];


  ////////// VARIABLE UTILISATEURS 

                let player1start= true;
                let player2start=false;

                let player1counter=0;
                let player2counter=0;
                let PlayerStatusIcon= "InProgressBtn (2).png"; 

///------------------------------ PROGRAMME START ---------------------------------------------------------//////////////////////////////////
PlayerInProgress();
//----------------------------------------------MODIICATION DU DE DANS LE DOM --------------------------------------------------//
                    function DeChange(){
                        document.getElementById("bigD").src=CurrentDeShow;
                        
                    } 
                    
                    // COPY DU DE //
                    function DeNumberCopy(){
                        currentDe = DeNumber;  
                    }

                    /*ECOUTE DES MOUVEMENT DU DEE

                    function DeNumberListener(){
                        DeNumber.addEventListener("change",DeChoice());
                    }*/


                    //FONCTION QUI ATTRIBUE DES VALEURS AU DE//


                    function Deplay(){
                           

                        
                        ///debut de test
                        console.log(DeNumber);
                    console.log( ' Avant assignation de valeur ');
                   
                    //fin de test
                       
                    if (DeNumber > 6) {
                        DeNumber =0;     

                    }  
                    else if(DeNumber < 6 ){
                        DeNumber = DeNumber + 1;
                    }
                    else if (DeNumber == 6) {
                        DeNumber =0;     

                    } 
                  

                     ///debut de test
                     console.log(DeNumber);
                     console.log( ' Après assignation de valeur  ');
                     counterChange ();
                     
                     DeChoice();
                     //fin de test 
                     // DeNumberListener();
                    CurrentScorePlayer();
            
                   
                    }



                    // Fonction qui Change la valeur du dee
                    function DeChoice(){
                        DeNumberCopy();


                            ///Avant initialisation du De
                            console.log(DeNumber);
                            console.log ( ' Avant assignation de De ');
                            //Fin Avant intialisatio du De 
                    
                        
                            if (currentDe == 1){
                            DeShow = DeStyle[1]; 
                            
                            console.log(currentDe)
                            console.log('Initialisation du Deé juste apres ')
                                                }


                            else if (currentDe == 2){
                                DeShow=DeStyle[2];
                            }

                            else if (currentDe == 3){
                                DeShow=DeStyle[3];
                            }

                            
                            else if (currentDe == 4){
                                DeShow=DeStyle[4];
                            }

                            
                            else if (currentDe == 5){
                                DeShow=DeStyle[5];
                            }
                            else if (currentDe == 0){
                                DeShow=DeStyle[6];
                            }
                            
                            
                                CurrentDeShow = DeShow;
                    
                                console.log(DeShow);
                                console.log(CurrentDeShow);
                                console.log('Julie a bien jouer ! ');
                                
                        
                                DeChange();
                            

                                
                            
                                ///After initialisation du De
                            console.log(currentDe);
                                    console.log( ' Après initialisation du De');
                            //Fin After intialisatio du De 
                            

                        
                    
                            }
                    // RECUPERATION DU DEE DANS LE DOM  ET MODIFICATION//
 

//--------------------------------------PARTIE UTILISATEUR ------------------------------------------------------------------------------////////////////////////////

/// DECLARATION FONCTION (utilisateur)//////:

function PlayerInProgress (){
    let currentStatus1= document.getElementById('StatusIcon1');
    let currentStatus2= document.getElementById('StatusIcon2');

    if (player1start==true){
      currentStatus1.style.visibility ="visible";
      currentStatus2.style.visibility ="hidden";
 
   }
   else if (player2start == true){
    
    currentStatus2.style.visibility ="visible";
    currentStatus1.style.visibility ="hidden";
   }
                            }
                            
    function counterChange (){

        if(player1counter == player2counter){
            player1counter = player1counter + 1;
            player2start=true;
            player1start=false;
            console.log(player1counter);
            console.log('incrementation compteur1');
            console.log(player1start);
            console.log('Player start 1 valeur ');


        }
            
            else if (player2counter < player1counter){
                player2counter = player2counter + 1;
                player1start=true;
                player2start=false;
                console.log(player2counter);
                console.log('incrementation compteur2');
                console.log(player2start);
                console.log('Player start 2 valeur ');

            }
              
                PlayerInProgress();

}
//////------------------------------------------------------------------------/////////////
//////////////// PARTIE CURRENT SCORE //////////////////////////////////////
let currentScorePlayer1=0;
let currentScorePlayer2=0;

  

      function reloadWindow(){
        window.location.reload();
      }
           
        
               

