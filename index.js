//Qualifier

var headerContainer = document.getElementById('header')
var header = document.createElement("h1")
var smallHeader = document.createElement("h2")
var nme = document.createElement("span")
header.textContent = "JavaScript Made This!!"
smallHeader.textContent = "wrote the javaScript"
nme.textContent = "[Danielle] "
headerContainer.append(header, smallHeader)
smallHeader.prepend(nme)
headerContainer.style.textAlign= "center"
nme.style.color = "gold"

//bronze
var firstLeftMsg = document.getElementsByClassName("left message")[0]
var secondLeftMsg = document.getElementsByClassName("left message")[1];
var firstRightMsg = document.getElementsByClassName("right message")[0];
var secondRightMsg = document.getElementsByClassName("right message")[1];
firstLeftMsg.textContent = "OMG! GUESS WHAT?!?!"
secondLeftMsg.textContent = "Chicken Butt...LOL"
firstRightMsg.textContent = "What??"
secondRightMsg.textContent = "Delete my number."


document.getElementById("clear-button").addEventListener("click", function clearMsgs(){

    document.getElementsByClassName("left message")[0].textContent = null
    document.getElementsByClassName("left message")[1].textContent = null
    document.getElementsByClassName("right message")[0].textContent = null
    document.getElementsByClassName("right message")[1].textContent = null
})

//silver


var dropDown = document.getElementById("theme-drop-down")
dropDown.addEventListener('change', function changeColor(){
firstLeftMsg.setAttribute('style', 'background-color: red')
secondLeftMsg.setAttribute('style', 'background-color: red')
firstRightMsg.setAttribute('style', 'background-color: black')
secondRightMsg.setAttribute('style', 'background-color: black')

}
)

//gold



var form = document.getElementsByName("message")
var sendButton = form[0].getElementsByTagName("button")[0]
var newMsgValue = document.getElementById("input")

var textBox = document.getElementsByClassName("messages")[0]

sendButton.addEventListener("click", function addMsg(){
    var newMsg = document.createElement("div")
    newMsg.textContent = newMsgValue.value
    textBox.append(newMsg)
    console.log(textBox)

    
})
