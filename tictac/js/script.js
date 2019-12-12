
var box=document.querySelectorAll(".gridsection div");
var msg=document.getElementById("message");
var value=0,i,j=0,player1="X",player2="O";

function getP1()
{
  player1=document.getElementById("p1").value;
  console.log(player1);
}
function getP2()
{
  player2=document.getElementById("p2").value;
}

//**************Function To select the winner**************//

function selectWinner(g1,g2,g3)
{
      g1.style.background = "orange";
      g2.style.background = "orange";
      g3.style.background = "orange";
      msg.style.visibility= "visible";
      if(g1.innerHTML==="O")
        msg.innerHTML = player2+" Won..Congrats!";
      else
        msg.innerHTML = player1+" Won..Congrats!";
}

//*************************Function to get all the winnning possibilities*****************************//

function possibilities()
{
    var g1=document.getElementById("one");
    var g2=document.getElementById("two");
    var g3=document.getElementById("three");
    var g4=document.getElementById("four");
    var g5=document.getElementById("five");
    var g6=document.getElementById("six");
    var g7=document.getElementById("seven");
    var g8=document.getElementById("eight");
    var g9=document.getElementById("nine");

    if (g1.innerHTML !=="" && g1.innerHTML === g2.innerHTML && g1.innerHTML === g3.innerHTML) {
      console.log("first");
      selectWinner(g1,g2,g3);
    }
    if (g1.innerHTML !=="" && g1.innerHTML === g5.innerHTML && g1.innerHTML === g9.innerHTML) {
      console.log("scnd");
      selectWinner(g1,g5,g9);
    }
    if (g1.innerHTML !=="" && g1.innerHTML === g4.innerHTML && g1.innerHTML === g7.innerHTML) {
      console.log("thre");
      selectWinner(g1,g4,g7);
    }
    if (g2.innerHTML !=="" && g2.innerHTML === g5.innerHTML && g2.innerHTML === g8.innerHTML) {
      console.log("four");
      selectWinner(g2,g5,g8);
    }
    if (g3.innerHTML !=="" && g3.innerHTML === g6.innerHTML && g3.innerHTML === g9.innerHTML) {
      console.log("five");
      selectWinner(g3,g6,g9);
    }
    if (g3.innerHTML !=="" && g3.innerHTML === g5.innerHTML && g3.innerHTML === g7.innerHTML) {
      console.log("six");
      selectWinner(g3,g5,g7);
    }
    if (g4.innerHTML !=="" && g4.innerHTML === g5.innerHTML && g4.innerHTML === g6.innerHTML) {
      console.log("sevn");
      selectWinner(g4,g5,g6);
    }
    if (g7.innerHTML !=="" && g7.innerHTML === g8.innerHTML && g7.innerHTML === g9.innerHTML) {
      console.log("eght");
      selectWinner(g7,g8,g9);
    }
}

//************Main Logic************//

for(i=0;i<box.length;i++)
{
    box[i].onclick=function(){
    j++;
    if(j==9)
      //msg.innerHTML = "Game Over!!!";

      window.alert("Game over!!");
    else {
    if(this.innerHTML !== "X" && this.innerHTML !== "O")
    {

        if(value % 2 === 0)
        {

          console.log(value);
          this.innerHTML = "X";
          possibilities();
          value+=1;
        }
        else
        {
          console.log(value);
          this.innerHTML = "O";
          possibilities();
          value+=1;
        }
    }
  }
    console.log("chance=" +j);
};
}

//***************Function to start the game************//

function start()
{
    if(player1==="X"&&player2==="O")
    {
      document.getElementById("start").style.visibility="hidden";
      document.getElementById("play").style.visibility="hidden";
      document.getElementById("grids").style.visibility="hidden";
      document.getElementById("replay").style.visibility="hidden";
      document.getElementById("reset").style.visibility="hidden";
    }
    else
    {
      document.getElementById("start").style.visibility="visible";
      document.getElementById("play").style.visibility="visible";
      document.getElementById("grids").style.visibility="visible";
      document.getElementById("replay").style.visibility="visible";
      document.getElementById("reset").style.visibility="visible";
   }
}

//*********For performing reset operation**********//

function reset()
{
        msg.style.visibility= "hidden";
        document.getElementById("start").style.visibility="hidden";
        document.getElementById("play").style.visibility="hidden";
        document.getElementById("p1").value="";
        document.getElementById("p2").value="";
        document.getElementById("grids").style.visibility="hidden";
        document.getElementById("replay").style.visibility="hidden";
        document.getElementById("reset").style.visibility="hidden";

        j=0;value=0;
        for(var i = 0; i < box.length; i++)
        {
                box[i].innerHTML = "";
                box[i].style.backgroundColor = "#fff";
        }
}

//*********For performing replay operation**********//

function replay()
{
        msg.style.visibility= "hidden";
        j=0;value=0;
        for(var i = 0; i < box.length; i++)
        {
                box[i].innerHTML = "";
                box[i].style.backgroundColor = "#fff";
        }
}
