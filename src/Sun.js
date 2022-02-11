import {solarSystemTexturesDir} from '../src/constants.js';

export class Sun {
	constructor(){
		this.rotationPeriod = 27
		this.radius         = 140
	}

	create(){
		var geometry    = new THREE.SphereGeometry(this.radius, 32, 32);
		const texture   = new THREE.TextureLoader().load(solarSystemTexturesDir + '/sun.jpg')
		var material    = new THREE.MeshBasicMaterial( { map: texture } );
		return new THREE.Mesh( geometry, material );
	}

	getRotationSpeedAroundItself(rotationUnit){
		return 1 / (this.rotationPeriod/365)
	}
}