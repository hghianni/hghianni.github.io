import {solarSystemTexturesDir} from '../src/constants.js';

export class SaturnRing {
	constructor(saturnRadius, saturnPosition){
		const color     = new THREE.Color( 0xb59b7c )
		const geometry  = new THREE.RingGeometry( saturnRadius + 5 , saturnRadius + 2, 30 );
		const material  = new THREE.MeshBasicMaterial( { color: color, side: THREE.DoubleSide, transparent: true } );
		const mesh      = new THREE.Mesh( geometry, material );
		mesh.position.x = saturnPosition
		mesh.rotation.x = -0.4 * Math.PI
	    return mesh
	}
}