
     function dontstart() {
    window.location.href = "bad.html";
     }
     function showname(){
       var username= document.getElementById('user').value;
       document.getElementById("named").innerHTML= ("Bienvenida  "+ username);
       showwindow.style.display = "none"
    }
  //botones
   function answerOnea() {
     var numoa =3;
     var oneanaweronea= document.getElementById("aa").value;
     document.getElementById('oneanswer').innerHTML= ("<li>El es el gran mago</li>");
    }
    function answerOneb(){
      var numob =4;
      var oneaq= document.getElementById("aa").value;
      document.getElementById('oneanswer').innerHTML= ("<li>Solo queda disponible un elfo judio :( </li>");
    }
    function answerOnec(){
      var numoc =5;
      var oneaq= document.getElementById("aa").value;
      document.getElementById('oneanswer').innerHTML= ("<li>Serias un buen guerrero</li>");
    }


    function answerTwoa(){
      var numta = 3;
      var oneaq= document.getElementById("bb").value;
      document.getElementById('twoanswer').innerHTML= ("<li>Es de madera por que no habia presupuesto</li>");
    }
    function answerTwob(){
      var numtb= 5;
      var oneaq= document.getElementById("bb").value;
      document.getElementById('twoanswer').innerHTML= ("<li>Tiembla Harry Potter, Gandalf </li>");
    }
    function answerTwoc(){
      var numtc= 1;
      var oneaq= document.getElementById("bb").value;
      document.getElementById('twoanswer').innerHTML= ("<li>Tal vez tus amigos se burlen de ti pero espera a que esten heridos</li>");
    }

    function answerThreea(){
      var numtha = 1;
      var oneaq= document.getElementById("cc").value;
      document.getElementById('threeanswer').innerHTML= ("<li>Esta lindo, se llama Sparky</li>");
    }
    function answerThreeb(){
      var numthb = 1;
      var oneaq= document.getElementById("cc").value;
      document.getElementById('threeanswer').innerHTML= ("<li>Cuando lo pateas tu enemigo es derrotado</li>");
    }
    function answerThreec(){
      var numthc = 1;
      var oneaq= document.getElementById("cc").value;
      document.getElementById('threeanswer').innerHTML= ("<li>Si ya se, suena mal</li>");
    }


    function answerFoura(){
      var numfa= 2;
      var oneaq= document.getElementById("dd").value;
      document.getElementById('fouranswer').innerHTML= ("<li>Son buenos peleadores pero no te prometo nada</li>");
    }
    function answerFourb(){
      var numfb= 1;
      var oneaq= document.getElementById("dd").value;
      document.getElementById('fouranswer').innerHTML= ("<li>El gran mago y su ejercito te van a proteger</li>");
    }
    function answerFourc(){
      var numfc= 5;
      var oneaq= document.getElementById("dd").value;
      document.getElementById('fouranswer').innerHTML= ("<li>Terminando esta trivia corre a ver Crepusculo</li>");
    }
  //  var img = "<img src='https://i.pinimg.com/originals/14/dc/61/14dc6168ac645d35f519b209e4e04e10.jpg'>";
  function verrespu(){
  //  document.getElementById('imacharac').innerHTML= img;
var myArray = [
    "<img src='https://i.pinimg.com/originals/14/dc/61/14dc6168ac645d35f519b209e4e04e10.jpg'>",
    "<img src='https://vignette.wikia.nocookie.net/southpark/images/6/64/Kbsotcc.jpg.jpg/revision/latest?cb=20140315001101'>",
    "<img src='https://vignette.wikia.nocookie.net/spsot/images/4/4d/Cartman_Character_Card.jpg/revision/latest?cb=20140223223713'>",
    "<img src='http://4.images.southparkstudios.com/blogs/southparkstudios.com/files/2014/02/SPRK083_Facebook_Cards5.jpg?quality=0.8'>",
    "<img src='https://vignette.wikia.nocookie.net/spsot/images/b/ba/Butters_Character_Card.png/revision/latest?cb=20140223223344'>",
 ]
  var rand = myArray[Math.floor(Math.random() * myArray.length)];
  document.getElementById('imacharac').innerHTML= (rand);//
  }
