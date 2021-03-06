import { getRandomValue} from '../src/helpers.js';
import { PlanetMaker } from '../src/PlanetMaker.js';
import {imaginaryPlanetsTexturesDir} from '../src/constants.js';

export class ImaginaryPlanetGenerator {
	constructor(sunPosition, topX, topY, topZ, topRadius, topRevolutionPeriod, topRotationPeriod, options){
		this.sunPosition         = sunPosition
		this.topX                = topX
		this.topY                = topY
		this.topZ                = topZ
		this.topRadius           = topRadius
		this.topRevolutionPeriod = topRevolutionPeriod
		this.topRotationPeriod   = topRotationPeriod
		this.options             = options
	}

	generate(){
		const x                = getRandomValue(this.topX) + this.sunPosition
		const y                = getRandomValue(this.topY)
    	const z                = getRandomValue(this.topZ)
		const radius           = getRandomValue(this.topRadius)
		const textureNumber    = getRandomValue(25)
		const textureDir       = imaginaryPlanetsTexturesDir + '/' + textureNumber + '.jpeg'
		const revolutionPeriod = getRandomValue(this.topRevolutionPeriod)
		const rotationPeriod   = getRandomValue(this.topRotationPeriod)
		const maker            = new PlanetMaker(this.options) 
		return maker.makePlanet(x,y,z, radius, textureDir, revolutionPeriod, rotationPeriod)
	}
}
