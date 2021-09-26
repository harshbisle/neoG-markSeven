var textInput = document.querySelector('#txt-input');
var output = document.querySelector('#output');
var form = document.querySelector('#form');

var URL = "https://api.funtranslations.com/translate/yoda.json";

function getURL(text) {
    return URL + "?text=" + text;
}

function errorHandler(error) {
    alert("Error occured: " + error);
}

form.addEventListener("submit", function(e) {

    e.preventDefault();
    
    var input = textInput.value;

    fetch(getURL(input))
    .then(response => response.json())
    .then(json => {
        output.innerText = json.contents.translated;
    })
    .catch(errorHandler);
});