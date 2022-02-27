var Speechrecognition = window.webkitSpeechRecognition;
//Web SPeech API - convert speech to text
var recognition = new Speechrecognition();

function start() {
    document.getElementById("textInput_1").value = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textInput_1").value = content;
    if (content == "Selfie.") {
        Webcam.attach("#webcam");
        speak();
    }
}
Webcam.set({
    width: 450,
    height: 400,
    image_format: "png",
    png_quality: 100 //0=worst to 100=best
});

function speak() {
    var s = window.speechSynthesis;
    //api to convert text into speech
    var speakdata = "Taking your selfie in 5 seconds";
    var utterUp = new SpeechSynthesisUtterance(speakdata);
    s.speak(utterUp);
    setTimeout(function () {
        snapshot();
        save()
    }, 5000);
}

function snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("output").innerHTML = "<img id='img_1' src='" + data_uri + "'></img>";
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("img_1").src;
    link.href = image;
    link.click();
}