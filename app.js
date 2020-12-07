var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {
    translatedUrl = serverUrl + "?" + "text=" + text;
    return translatedUrl;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong!!");
}

function clickHandler() {
    var textValue = inputText.value;
    fetch(getTranslationUrl(textValue))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)