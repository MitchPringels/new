  var klok = document.getElementById("deklok");
  var logMijnKlok = function(){
console.log("werkt");
    var vandaag = new Date();
    var uren = vandaag.getHours();
    if(String(uren).length===1){
      uren = "0" + uren;
    }

    var minuten=vandaag.getMinutes();
    if(String(minuten).length===1){
      minuten ="0"+ minuten;
    }

    var seconden = vandaag.getSeconds();
    if(String(seconden).length===1){
      seconden="0"+seconden;
    }
    klok.innerHTML=uren+":"+minuten+":"+seconden;
  }
    setInterval(logMijnKlok, 1000);

////////////////////////////////////////////////////////////////
    var random = function(fotos){
    var randomGetal = 21;
    return Math.floor((Math.random()* randomGetal)+1);
    }

    var doorgaanFoto = function(){
    var afbeeldingen = document.getElementsByClassName("flick");
    var mijnArray = [];
      //console.log("werkt");
          for(var i=0; i<afbeeldingen.length;i++){
              mijnArray.push(afbeeldingen[i].getAttribute("src"));
          }
      mijnArray.push(mijnArray.shift());
          console.log(mijnArray.join());
          //push en shift, telkens als er een foto bij komt moet de eerste verwijderd worden

      for(var j=0;j<afbeeldingen.length;j++){
          afbeeldingen[j].setAttribute("src",mijnArray[j]);
        //setAttribute foto's toevoegen
      }
      // console.log(mijnArray.join());
    }
      setInterval(doorgaanFoto,2500);

////////////////////////////////////////////////////////////////
var random2 = function(fotos2){
var randomGetal = 5;
return Math.floor((Math.random()* randomGetal)+1);
}

var doorgaanFoto2 = function(){
var afbeeldingen2 = document.getElementsByClassName("flick2");
var mijnArray2 = [];
  //console.log("werkt");
      for(var k=0; k<afbeeldingen2.length;k++){
          mijnArray2.push(afbeeldingen2[k].getAttribute("src"));
      }
  mijnArray2.push(mijnArray2.shift());
      console.log(mijnArray2.join());
      //push en shift, telkens als er een foto bij komt moet de eerste verwijderd worden

  for(var l=0;l<afbeeldingen2.length;l++){
      afbeeldingen2[l].setAttribute("src",mijnArray2[l]);
    //setAttribute foto's toevoegen
  }
  // console.log(mijnArray.join());
}
  setInterval(doorgaanFoto2,5000);

  ////////////////////////////////////////////////////////////////

        document.getElementById("Knop").onmouseover =function(){
          //console.log("werkt");
          if(document.getElementById("Knop").onmouseover){
            document.getElementById("about").style.display = "block";
            //console.log("werkt");
        } else {
          document.getElementById("about").style.display ="none";
        }
  }

        document.getElementById("about").style.display ="none";

    document.getElementById("Knop").onmouseout =function(){
    document.getElementById("about").style.display ="none";
  }
