//check the labels as first step

var myData;
var offset;
var scaleData;

function preload(){
	//usingCSV or TSV(table based formats
	//load load - but we're not using this
myData = loadJSON("assets/sandwiches.json");

}

function setup(){

	createCanvas(800,600);


	offset = 110;
	scaleData = 5;

	print(myData.sandwiches.length);

	fill(0);
	textSize(20); 

//var  numElements = myData.animals.length;
//var elementName = myData.animals[0].name; 

for(var i = 0; i <myData.sandwiches.length; i++){
	print(myData.sandwiches[i].name);
}

}
//for(var i = 0; i<0)


//console.log(elementName);	


function draw(){

	background(20,30,0);

	fill(255);
	textSize(50);
	fill(255,0,0);
	text("Tayleur's Favorite Foods", 50,50);


	push();

	translate(50,200);

	for(var i = 0; i < myData.sandwiches.length; i++){

		var myHeight = myData.sandwiches[i].height;
		var myName = myData.sandwiches[i].name;

		fill(10, mouseX, mouseY);
		stroke(255);
		ellipse(i * offset, 80, 80, myHeight *scaleData);
		
		textSize(20);
		fill(255,0,4);
		text(myName, i * offset, -60,80,90);

 //fill(10, mouseX, mouseY);
		
 



	}
	
	pop();

}