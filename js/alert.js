var { value: speed } = Swal.fire({
  title: "Choose a speed",
  confirmButtonText: "GO!",
  confirmButtonColor: "#b44d33",
  inputValue: "normal",
  input: "select",
  color: "black",
  allowOutsideClick: false,
  allowEscapeKey: true,
  inputOptions: {
    slow: "Slow",
    normal: "Normal",
    fast: "Fast",
  },
  inputPlaceholder: "Select Speed",
  showClass: {
    popup: "animate__animated animate__rollIn",
  },
  hideClass: {
    popup: "animate__animated animate__rollOut",
  },
  inputValidator: (value) => {
    return new Promise((resolve) => {
      if (value === "slow") {
        console.log("Slow Selected");
        speed = 60;
        resolve();
      } else if (value === "normal") {
        console.log("Normal Selected");
        speed = 40;
        resolve();
      } else if (value === "fast") {
        console.log("Fast Selected");
        speed = 20;
        resolve();
      } else {
        resolve("Select Speed");
      }
      var c = speed;
    });
  },
}).then((result) => {
  //if (speed != 10 || speed != 40 || speed != 70) speed = 40;
  document.getElementById("musicCheck").checked = true;
  document.getElementById("music").src = "audio/DoomMusic.mp3";
    document.getElementById("home").className =
      "animate__animated animate__shakeX animate__infinite animate_faster animate__delay-2s";
    document.getElementById("maze").className = "";
  console.log(speed);
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var scale = 2.3;
  ctx.scale(scale, scale);

  let labirint = () => {
    ctx.beginPath();
    ctx.stroke();
  };
  var snd = new Audio("audio/deathSound.mp3"); // buffers automatically when created
  var q=0;
  var b=false;
  var y = 0;
  var i=0;
  var x = 114;
  var nar = 1;
  var dx = 2;
  var dy = 2;
  var size = 9;
  var csize = 1.0;
  var isk = new Image();
  isk.src="image/doomGuyHelm.png";
  var enem= new Image();
  enem.src="image/enemy.png";
  pat1=ctx.createPattern(isk,"repeat");
  var g1 = ctx.createLinearGradient(0, 0, 200, 0);
  g1.addColorStop(0, "#610404");
  g1.addColorStop(0.35, "#b83b0c");
  g1.addColorStop(0.66, "#db4f1e");
  g1.addColorStop(1, "#ff9d48");

  let drawIt = () => {
    ctx.fillStyle = g1;
    if (nar == 1) {
      //ctx.fillRect(x, y, csize, csize); //koordinati + širina in višina
      i++;
      if(i==70){
      ctx.drawImage(enem,x-6,y-4,10,10);
      console.log(x+" "+y); 
      i=0; 
      }
      ctx.fillStyle = g1;
      labirint();
    } else if (nar == 2) {
      ctx.clearRect(x - 8, y - 8, 15, 15);
      ctx.drawImage(isk, x - 5, y - 5, size, size);
      labirint();
    }
    if(x==160 && y==68 && b==true) snd.play();
    if(x==232 && y==144 && b==true) snd.play();
    if(x==146 && y==196 && b==true) snd.play();
    if(x==80 && y==220 && b==true) snd.play();
    if (x == 114 && y >= 0 && y <= 8) y += dy;
    if (y == 6 && x >= 114 && x <= 150) x += dx;
    if (x == 150 && y >= 6 && y <= 28) y += dy;
    if (y == 28 && x >= 139 && x <= 160) x -= dy;
    if (x == 138 && y >= 18 && y <= 53) y += dy;
    if (y == 54 && x >= 50 && x <= 146) x += dx;
    if (x == 148 && y >= 35 && y <= 76) y += dy;
    if (y == 76 && x >= 50 && x <= 160) x += dx;
    if (x == 160 && y >= 67 && y <= 77) y -= dy;
    if (y == 66 && x >= 151 && x <= 171) x += dx;
    if (x == 172 && y >= 65 && y <= 100) y += dy;
    if (y == 102 && x >= 51 && x <= 207) x += dx;
    if (x == 208 && y >= 100 && y <= 125) y += dy;
    if (y == 126 && x >= 51 && x <= 230) x += dx;
    if (x == 232 && y >= 120 && y <= 171) y += dy;
    if (y == 172 && x >= 223 && x <= 325) x -= dx;
    if (x == 222 && y >= 164 && y <= 271) y -= dy;
    if (y == 162 && x >= 212 && x <= 230) x -= dx;
    if (x == 210 && y >= 150 && y <= 171) y += dy;
    if (y == 172 && x >= 175 && x <= 210) x -= dx;
    if (x == 174 && y >= 150 && y <= 186) y += dy;
    if (y == 184 && x >= 163 && x <= 210) x -= dx;
    if (x == 162 && y >= 150 && y <= 195) y += dy;
    if (y == 196 && x >= 140 && x <= 210) x -= dx;
    if (x == 138 && y >= 173 && y <= 219) y += dy;
    if (y == 220 && x >= 128 && x <= 210) x -= dx;
    if (x == 126 && y >= 188 && y <= 229) y -= dy;
    if (y == 186 && x >= 116 && x <= 126) x -= dx;
    if (x == 114 && y >= 88 && y <= 194) y += dy;
    if (y == 196 && x >= 92 && x <= 125) x -= dx;
    if (x == 90 && y >= 88 && y <= 206) y += dy;
    if (y == 208 && x >= 82 && x <= 125) x -= dx;
    if (x == 80 && y >= 8 && y <= 230) y += dy;
    if (y == 232 && x >= 80 && x <= 124) x += dx;
    if (x == 126 && y >= 228 && y <= 240) y += dy;
    if (x == 126 && y == 242) {
      if(b==false)
      b=true;
      else
      
      b=false;
      x = 114;
      y = 0;
      if (nar == 1) nar++;
      else {
        snd="";
        document.getElementById("musicCheck").checked = false;
        document.getElementById("music").src = "music/";
        document.getElementById("home").className = "";
        ctx.clearRect(100, 244, 200, 300);
        nar++;
        Swal.fire({
          title: "Maze Finished",
          text: "Click 'RESTART!' to restart",
          confirmButtonColor: "#b44d33",
          confirmButtonText: "RESTART!",
          color: "black",
          allowOutsideClick: false,
          showClass: {
            popup: "animate__animated animate__bounce",
          },
        }).then((value) => {
          snd="";//stran sound efekt
          document.getElementById("wrapper").className =
            "animate__animated animate__rollOut";
          document.getElementById("home").className =
            "animate__animated animate__rollOut";
          setTimeout(function () {
            location.reload();
          }, 700);
        });
      }
    }
  };
  setInterval(drawIt, speed);
});
