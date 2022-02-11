export class Planet {
	constructor(positionX, positionY, positionZ, radius, texture, revolutionPeriod, rotationPeriod, options){

		this.positionX        = positionX
		this.positionY        = positionY
		this.positionZ        = positionZ
		this.radius           = radius
		this.texture          = texture
		this.revolutionPeriod = revolutionPeriod
		this.rotationPeriod   = rotationPeriod
		this.options          = options
	}

	create(){
		const texture  = new THREE.TextureLoader().load(this.texture)
		var geometry   = new THREE.SphereGeometry(this.radius * this.options.sizeMultiplier, 32, 32);
		const material = new THREE.MeshBasicMaterial( {map: texture} );
        var mesh       = new THREE.Mesh( geometry, material );
        mesh.position.x += this.positionX;
        mesh.position.y += this.positionY;
        mesh.position.z += this.positionZ;
		return mesh
	}

	getRotationSpeedAroundSun(rotationUnit){
		return (1 / (this.revolutionPeriod)) * rotationUnit
	}

	getRotationSpeedAroundItself(rotationUnit){
		const periodInDays = this.rotationPeriod/365
		return (1 / (periodInDays)) * rotationUnit
	}
}