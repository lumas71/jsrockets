
// This Function changes the class of an element
var doCoolStuff = function() {
	var currentClassName = document.getElementById('cool').className;
	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red';
	} else {
		document.getElementById('cool').className = 'cool';
	}
	console.log(currentClassName);
}

var car = {
	make: 'VW',
	type: 'Golf',
	color: 'blue',
	isTurnedOn: false,
	numberofWheels: 4,
	seats: [
		'driver seat',
		'passenger seat',
		'backseat'],
	turnOn: function() {
		this.isTurnedOn = true;
	},
	switchCar: function(isOn) {
		var switchStatus ='turn car : '+isOn;
		if (isOn == true) {
			this.isTurnedOn = true;
		} else {
			this.isTurnedOn = false;
		}
		return switchStatus;
	},
	fly: function() {
		alert(this.switchCar(true));
	},
};