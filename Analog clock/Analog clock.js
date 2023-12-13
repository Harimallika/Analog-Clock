const body = document.querySelector("body");
hourHand = document.querySelector(".hour");
minutesHand = document.querySelector(".minutes");
secondHand = document.querySelector(".seconds");
modeSwitch = document.querySelector(".mode-switch");

modeSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");

    const isDarkMode = body.classList.contains("dark");
    console.log(isDarkMode);
    modeSwitch.textContent = isDarkMode ? "LightMode" : "DarkMode";
    localStorage.setItem("mode", isDarkMode ? "DarkMode" : "LightMode");
})

const updateTime = () => {
    let date = new Date(),

    secToDeg = (date.getSeconds() / 60) *360;
    minTODeg = (date.getMinutes() / 60) *360;
    hrTODeg = (date.getHours() / 12) *360;

    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minutesHand.style.transform = `rotate(${minTODeg}deg)`;
    hourHand.style.transform = `rotate(${hrTODeg}deg)`;
};
setInterval(updateTime, 1000);

updateTime();