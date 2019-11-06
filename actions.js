window.onload = function () {
  start();
  slider();
}

/******************
 **BALLOON SLIDING**
 *******************/
addEventListener("wheel", slider);
addEventListener("mousemove", slider);
addEventListener("mouseover", slider);
addEventListener("mouseout", slider);
addEventListener("click", slider);
addEventListener("onmousedown", slider);
addEventListener("onmouseup", slider);
addEventListener("onkeydown", slider);
addEventListener("onkeyup", slider);


function slider() {
  var balloon = document.getElementById("chat");
  var y = 200;
  var pageSize = document.body.clientHeight;

  if (y < 1500) { /*avoid bottom enddless scrolling*/
    y += document.documentElement.scrollTop;
    if (y > 200) {
      y += (300); //a 4th of page
    }
    balloon.style.top = y + 'px'; //dynamic var y
  }
}

/*********************
 **ARCHTECT EFFECT**
 **********************/
function archtectEffect() {
  var archtectOver = document.getElementById("archtectOver");
  var tiles = document.getElementsByClassName("tiles");
};

/*****************
 **BALLON SPLITER**
 ******************/
var audio = document.getElementsByTagName("audio")[0];

var chat = document.getElementById("chat");
var chatTXT = chat.getElementsByTagName("b")[0];
var wapp = document.getElementById("wapp");
var lchat = document.getElementById("liveChat");
var email = document.getElementById("email");

chat.onmouseover = function () {
  chatTXT.style.opacity = "0";

  wapp.style.top = "-40%";
  wapp.style.opacity = "1";
  lchat.style.left = "60%";
  lchat.style.opacity = "1";
  email.style.left = "-30%";
  email.style.opacity = "1";
  sound();
}

chat.onmouseout = function () {
  chatTXT.style.opacity = "";

  wapp.style.top = "";
  wapp.style.opacity = "";
  lchat.style.left = "";
  lchat.style.opacity = "";
  email.style.left = "";
  email.style.opacity = "";
}

function sound() {
  var delay = 5000;
  var turn = 2;

  if (delay == 0 && turn % 2 != 0) {
    setTimeout(function () {
      console.log("sound!");
      turn++;
      delay++;
    }, delay);
  }
}


/****************************
 **SINUSOIDAL WAVES |CANVAS|**
 *****************************/

function Sinusoidal(id, color, pct) { /*canvas name, color, width, height*/
  var canvas = document.getElementById(id);
  var stroke = 2; //line thickness
  var alpha = 0.7;// general transparency
  var cycles = 100; //frequency, cycles/ms. More = Slows
  var amplitude = 0.05; //the lower reduce line width and smoth bounce
  var crispy = 0.01; //the higher line crisper
  var x = 0; //horizontal = x
  var y = 0; //vertical = y = sin(x)
  //var y = Amplitude*Math.Sin*Frequency*(x-Shift)*Math.PI
  var control;
  var isPaused = false;
  var phase = canvas.height * 0.5;
  var h2 = document.getElementById("list").getElementsByTagName("h2");
  var liColor = window.getComputedStyle(h2[color], "").getPropertyValue("color");

  if (canvas != null) {
    var ctx = canvas.getContext('2d');
    var PI = Math.PI;
    control = setInterval(wave, cycles); //call wave() every x cycles

    function wave() {
      if (canvas.onclick == null) {
        isPaused;
      } else {
        ctx.save();
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.beginPath();
          ctx.moveTo(0, canvas.height);

          for (x = -5; x < canvas.width + 5; x += 4) { //when x bigger slower       
            amplitude += 0.002; //smaller = slower
            y = canvas.height * 0.5 - (Math.random() * crispy + Math.sin((x / PI / 2) + amplitude)) * phase;
            ctx.lineTo(x, y);
          } //end of for

          //Canvas elements assume same color as css, if fail is grey
          ctx.strokeStyle = liColor || 'grey';
          ctx.globalAlpha = alpha * 0.2;
          ctx.lineWidth = stroke;
          ctx.stroke();

          /*ctx.shadowColor = 'rgba(0,200,0,0.5)';
          ctx.shadowOffsetX = 3;
          ctx.shadowColor = 'rgba(0,200,0,0.5)';
          ctx.shadowBlur = 16;
          ctx.font = "25px Calibri Light";
          ctx.fillText(txt,sizeX/3,sizeY);
          ctx.fillStyle = 'rgba(255,255,255,1)';*/
        ctx.restore();

        //cover wave with pct_val
        ctx.save();
          ctx.beginPath();
          ctx.rect(0, 0, pct * canvas.width, canvas.height);
          ctx.globalAlpha = alpha * 0.3;
          ctx.fillStyle = liColor || 'grey';
          ctx.fill();
        ctx.restore();

        //cover wave w/ pct_val remaining
        ctx.save();
          ctx.beginPath();
          ctx.rect(pct * canvas.width, 0, (1 - pct) * canvas.width, canvas.height);
          ctx.fillStyle = "#FFF";
          ctx.fill();

          ctx.beginPath();
          ctx.globalAlpha = alpha * 0.1;
          ctx.rect(pct * canvas.width, 0, (1 - pct) * canvas.width, canvas.height);
          ctx.fillStyle = liColor  || 'grey';
          ctx.fill();
        ctx.restore();
      } //end of else else
    } //end of wave()
  } //end of null verification

} // end of Sinusoidal()


/*Get Content # from page and turn into % pct_valage*/
var pct0 = (parseInt(document.getElementsByClassName("pct_val")[0].textContent));
var pct1 = (parseInt(document.getElementsByClassName("pct_val")[1].textContent));
var pct2 = (parseInt(document.getElementsByClassName("pct_val")[2].textContent));
var pct3 = (parseInt(document.getElementsByClassName("pct_val")[3].textContent));
var pct4 = (parseInt(document.getElementsByClassName("pct_val")[4].textContent));
var pct5 = (parseInt(document.getElementsByClassName("pct_val")[5].textContent));
var pct6 = (parseInt(document.getElementsByClassName("pct_val")[6].textContent));

//set element to same position as its textContent
document.getElementsByClassName("pct_val")[0].style.left = (pct0) + "%";
document.getElementsByClassName("pct_val")[1].style.left = (pct1) + "%";
document.getElementsByClassName("pct_val")[2].style.left = (pct2) + "%";
document.getElementsByClassName("pct_val")[3].style.left = (pct3) + "%";
document.getElementsByClassName("pct_val")[4].style.left = (pct4) + "%";
document.getElementsByClassName("pct_val")[5].style.left = (pct5) + "%";
document.getElementsByClassName("pct_val")[6].style.left = (pct6) + "%";

function start() {
  isPaused = false;
  /*Sinusoidal(id, color)*/
  var sin0 = new Sinusoidal("javascript", 0, pct0 / 100);
  var sin1 = new Sinusoidal("jquery", 1, pct1 / 100);
  var sin2 = new Sinusoidal("html5", 2, pct2 / 100);
  var sin3 = new Sinusoidal("css3", 3, pct3 / 100);
  var sin4 = new Sinusoidal("php", 4, pct4 / 100);
  var sin5 = new Sinusoidal("mysql", 5, pct5 / 100);//my
  var sin6 = new Sinusoidal("photoshop", 6, pct6 / 100);
}

function pause() { //flag
  isPaused = true;
}

function mouseOver() {

}

function mouseOut() {

}