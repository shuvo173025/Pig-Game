var dice,activeplayer,roundscore,scores,gameplaying,x,bb;

//by default winning score
x=100;


//finding wining score
document.querySelector('.btn-click').addEventListener('click',function(){
    
    x = document.getElementById('Wining-score').value;
    if(bb && x){
   document.getElementById('Wining-score').value = 'Your wining score is '+x+' .Please play & Bust of Luck!';
        bb = false;
    }
});


init();


//roll-button event
document.querySelector('.btn-roll').addEventListener('click',function(){
    
    //initialize dice as variable
     var D=document.querySelector('.dice');
     var D1=document.querySelector('.DDice');
    

    if(gameplaying){
        
    //random number
     dice =Math.floor((Math.random()*6)+1);
     dice1 =Math.floor((Math.random()*6)+1);
        
        console.log(dice,dice1);
    
    //Display dice
    D.style.display = 'block';
    D1.style.display = 'block';
    D.src='dice-'+dice+'.png';
    D1.src='dice-'+dice1+'.png';
    
    //summerising current score
    if(dice !== 1 && dice1 !==1){
        
        //counting two six
        if(dice===6 && dice1===6){
            first++;
        }
        else{
            first = 0;
        }
        
        //checking two six
        if(first===3){
            six();
        }else{   
    
        //add score
         roundscore = roundscore + dice + dice1;
         document.querySelector('#current-'+activeplayer).textContent= roundscore;
        }
    }else{
        //next player
       nextplayer();
       D.style.display = 'none';
       D1.style.display = 'none';
    }
    }
});

//hold-button event
document.querySelector('.btn-hold').addEventListener('click',function(){
    
    //initialize dice as variable
     var D=document.querySelector('.dice');
     var D1=document.querySelector('.DDice');
    
    if(gameplaying){
        
    //add total score
     scores[activeplayer] = scores[activeplayer] + roundscore;
    
    //updating in user interface
     document.querySelector('#score-'+activeplayer).textContent = scores[activeplayer];
     document.getElementById('current-'+activeplayer).textContent = '0';
    
    //checking winner
    if( scores[activeplayer]>=x){
        
        //updating in user interface for winner
        document.querySelector('#name-'+activeplayer).textContent = 'Winner Winner Chicken Dinner!';
        document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
        D.style.display = 'none';
        D1.style.display = 'none';
        gameplaying = false;
        
        }else{
            
            //next player
             nextplayer();  
             D.style.display = 'none';
             D1.style.display = 'none';
     }
    }
});

//function for next player
function nextplayer(){
    //next player switch
     if(activeplayer===0){
            activeplayer=1;
        }else{
            activeplayer=0;
        }
    
    //updating in user interface for next player
    roundscore=0;
     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';
    
     //changing active class
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
}


//new-button event
document.querySelector('.btn-new').addEventListener('click',init);

//showing game rule function
document.querySelector('.btn-rule').addEventListener('click',function(){
            
    var rule = 'RULE.html';
    window.open(rule,'_blank');
                                                
});
                                                    
//function for initilizing game
function init(){
    
scores=[0,0];
activeplayer = 0;
roundscore = 0;
gameplaying = true;
    bb = true;
document.querySelector('.dice').style.display = 'none';
document.querySelector('.DDice').style.display = 'none';
document.querySelector('#name-0').textContent = 'player-1';
document.querySelector('#name-1').textContent = 'player-2';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.add('active');
document.getElementById('Wining-score').value = null;
      
}

//what happen if two six in row
function six(){
    
    //chalenge
document.getElementById('score-'+activeplayer).textContent = '0';
    
    //next player
    nextplayer();   
}



