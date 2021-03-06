const alarmBtn = document.getElementById('alarmBtn');

alarmBtn.addEventListener('click', setAlarm);
snoozeDiv = document.getElementById('SnoozeDiv');

audio = new Audio("goshorty.mp3");

function snooze()
{   
    audio.pause();
    audio.currentTime = 0;
    snoozeDiv.innerHTML = ``;
}

function ringBell(){
    audio.play();
    snoozeDiv.innerHTML = `<br><button type="submit" class="btn btn-primary" id="snooze">Snooze</button>`;
    snoozeBtn = document.getElementById('snooze');
    snoozeBtn.addEventListener('click', snooze);
}

function setAlarm(e){

    const alarm = document.getElementById('date').value;
    alarmDate = new Date(alarm);
    now = new Date();
    let timeToNow = alarmDate - now;
    console.log(now);

    if (timeToNow>= 0){
        setTimeout(() => {
            console.log('ringing now...');
            ringBell();
        }, timeToNow);
    }

    console.log(`Setting Alarm....... for ${alarmDate}`);
    alert(`Alarm Set ${Math.ceil(timeToNow / 60000)} Minutes From Now`);

    e.preventDefault();
}