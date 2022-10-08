var btnTranslate = document.querySelector("#btn-translate")
var inputText = document.querySelector("#txt-input")
var outputText=document.querySelector("#txt-output")

var serverUrl = "https://api.funtranslations.com/translate/minion.json"


function finalUrl(txtInput)
{
    return serverUrl + "?" + "text="+ txtInput


}

function errorHandler(error)
{
    console.log("error occured:",error)
    alert("Something went wrong with the server, Please try again after some time")
}

function clickHandler()
{
    var txtInputValue = inputText.value
   
    fetch(finalUrl(txtInputValue)).then(response=>response.json())
    .then(json=>{
        
        var translatedText = json.contents.translated
        outputText.innerHTML=translatedText

    }).catch(errorHandler)



    
}




btnTranslate.addEventListener("click", clickHandler)