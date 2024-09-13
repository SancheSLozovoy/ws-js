function time() {
    let time = document.getElementById("clock");
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    
    time.getElementsByClassName('hour')[0].innerHTML = hour;
    time.getElementsByClassName('min')[0].innerHTML = min;
    time.getElementsByClassName('sec')[0].innerHTML = sec;

    return "smth";
}

let point;

function clockStart(){
    if(!point){
        point = setInterval(time, 1000);
    }
    time();
}

function clockStop(){
    clearInterval(point);
    point = null;
}

