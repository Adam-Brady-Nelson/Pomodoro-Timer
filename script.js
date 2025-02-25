var mins = 25;
var seconds = 0;
var color = false;
var isRunning = false;
let myVar;

function clockCountdown()
{
    isRunning = true;
    document.getElementById("time").innerText = mins + ":" + ((seconds < 10) ? "0"+seconds : seconds);
    if(mins == 0 && seconds <= 59 && color == false)
    {
        colorAndEdgeChange();
        color = true;
    }

    if(mins == 0 && seconds == 0)
    {
        document.getElementById("time").innerText = "0:00";
        alert("Timer finished, time to take a break!");
        clearInterval(myVar);
        return
    }else{
        if(seconds == 0)
        {
            mins--;
            seconds=60;
        }

        
        seconds--;
    }
}

function colorAndEdgeChange()
{
    document.getElementById("time").style.color = "red";
    document.getElementById("timer").style.backgroundColor = "orange";
    document.getElementById("timer").style.borderRadius = "5px";
}

function countdownStart()
{
    if(!isRunning)
    {
        myVar = setInterval(clockCountdown, 1000);
        document.getElementById("pause").innerText = "Pause";
        document.getElementById("pause").onclick = countdownStop;
        isRunning = !isRunning;
    }else{
        return;
    }
}

function countdownStop()
{
    if(isRunning)
    {
        document.getElementById("pause").innerText = "Resume";
        document.getElementById("pause").onclick = countdownStart;
        clearInterval(myVar);
        isRunning = !isRunning;
    }else{
        return;
    }
}

function reset()
{
    mins = 25;
    seconds = 0;
    countdownStop();
    isRunning = false;
    document.getElementById("timer").style.borderRadius = "0px";
    document.getElementById("time").style.color = "black";
    document.getElementById("timer").style.backgroundColor = "white";
    document.getElementById("time").innerText = mins + ":" + seconds + "0";
    document.getElementById("pause").innerText = "Pause";
}