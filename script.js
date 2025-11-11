// Step 1: Create the Car constructor
function Car(make, model) {
	Car(make,model){
		this.make = make; 
	    this.model = model;
	}

	getMakeModel(){
		return this.make+" "+this.model;
	}
}

function SportsCar(make, model, topSpeed) extends Car
{
	SportsCar(){
		super(this.make,this.model)
		this.topSpeed = topSpeed; 
	}

	getTopSpeed(){
		return this.topSpeed;
	}
} 

const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel());
console.log(car.getTopSpeed()); 

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;