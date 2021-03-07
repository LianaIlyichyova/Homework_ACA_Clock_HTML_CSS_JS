function clock(){
    let hours=document.getElementById("hours");
    let minutes=document.getElementById("minutes");
    let seconds=document.getElementById("seconds");
    let date=new Date();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();
    hours.innerHTML = (hour < 10)? ("0"+hour) : hour;
    minutes.innerHTML = minute < 10 ? "0"+minute : minute;
    seconds.innerHTML = second< 10 ? "0"+second : second;
}
setTimeout(clock,0);
setInterval(clock,1000);