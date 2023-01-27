
           
///////// ------------------------------------ALERT DE BIENVENUE ----------------------------//////////////////////

function Wlert(){
  alert('Bonjour et bienvenue sur le jeu! Attention pas de triche PS : Ceci est une version éclater')
}
   Wlert();

   ////////////-------------------------------------------------------------------------------//////////////////
   

   /// ------------------------------CHARGEMENT DES AUTRES FICHIER JS-------------------------//////////////////
  function LoadScript(src){

    const script = document.createElement("script");
    script.src=src;
    document.head.prepend(script);
  }


  LoadScript("De_Tools.js")

  ////////////::-------------------------------------------------------------------------------///////////////////////:



