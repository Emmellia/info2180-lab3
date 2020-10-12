"use strict";

    window.onload= function(){
    var element=document.getElementById("board").children;
    var newGameBtn=document.getElementsByClassName("btn")[0];
    var status=document.getElementById("status");
    var gameState=[];
    var winCombos =[ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]] ;
    let playerO_Turn;
  
    // Looping through each div element and adding square class to it
    for (var i= 0; i<element.length; i++){
        element[i].classList.add("square");
    }
        
    //Looping through the div elements and adding actionlistener to each cell to perform an action when triggered
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

            square.addEventListener("mouseover", function(){
                if (square.textContent=="O"){
                    square.classList.add(".hover.O");
                }
            });
          
    }

    
     
    // Handles the event when a square is clicked and alternate the plays of each player
    function playerTurn(e){
        const cell=e.target;
        const PLAYER_X=cell.textContent="X";
        const PLAYER_O=cell.textContent="O";
        const currentPlay= playerO_Turn ? PLAYER_O :  PLAYER_X;
        placeMark(cell, currentPlay)
        switchTurn()
        checkWin() 

    }

    //Displays the "X" or "O" value for each square when player make their moves and keeps check of the game
    function placeMark(cell, currentPlay){
        cell.textContent=currentPlay;
        cell.classList.add(currentPlay);
        gameState.push(currentPlay);
        
    }

    
    //Alternate the plays of the players
    function switchTurn(){
        playerO_Turn=!playerO_Turn;
    }


    function checkWin(c){
        for(let a=0; a<winCombos.length; a++){
            let winning_row=winCombos[a];
            let w1=winning_row[0];
            let w2=winning_row[1];
            let w3=winning_row[2];  
            
            let index_O=getIndex(gameState, "O");
            let index_X=getIndex(gameState,"X");

            for (let s=0; s<index_X.length; s++){
                if(index_X[s]== w1 && w2 && w3){
                    status.textContent="Congrats player X won"
            }
        }
          
        
        for (let z=0; z<index_O.length; z++){
            if(index_O[z]== w1 && w2 && w3){
                status.textContent=" Congrats player O won";
             }
           }
          }
        }

    


function getIndex(gameState, val){
    var indexes= [], i=-1;
    while((i=gameState.indexOf(val, i+1)) !=-1){
        indexes.push(i);
    }
    return indexes;
}























    };

   
    
    
