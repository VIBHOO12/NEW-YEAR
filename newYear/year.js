var messege = "Happy New Year 🥳🎉 " ;

var msgCount = 0;
var blinkCount = 0;
var blinkFlg = 0;
var timer1, timer2;
var messegeLebel = document.getElementById("messegeLebel");

function textFunc(){
    messegeLebel.innerHTML = messege.substring(0, msgCount);

    if(msgCount == messege.length) {
        clearInterval(timer1);
        timer2 = setInterval("blinkFunc()", 300);

    } else {
        msgCount++;
    }
}
function blinkFunc() {
    if(blinkCount < 6){
        if(blinkFlg == 0) {
            messegeLebel.innerHTML = messege;
            blinkFlg = 1;
            blinkCount++;
        } else {
            messegeLebel.innerHTML = "";
            blinkFlg = 0;
        }
    } else {
        clearInterval(timer2);
    }
}
timer1 = setInterval("textFunc()", 150);