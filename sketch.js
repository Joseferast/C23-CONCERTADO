
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// adicionei a variavel do mundo
var engine, world;
var block1, block2;
var rotator1, rotator2, rotator3;
var particle1, particle2, particle3, particle4, particle5, particle6, particle7, particle8, particle9, particle10;
var plane;
var angle1 = 60;
var angle2 = 120;
var angle3 = 180;

function setup() {
	createCanvas(400, 500);
	
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	// adicionei o chão e dei estatica para os corpos

	var options = {isStatic:true};
	

	plane = Bodies.rectangle(600,height,1200,20,options);
	World.add(world,plane);

	block1 = Bodies.rectangle(100,400,150,20,options);
	World.add(world,block1);

	block2 = Bodies.rectangle(400,400,150,20,options);
	World.add(world,block2);


	var particle_options = {
		restitution:0.4,
		friction:0.02
	}
	particle1 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle1);

	particle2 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle2);
	
	particle3 = Bodies.circle(225,10,10,particle_options);
	World.add(world,particle3);

	particle4 = Bodies.circle(230,10,10,particle_options);
	World.add(world,particle4);

	particle5 = Bodies.circle(230,10,10,particle_options);
	World.add(world,particle5);

	particle6 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle6);

	particle7 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle7);
	
	particle8 = Bodies.circle(225,10,10,particle_options);
	World.add(world,particle8);

	particle9 = Bodies.circle(230,10,10,particle_options);
	World.add(world,particle9);

	particle10 = Bodies.circle(230,10,10,particle_options);
	World.add(world,particle10);


	var rotator_options = {
		isStatic: true
	}

	rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator1);
	
	rotator2 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator2);

	rotator3 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator3);

}


function draw() {
	background("lightgreen");
	Engine.update(engine);

	rectMode(CENTER);
	
	rect(plane.position.x,plane.position.y,1200,20);
	rect(block1.position.x,block1.position.y,150,20);
	rect(block2.position.x,block2.position.y,150,20);

	ellipse(particle1.position.x,particle1.position.y,10);
	ellipse(particle2.position.x,particle2.position.y,10);
	ellipse(particle3.position.x,particle3.position.y,10);
	ellipse(particle4.position.x,particle4.position.y,10);
	ellipse(particle5.position.x,particle5.position.y,10);
	ellipse(particle6.position.x,particle6.position.y,10);
	ellipse(particle7.position.x,particle7.position.y,10);
	ellipse(particle8.position.x,particle8.position.y,10);
	ellipse(particle9.position.x,particle9.position.y,10);
	ellipse(particle10.position.x,particle10.position.y,10);
	


	// tirei da setup e coloquei na draw  que é aonde faz aparecer
	//OBS: este abaixo já tem uma cópia melhor, este aqui está com o rotator 1 na borda da tela.
	//push();
	//Matter.Body.rotate(rotator1, angle1);
	//translate(rotator1.positionx, rotator1.position.y);
	//rotate(angle1);
	//rect(0, 0, 150, 20);
	//pop();
	//angle1 += 0.2;

	push()
	Matter.Body.rotate(rotator1, angle1);
	translate(rotator1.position.x, rotator1.position.y);
	rotate(angle1);
	rect(0, 0, 150, 20);
	pop();
	angle1 += 4.0;

	push()
	Matter.Body.rotate(rotator2, angle2);
	translate(rotator2.position.x, rotator2.position.y);
	rotate(angle2);
	rect(0, 0, 150, 20);
	pop();
	angle2 += 4.5;

	push()
	Matter.Body.rotate(rotator3, angle3);
	translate(rotator3.position.x, rotator3.position.y);
	rotate(angle3);
	rect(0, 0, 150, 20);
	pop();
	angle3 += 5;
	drawSprites();

}



