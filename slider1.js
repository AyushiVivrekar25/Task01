function swap(){
    var leftID = document.getElementById('pic_left');
        rightID = document.getElementById('pic_right');
        
        // extraID = document.getElementById('pic_extra');
        leftSRC = leftID.src;
        rightSRC = rightID.src;
       
    leftID.src = rightSRC;
    rightID.src = leftSRC;
    // rightID.src = middleSRC;


}
function Swap(){

 var rightID = document.getElementById('pic_right');
        middleID = document.getElementById('pic_middle');
        
        // extraID = document.getElementById('pic_extra')
        rightSRC = rightID.src;
        middleSRC = middleID.src;
       
    rightID.src = middleSRC;
    middleID.src = rightSRC;
    // rightID.src = middleSRC;


}