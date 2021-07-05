import { Util } from "./Util";
export async function DaylyPhrase(){
   var phraseElement: HTMLSpanElement = document.querySelector(".frase-random");
   var stringPhrase: string = Util.getCookie("dayPhrase");
   var jsonPhrase: any;
   if (stringPhrase.trim().length){
      jsonPhrase = JSON.parse(stringPhrase);
      phraseElement.innerHTML = jsonPhrase?.frase + " - "+jsonPhrase?.livro+", <strong>"+jsonPhrase?.autor+"</strong>";
   }
   else{
      try{
        //  var randomPhrase = new XMLHttpRequest();
        //  randomPhrase.onload = function(){
        //     if (randomPhrase.readyState == 4 && randomPhrase.status == 200){
        //        stringPhrase = randomPhrase.responseText;
        //        jsonPhrase = JSON.parse(stringPhrase);
        //        Util.setCookie("dayPhrase", stringPhrase, 1);
        //        phraseElement.innerHTML = jsonPhrase?.frase + " - "+jsonPhrase?.livro+", <strong>"+jsonPhrase?.autor+"</strong>";
        //     }
        //  }
        //  randomPhrase.open("GET", "", true);
        //  randomPhrase.send();
      }
      catch(e){
         console.warn("Unable to get dayly phrase");
      }
   }
}