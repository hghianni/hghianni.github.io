import { PlanetMaker } from '../src/PlanetMaker.js';
import { Planet } from '../src/Planet.js';
import { Sun } from '../src/Sun.js';
import { SolarSystemPlanets } from '../src/SolarSystemPlanets.js';
import { getRandomValue, setCamera, setRenderer, setControls, setBackground, addButton, clearSceneObjects } from '../src/helpers.js';
import { ImaginaryPlanetGenerator} from '../src/ImaginaryPlanetGenerator.js'
import { SaturnRing} from '../src/SaturnRing.js'
import { PlanetOptions } from '../src/PlanetOptions.js';


//------Base Code------

// Variables changed by buttons
var rotationUnit           = 0.0001
var sizeMultiplier         = 1
var imaginaryPlanetsModeOn = false

//Imaginary Planets Configuration
var topX       			 = 1000 
var topY       			 = 200 
var topZ       			 = 1
var topRadius            = 25
var topRevolutionPeriod  = 100
var topRotationPeriod    = 200

// Scene set up
var scene = new THREE.Scene();

setButtons()
setBackground(scene)
const camera   = setCamera()
const renderer = setRenderer()
const controls = setControls(camera, renderer)

// Global Variables 

var meshes        = Array()
var planetSystems = Array()
var planets       = Array()

// Add objects to scene
createObjects()

//------Base Code------



// Auxiliary functions
function createObjects(){

	clearScene(scene)

	var sun = new Sun();
	scene.add(sun.create())
	const sunPosition = sun.radius;
	const options     = new PlanetOptions(sizeMultiplier)

	if(imaginaryPlanetsModeOn){
		const numberOfPlanets = getRandomValue(15)
		const generator       = new ImaginaryPlanetGenerator(
								sunPosition, 
								topX, 
								topY, 
								topZ, 
								topRadius, 
								topRevolutionPeriod, 
								topRotationPeriod,
								options
								)
		
	for (var i = 0; i < numberOfPlanets; i++) {
		var planet = generator.generate()
		planets.push(planet)
		addPlanetToScene(planet)
	}

	}else{
		const maker = new PlanetMaker(options)
		planets     = new SolarSystemPlanets(sunPosition, maker)

		for (var i = 0; i < planets.length; i++) {
			addPlanetToScene(planets[i])
		}

	addSaturnRing()
	}

	animate()

}

function animate() {
	for (var i = 0; i < meshes.length; i++) {
		meshes[i].rotateY(planets[i].getRotationSpeedAroundItself(rotationUnit))
		planetSystems[i].rotateY(planets[i].getRotationSpeedAroundSun(rotationUnit))
	}

	requestAnimationFrame( animate );
	controls.update();
	renderer.render( scene, camera );
}

function addPlanetToScene(planet){
	var mesh         = planet.create()
	meshes.push(mesh)
	var planetSystem = new THREE.Group()
	planetSystem.add(mesh)
	planetSystems.push(planetSystem)
	scene.add(planetSystem)
}

function addSaturnRing(){
	const saturnPosition = 5
	var mesh             = new SaturnRing(planets[saturnPosition].radius, planets[saturnPosition].positionX)
	planetSystems[saturnPosition].add(mesh)
}

function clearScene(scene){
	clearVariables()
	clearSceneObjects(scene)
} 

function clearVariables(){
  meshes        = Array()
  planetSystems = Array()
  planets       = Array()
}   
 

function setButtons(){
	addButton('btn-speed-increase', increaseSpeed);
	addButton('btn-speed-reduce', reduceSpeed);
	addButton('btn-size-increase', increaseSize);
	addButton('btn-size-reduce', reduceSize);
	addButton('btn-change-mode', changeMode);
	addButton('btn-regenerate', regenerateImaginaryPlanets);
	addButton('btn-reset', reset);
}

function increaseSpeed(){
	rotationUnit = rotationUnit * 10
}

function reduceSpeed(){
	rotationUnit = rotationUnit / 10
}

function increaseSize(){
	sizeMultiplier += 0.5
	createObjects()
}

function reduceSize(){
	sizeMultiplier = sizeMultiplier - 0.5
	createObjects()
}

function reset(){
	rotationUnit           = 0.0001
	sizeMultiplier         = 1
	imaginaryPlanetsModeOn = false
	createObjects()
}

function changeMode(){
	imaginaryPlanetsModeOn = !imaginaryPlanetsModeOn
	createObjects()
}

function regenerateImaginaryPlanets(){
	if(imaginaryPlanetsModeOn){
		createObjects()
	}
}