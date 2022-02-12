import { Planet } from '../src/Planet.js';

export class PlanetMaker {
	constructor(planetOptions){
		this.options = planetOptions
	}

	makePlanet(positionX, positionY, positionZ, radius, texture, revolutionPeriod, rotationPeriod){
		return new Planet(
			positionX, 
			positionY, 
			positionZ, 
			radius  * this.options.sizeMultiplier, 
			texture, 
			revolutionPeriod, 
			rotationPeriod, 
			this.options
		)
	}
}