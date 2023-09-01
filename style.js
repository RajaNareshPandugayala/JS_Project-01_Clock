function updateClock() {

    let hours = new Date().getHours();

    let ampm = document.getElementById("ampm");
    ampm.innerText = (hours <= 11 ? 'AM' : 'PM');

    let hrs = document.getElementById('hrs');
    hrs.innerText = (hours = hours > 12 ? hours - 12 : hours);
    hrs.innerText = (hours = hours < 10 ? "0" + hours : hours);

    let minutes = new Date().getMinutes();
    let mins = document.getElementById('mins');
    mins.innerText = (minutes = minutes < 10 ? "0" + minutes : minutes);

    let seconds = new Date().getSeconds();
    let secs = document.getElementById('secs');
    secs.innerText = (seconds = seconds < 10 ? "0" + seconds : seconds);


    setTimeout(() => {
        updateClock()
    }, 1000);

}
updateClock()



function morning() {
    let hours = new Date().getHours();

    let morning = document.getElementById("morning");

    // morning.innerText = (hours = hours >= 20 ? "GOOD NIGHT !!" : (hours = hours >= 16 ? "GOOD EVENING !!" : (hours = hours >= 12 ? "GOOD AFTERNOON !! TAKE SOME SLEEP" : (hours = hours >= 10 ? "GOOD MORNING!! WAKE UP!!" : "GOOD NIGHT !!"))))

    //or
    morning.innerText = (hours >= 20 ? "GOOD NIGHT !!" : hours >= 16 ? "GOOD EVENING !!" : hours >= 12 ? "GOOD AFTERNOON !! TAKE SOME SLEEP" : hours >= 10 ? "GOOD MORNING!! WAKE UP!!" : "GOOD NIGHT !!");
}
morning()



let leftButton = document.getElementById('leftbutton');
let alarmMessage = document.getElementById('message');
let breakFast = document.getElementById('breakfast');
let end_image = document.getElementById('end_image');
let image = document.getElementById('image');

let wakeUpTime = document.getElementById('time10');
let lunchTime = document.getElementById('time12');
let napTime = document.getElementById('time16');
let nightTime = document.getElementById('time20');



function setAlarm() {
    let hours = new Date().getHours();



    breakFast.innerHTML = (parseInt(wakeUpTime.value) === hours ? "GRAB SOME HEALTHY BREAKFAST!!!" : (parseInt(lunchTime.value) === hours ? "LET'S HAVE SOME LUNCH!!" : (parseInt(napTime.value) === hours ? "STOP YAWNING, GET SOME TEA..<br>ITS JUST EVENING!" : (parseInt(nightTime.value) === hours ? "CLOSE YOUR EYES AND GO TO SLEEP" : "!!!SET THE TIME!!!"))))



    end_image = (parseInt(wakeUpTime.value) === hours ? image.src = "./image1.jpg" : (parseInt(lunchTime.value) === hours ? image.src = "./image2.jpg" : (parseInt(napTime.value) === hours ? image.src = "./image3.jpg" : (parseInt(nightTime.value) === hours ? image.src = "./image4.jpg" : image.src = "./image5.jpg"))))



    alarmMessage.innerHTML = `Wake up Time: ${wakeUpTime.options[wakeUpTime.selectedIndex].text}<br>Lunch Time: ${lunchTime.options[lunchTime.selectedIndex].text}<br>Nap Time: ${napTime.options[napTime.selectedIndex].text}<br>Night Time: ${nightTime.options[nightTime.selectedIndex].text}`;



}
leftButton.addEventListener('click', setAlarm);
