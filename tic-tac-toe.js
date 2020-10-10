"use strict";

    window.onload= function(){
    var body= document.getElementsByTagName("body");
    var childrenElement=document.body.children;
    var element=document.getElementById("board").children;
    var gameState=[];
    let playerO_Turn;
    

    for (var i= 0; i<element.length; i++){
        element[i].classList.add("square");
    }
        console.log(element);
        //console.log(PLAYER_X);

    for(var c=0; c<element.length; c++){
        let square=element[c];
        square.addEventListener("click", playerTurn, { once:true
            });

            square.addEventListener("mouseover", function(){
                square.classList.add("hover");
                });
            square.addEventListener("mouseout",function(){
                square.classList.remove("hover");
            })
          
    }

    function playerTurn(e){
        const cell=e.target;
        const PLAYER_X=cell.textContent="X";
        const PLAYER_O=cell.textContent="O";
        const currentPlay= playerO_Turn ? PLAYER_O :  PLAYER_X;
        placeMark(cell, currentPlay)
        switchTurn()

    }
 
    function placeMark(cell, currentPlay){
        cell.textContent=currentPlay;
        cell.classList.add(currentPlay);
    }

    function switchTurn(){
        playerO_Turn=!playerO_Turn;
    }



    };

   
    
    


