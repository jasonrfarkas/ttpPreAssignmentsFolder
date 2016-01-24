
/*Create an OO JavaScript "cheat sheet" that includes:

Creating objects using
object literal
constructor function
Creating instances of objects
accessing object attributes and methods
prototypical objects
The file should have comments (denoted with a //) to explain each piece of code.

Write a method that lists the properties of a JavaScript object. (Hint: loops!)

Create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should initially return the number supplied * 1 
and from then on whatever the current value is times the number supplied. getCurrentValue should return the last answer returned from multiply.

Implement an object model that allows you to store strings that represent a Photo.
 Your model should include an Album object that can contain many Photo objects in its photos attribute. 
 Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. 
 Each Photo should tell you the photo's file name and the location the photo was taken in.
 Create instances of each object defined to prove that your object model works.

Create a prototypical Person object. 
From this object, extend a Teacher object and a Student object.
 Each of these objects should have attributes and methods pertinent to what they describe. 
 Also create a School object that should be able to store instances of students and teachers. 
 Make sure to write code afterwards that creates instances of these objects to make sure that 
 what you've written works well and you're able to store the necessary data in each object.
*/

$(document).ready(function(){

	function Person(fn,ln,age){
		this.firstName= fn;
		this.lastName= ln;
		this.age= age; 
		this.name = function(){return this.fname + " " + this.lname;}
	}
	function Student(grade){
		this.place = "Student";
		this.grade = grade;
		Person.apply(this, arguments);
	}
	Student.prototype = new Person();
	function Teacher(t){
		this.place = "Teacher";
		this.tenor = t;
		Person.apply(this, arguments);
	}
	Teacher.prototype = new Person();
	function School(){
		this.teacherList = [];
		this.studentList = [];
		this.addT = function(teacher){
			this.teacherList.push(teacher);
		}
		this.addS = function(student){
			this.studentList.push(student);
		}
	}

	var queens= new School();
	var p1= new Teacher(false, "james", "berlin", 52);
	var s1 = new Student("sophmore", "john", "hucklebee", 19);
	queens.addT(p1);
	queens.addS(s1);

	//object literal
	var car ={	make: "toyota", 
			   	model: "prius",
			   	fun1: function(){return "your " + this.make + " " + this.model + " has been stolen";}
			 }
	console.log(car.make);
	console.log(car.fun1());
	console.log(car.length);

	//constructor function of a prototypical car
	function Car(make, model, year){
  		this.make = make;
  		this.model = model;
  		this.year = year;
	}
	//creat new instance
	var charlie = new Car("honda","piolet", 2001 );
	//accessing attributes
	console.log(charlie.make);

	Car.prototype.retrieve = function (){ return "Your " + this.make + " " + this.model + " has been returned";}
	console.log(charlie.retrieve());

	//list all propreties in an object
	for (var property in charlie) {
    	if (charlie.hasOwnProperty(property)) {
        	console.log(property);
    	}
	}
	

	function Album(){
		this.photos = [];
		this.counter = 0;
		this.addP = function (photo){
			this.photos.push(photo);
			this.counter +=1;
		}
		this.list = function(){
			for(i=0;i<this.counter;i++){
				console.log("Photo " + i + ": fileName " + this.photos[i].fileName + " picLocation " + this.photos[i].picLocation);
			}
		}
		this.getp = function (indx){
			if(indx >=0 && indx <= this.counter){
				return this.photos[indx];
			}
			else{
				console.log("photo doesn't exist");
			}
		}
	}

	var al = new Album();
	var p1 = new PhotoString("bobinSnow.jpg","jersey");
	var p2 = new PhotoString("marginSnow.jpg","jersey");
	var p3 = new PhotoString("bobinPool.jpg","York");
	var p4 = new PhotoString("marginFlamingHotSouce.jpg","York");
	al.addP(p1);
	al.addP(p2);
	al.list();
	al.addP(p3);
	al.addP(p4);
	console.log(al.getp(3).fileName); 

	function PhotoString(name, loc){
		this.fileName= name;
		this.picLocation= loc;
	}

	function Multiplier(startN){
		this.number= startN;
		this.multiplier = 1;
		this.multiply = function(){
			this.multiplier = this.multiplier*this.number;
			return this.multiplier;
		}
		this.getCurrentValue = function(){
			return this.multiplier;
		}
	}




})



	