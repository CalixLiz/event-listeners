// GO!


//TASK #1
var barOpacity = document.querySelector('.nav-menu')
var butonNode = document.querySelector('.answer-box') 
var buttonOp = document.createElement('button')
buttonOp.innerHTML = 'boton'

butonNode.appendChild(buttonOp)

var stateBar = {
	showing: true
}

buttonOp.addEventListener('click', function(){

  if(stateBar.showing) {
   barOpacity.style.opacity = '0'
   stateBar.showing = false
  }
  else{
  	barOpacity.style.opacity = '1'
  	stateBar.showing = true
  }

})


//TASK #2


var KEYCODES = {
	enter: 13
}


var inputNode = document.querySelector('input[type="text"]')
var guestNode = document.querySelector('.guest-list')


inputNode.addEventListener('keydown', function(eventObj){
	if(eventObj.keyCode === KEYCODES.enter){

		var guestListNode = document.createElement('li')
		var deleteButton = document.createElement('button')
		guestListNode.innerHTML += eventObj.target.value
		deleteButton.innerHTML = 'Delete Guest'

		guestNode.appendChild(guestListNode)
		guestListNode.appendChild(deleteButton)
		eventObj.target.value = ''

		deleteButton.addEventListener('click', function(eventObj){
			guestNode.removeChild(guestListNode)
		})

	}
})


//TASK #3



// I 'experimented' into this space-code and whith the code in index.html but I couldn't find the error 
// just as a curiosity tryed to insert the button in TASK #2 and it Worked!!!!
// I don't know where is the bad code 
// Thanks!
// Regards

var KEYCODES = {
	enter: 13
}

var inputNode1 = document.querySelector('input[type="text"]')
var guestNode1 = document.querySelector('.guest-list1')
var guestName = document.querySelector('.guest-name')

inputNode1.addEventListener('keydown', function(eventObject){

	if (eventObj.keyCode === KEYCODES.enter) {
		var guestListNode = document.createElement('li')
		guestListNode.innerHTML += eventObject.target.value
		guestNode1.appendChild(guestListNode)
		eventObj.target.value = ''
	
	//PS I erased some code with testing purposes, but it was complete...

    }

})













