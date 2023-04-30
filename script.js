score = 0;
cross = true;
document.onkeydown = function(e){
    console.log("Key code is: ", e.keyCode)
    if(e.keyCode==38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            console.log('yes')
            dino.classList.remove('animateDino');
        },700);
    
    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 122 +"px";
    }
    if(e.keyCode==37){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 122) +"px";
    }
}

setInterval (() => {
    dino= document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver')
    obstacle = document.querySelector('.obstacle');


dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

offsetX = Math.abs(dx-ox);
offsetY = Math.abs(dy-oy);

if(offsetX<93 && offsetY<53){
    gameOver.style.visibility='visible';
    obstacle.classList.remove('obstacleAni');
}
else if(offsetX< 123 && cross){
    score += 1;
    updateScore(score);
    cross= false;
     setTimeout (() =>{
        cross=true;
     },1000);
setTimeout(() => {
     anydur =  parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
     newdur = anydur - 0.1;
     obstacle.style.animationDuration = newdur + 's';
     
},500);
}


},10);

function updateScore(score) {
    scoreCount.innerHTML = "your score is:  " + score
}