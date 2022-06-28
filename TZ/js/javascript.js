var cards_block = document.querySelector('.cards');
var cards = document.querySelectorAll('.cards > div');

function start() {
  var random = Math.floor(Math.random() * 36);
  cards_block.style.left = -random * 100 + 'px';
  setTimeout(function() {
    random++;
    cards[random].style.background = '#ACCEEB';
    cards[random].style.color = 'white';
  }, 5000)
}
setInterval(MY_FOO_2, 1000);  
function MY_FOO_2() { 

  peremennaya = document.getElementById("show_2").innerHTML; 

 

  if(peremennaya)

  {

    if(peremennaya !== 'stop timer' )

    {

      if(peremennaya !== '0' )

      {

      peremennaya =  peremennaya - 1;

      document.getElementById("show_2").innerHTML  =  peremennaya;  

      }

      else

      {

      alert("Время кончилось!");  document.getElementById("show_2").innerHTML  =  'stop timer'; 

      }      

    }

  }

}
