import {solarSystemTexturesDir} from '../src/constants.js';

export function clearSceneObjects(obj){
  while(obj.children.length > 0){ 
    clearSceneObjects(obj.children[0]);
    obj.remove(obj.children[0]);
  }
  if(obj.geometry) obj.geometry.dispose();

  if(obj.material){ 
    Object.keys(obj.material).forEach(prop => {
      if(obj.material[prop] && typeof obj.material[prop].dispose === 'function')                                  
        obj.material[prop].dispose();                                                      
    })
    obj.material.dispose();
  }
}  

export function getRandomValue(topValue){
  return Math.floor(Math.random() * (topValue) +1)
}

export function addButton(id, handler){
  const button = document.getElementById(id);
  button.addEventListener('click', handler, false);
}

export function setBackground(scene){
  const space      = new THREE.TextureLoader().load(solarSystemTexturesDir + "/stars-milky-way.jpg");
  scene.background = space;
}

export function setCamera(scene){
  var camera = new THREE.PerspectiveCamera( 30, window.innerWidth/window.innerHeight, 1, 1000 );
  camera.position.set(0,0,450)
  return camera
}

export function setRenderer(){
  var renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor("#000000");
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  return renderer
}

export function setControls(camera, renderer){
  const controls      = new THREE.OrbitControls( camera, renderer.domElement );
  controls.enableZoom = true
  return controls
}