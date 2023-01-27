


//DeNumberCopy();



function PlayerInProgress (){

 if (player1start==true){
   let currentStatus= document.getElementById('StatusIcon1');
   currentStatus.style.visibility ="visible";

  
}

}



 function gameUserStart(){


    if (player2start== false){
        player1start=true;   
        
    }
     else if(player2start==true){
        player1start=false;
     }

     PlayerInProgress(); 

     gameUserStart();
     
       

     //console.log(player1);
     
     
     

console.dir(player1start);
//
console.log('Initialisation du true de Player1');
    }



   
 



    